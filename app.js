// Villa POS System

// Define the items data
const itemsData = {
    "jagermeister": { name: "Jägermeister shot", priceCZK: 59, priceEUR: 2.40, category: "drinks" },
    "soda": { name: "Coca-Cola, Sprite, Fanta", priceCZK: 32, priceEUR: 1.3, category: "drinks" },
    "vitamin-water": { name: "Vitamin Water", priceCZK: 35, priceEUR: 1.4, category: "drinks" },
    "redbull": { name: "Red Bull", priceCZK: 60, priceEUR: 2.4, category: "drinks" },
    "jack-cola": { name: "Jack & Cola", priceCZK: 125, priceEUR: 5, category: "drinks" },
    "gin-tonic": { name: "Gin & Tonic", priceCZK: 75, priceEUR: 3, category: "drinks" },
    "moscow-mule": { name: "Moscow Mule", priceCZK: 100, priceEUR: 4, category: "drinks" },
    "mojito": { name: "Mojito", priceCZK: 100, priceEUR: 4, category: "drinks" },
    "pina-colada": { name: "Piña Colada", priceCZK: 100, priceEUR: 4, category: "drinks" },
    "beer": { name: "Beer", priceCZK: 60, priceEUR: 2.4, category: "drinks" },
    "prosecco": { name: "Prosecco", priceCZK: 475, priceEUR: 19, category: "drinks" },
    "grill-gas": { name: "Gas for grill", priceCZK: 500, priceEUR: 20, category: "services" },
    "fire-table-gas": { name: "Gas for fire table", priceCZK: 300, priceEUR: 12, category: "services" },
    "city-tax": { name: "City Tax", priceCZK: 50, priceEUR: 2, category: "services", isPerPersonDay: true },
    "wellness-fee": { name: "Wellness fee", priceCZK: 0, priceEUR: 0, category: "services", isCustom: true }
};

// App state
let currentVilla = "";
let currentOrder = {};
let currentPayment = "";
let orderHistory = [];

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
    // Load order history from localStorage
    loadOrderHistory();
    
    // Set up event listeners
    setupEventListeners();
    
    // Setup search functionality
    setupSearch();
});

// Set up event listeners
function setupEventListeners() {
    // Villa selection
    document.querySelectorAll('.villa-card').forEach(card => {
        card.addEventListener('click', () => {
            currentVilla = card.dataset.villa;
            showScreen('orderScreen');
            initializeOrder();
        });
    });
    
    // Category tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const category = tab.dataset.category;
            document.querySelectorAll('.category-content').forEach(content => {
                content.style.display = 'none';
            });
            document.getElementById(`${category}Category`).style.display = 'block';
        });
    });
    
    // Quantity buttons
    document.querySelectorAll('.increase-qty').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemRow = e.target.closest('.item-row');
            const itemId = itemRow.dataset.item;
            const qtyElement = itemRow.querySelector('.qty');
            let qty = parseInt(qtyElement.textContent);
            
            // If it's a special item with custom fields
            if (itemId === 'city-tax') {
                const people = parseInt(document.getElementById('cityTaxPeople').value) || 1;
                const days = parseInt(document.getElementById('cityTaxDays').value) || 1;
                addItem(itemId, 1, people, days);
            } else if (itemId === 'wellness-fee') {
                const amount = parseFloat(document.getElementById('wellnessFeeAmount').value) || 0;
                if (amount > 0) {
                    addCustomItem(itemId, 1, amount);
                } else {
                    showNotification("Please enter a valid amount");
                    return;
                }
            } else {
                addItem(itemId, 1);
            }
            
            qtyElement.textContent = qty + 1;
            updateOrderSummary();
        });
    });
    
    document.querySelectorAll('.decrease-qty').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemRow = e.target.closest('.item-row');
            const itemId = itemRow.dataset.item;
            const qtyElement = itemRow.querySelector('.qty');
            let qty = parseInt(qtyElement.textContent);
            
            if (qty > 0) {
                removeItem(itemId, 1);
                qtyElement.textContent = qty - 1;
                updateOrderSummary();
            }
        });
    });
    
    // Special inputs for city tax
    document.getElementById('cityTaxPeople').addEventListener('change', () => {
        if (currentOrder['city-tax'] && currentOrder['city-tax'].qty > 0) {
            const people = parseInt(document.getElementById('cityTaxPeople').value) || 1;
            const days = parseInt(document.getElementById('cityTaxDays').value) || 1;
            currentOrder['city-tax'].people = people;
            currentOrder['city-tax'].days = days;
            currentOrder['city-tax'].totalEUR = people * days * itemsData['city-tax'].priceEUR;
            currentOrder['city-tax'].totalCZK = people * days * itemsData['city-tax'].priceCZK;
            updateOrderSummary();
        }
    });
    
    document.getElementById('cityTaxDays').addEventListener('change', () => {
        if (currentOrder['city-tax'] && currentOrder['city-tax'].qty > 0) {
            const people = parseInt(document.getElementById('cityTaxPeople').value) || 1;
            const days = parseInt(document.getElementById('cityTaxDays').value) || 1;
            currentOrder['city-tax'].people = people;
            currentOrder['city-tax'].days = days;
            currentOrder['city-tax'].totalEUR = people * days * itemsData['city-tax'].priceEUR;
            currentOrder['city-tax'].totalCZK = people * days * itemsData['city-tax'].priceCZK;
            updateOrderSummary();
        }
    });
    
    // Special input for wellness fee
    document.getElementById('wellnessFeeAmount').addEventListener('change', () => {
        if (currentOrder['wellness-fee'] && currentOrder['wellness-fee'].qty > 0) {
            const amount = parseFloat(document.getElementById('wellnessFeeAmount').value) || 0;
            currentOrder['wellness-fee'].customAmount = amount;
            currentOrder['wellness-fee'].totalEUR = amount;
            currentOrder['wellness-fee'].totalCZK = amount * 25; // Approximate conversion
            updateOrderSummary();
        }
    });
    
    // Navigation buttons
    document.getElementById('backToVilla').addEventListener('click', () => {
        showScreen('villaScreen');
    });
    
    document.getElementById('proceedToPayment').addEventListener('click', () => {
        if (getTotalItems() > 0) {
            updatePaymentSummary();
            showScreen('paymentScreen');
        } else {
            showNotification("Please add items to your order");
        }
    });
    
    document.getElementById('clearOrder').addEventListener('click', () => {
        initializeOrder();
        document.querySelectorAll('.qty').forEach(qty => {
            qty.textContent = "0";
        });
        updateOrderSummary();
    });
    
    document.getElementById('backToOrder').addEventListener('click', () => {
        showScreen('orderScreen');
    });
    
    document.getElementById('cancelPayment').addEventListener('click', () => {
        showScreen('orderScreen');
    });
    
    // Payment options
    document.querySelectorAll('.payment-option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.payment-option').forEach(o => {
                o.classList.remove('selected');
            });
            option.classList.add('selected');
            currentPayment = option.dataset.payment;
        });
    });
    
    // Complete order
    document.getElementById('completeOrder').addEventListener('click', () => {
        if (!currentPayment) {
            showNotification("Please select a payment method");
            return;
        }
        
        completeOrder();
    });
    
    // Receipt actions
    document.getElementById('shareReceipt').addEventListener('click', () => {
        shareReceipt();
    });
    
    document.getElementById('saveReceipt').addEventListener('click', () => {
        saveReceiptAsPDF();
    });
    
    document.getElementById('newOrder').addEventListener('click', () => {
        showScreen('villaScreen');
    });
}

// Set up search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchItems');
    
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        
        document.querySelectorAll('.item-row').forEach(row => {
            const itemName = row.querySelector('.item-name').textContent.toLowerCase();
            
            if (itemName.includes(searchTerm) || searchTerm === '') {
                row.style.display = 'flex';
            } else {
                row.style.display = 'none';
            }
        });
    });
}

// Initialize a new order
function initializeOrder() {
    currentOrder = {};
    updateOrderSummary();
}

// Add an item to the current order
function addItem(itemId, quantity = 1, people = 1, days = 1) {
    const item = itemsData[itemId];
    
    if (!currentOrder[itemId]) {
        currentOrder[itemId] = {
            name: item.name,
            priceEUR: item.priceEUR,
            priceCZK: item.priceCZK,
            qty: 0,
            totalEUR: 0,
            totalCZK: 0
        };
        
        if (item.isPerPersonDay) {
            currentOrder[itemId].people = people;
            currentOrder[itemId].days = days;
        }
    }
    
    currentOrder[itemId].qty += quantity;
    
    if (item.isPerPersonDay) {
        currentOrder[itemId].totalEUR = currentOrder[itemId].priceEUR * people * days;
        currentOrder[itemId].totalCZK = currentOrder[itemId].priceCZK * people * days;
    } else {
        currentOrder[itemId].totalEUR = currentOrder[itemId].priceEUR * currentOrder[itemId].qty;
        currentOrder[itemId].totalCZK = currentOrder[itemId].priceCZK * currentOrder[itemId].qty;
    }
}

// Add a custom item (like wellness fee)
function addCustomItem(itemId, quantity = 1, amount = 0) {
    const item = itemsData[itemId];
    
    if (!currentOrder[itemId]) {
        currentOrder[itemId] = {
            name: item.name,
            customAmount: amount,
            qty: 0,
            totalEUR: 0,
            totalCZK: 0
        };
    }
    
    currentOrder[itemId].qty += quantity;
    currentOrder[itemId].totalEUR = amount;
    currentOrder[itemId].totalCZK = amount * 25; // Approximate conversion
}

// Remove an item from the current order
function removeItem(itemId, quantity = 1) {
    if (currentOrder[itemId]) {
        currentOrder[itemId].qty -= quantity;
        
        if (currentOrder[itemId].qty <= 0) {
            delete currentOrder[itemId];
        } else {
            if (itemsData[itemId].isPerPersonDay) {
                const people = currentOrder[itemId].people;
                const days = currentOrder[itemId].days;
                currentOrder[itemId].totalEUR = currentOrder[itemId].priceEUR * people * days;
                currentOrder[itemId].totalCZK = currentOrder[itemId].priceCZK * people * days;
            } else if (itemsData[itemId].isCustom) {
                const amount = currentOrder[itemId].customAmount;
                currentOrder[itemId].totalEUR = amount;
                currentOrder[itemId].totalCZK = amount * 25;
            } else {
                currentOrder[itemId].totalEUR = currentOrder[itemId].priceEUR * currentOrder[itemId].qty;
                currentOrder[itemId].totalCZK = currentOrder[itemId].priceCZK * currentOrder[itemId].qty;
            }
        }
    }
}

// Update the order summary
function updateOrderSummary() {
    const totalItems = getTotalItems();
    const totalAmount = getTotalAmount();
    
    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2) + ' EUR';
}

// Update the payment summary
function updatePaymentSummary() {
    const totalItems = getTotalItems();
    const totalAmount = getTotalAmount();
    
    document.getElementById('paymentTotalItems').textContent = totalItems;
    document.getElementById('paymentTotalAmount').textContent = totalAmount.toFixed(2) + ' EUR';
}

// Get the total number of items in the order
function getTotalItems() {
    let total = 0;
    
    for (const itemId in currentOrder) {
        total += currentOrder[itemId].qty;
    }
    
    return total;
}

// Get the total amount of the order in EUR
function getTotalAmount() {
    let total = 0;
    
    for (const itemId in currentOrder) {
        total += currentOrder[itemId].totalEUR;
    }
    
    return total;
}

// Complete the order
function completeOrder() {
    // Show loading indicator
    showLoading();
    
    setTimeout(() => {
        // Get the current date and time
        const now = new Date();
        const dateStr = now.toLocaleDateString();
        const timeStr = now.toLocaleTimeString();
        const dateTimeStr = `${dateStr} ${timeStr}`;
        
        // Create order object for history
        const order = {
            id: Date.now(),
            villa: getVillaName(currentVilla),
            villaId: currentVilla,
            date: dateTimeStr,
            timestamp: now.getTime(),
            items: { ...currentOrder },
            totalItems: getTotalItems(),
            totalAmount: getTotalAmount(),
            payment: currentPayment
        };
        
        // Add to order history
        orderHistory.unshift(order);
        
        // Save to localStorage
        saveOrderHistory();
        
        // Generate receipt
        generateReceipt(order);
        
        // Hide loading indicator
        hideLoading();
        
        // Show receipt screen
        showScreen('receiptScreen');
    }, 1000);
}

// Generate receipt
function generateReceipt(order) {
    document.getElementById('receiptVilla').textContent = order.villa;
    document.getElementById('receiptDate').textContent = order.date;
    
    const receiptItemsContainer = document.getElementById('receiptItems');
    receiptItemsContainer.innerHTML = "";
    
    for (const itemId in order.items) {
        const item = order.items[itemId];
        
        const itemElement = document.createElement('div');
        itemElement.className = 'receipt-item';
        
        const itemLeftElement = document.createElement('div');
        itemLeftElement.className = 'receipt-item-left';
        
        const itemNameElement = document.createElement('div');
        itemNameElement.className = 'receipt-item-name';
        itemNameElement.textContent = item.name;
        
        const itemQtyElement = document.createElement('div');
        itemQtyElement.className = 'receipt-item-qty';
        
        if (itemId === 'city-tax') {
            itemQtyElement.textContent = `${item.people} person(s) × ${item.days} day(s) × ${item.priceEUR.toFixed(2)} EUR`;
        } else if (itemId === 'wellness-fee') {
            itemQtyElement.textContent = `Custom amount: ${item.customAmount.toFixed(2)} EUR`;
        } else {
            itemQtyElement.textContent = `${item.qty} × ${item.priceEUR.toFixed(2)} EUR`;
        }
        
        itemLeftElement.appendChild(itemNameElement);
        itemLeftElement.appendChild(itemQtyElement);
        
        const itemPriceElement = document.createElement('div');
        itemPriceElement.className = 'receipt-item-price';
        itemPriceElement.textContent = `${item.totalEUR.toFixed(2)} EUR`;
        
        itemElement.appendChild(itemLeftElement);
        itemElement.appendChild(itemPriceElement);
        
        receiptItemsContainer.appendChild(itemElement);
    }
    
    document.getElementById('receiptTotal').textContent = `${order.totalAmount.toFixed(2)} EUR`;
    
    const paymentElement = document.getElementById('receiptPayment');
    switch (order.payment) {
        case 'cash':
            paymentElement.textContent = 'Paid with Cash';
            paymentElement.className = 'receipt-payment';
            break;
        case 'card':
            paymentElement.textContent = 'Paid with Card';
            paymentElement.className = 'receipt-payment';
            break;
        case 'unpaid':
            paymentElement.textContent = 'UNPAID - To be paid later';
            paymentElement.className = 'receipt-payment receipt-unpaid';
            break;
    }
}

// Save receipt as PDF
function saveReceiptAsPDF() {
    showLoading();
    
    setTimeout(() => {
        const { jsPDF } = window.jspdf;
        const receiptElement = document.getElementById('receiptContent');
        
        html2canvas(receiptElement, { scale: 2 }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save('receipt.pdf');
            
            hideLoading();
            showNotification("Receipt saved as PDF");
        });
    }, 500);
}

// Share receipt
function shareReceipt() {
    if (navigator.share) {
        showLoading();
        
        setTimeout(() => {
            const { jsPDF } = window.jspdf;
            const receiptElement = document.getElementById('receiptContent');
            
            html2canvas(receiptElement, { scale: 2 }).then(canvas => {
                canvas.toBlob(blob => {
                    const file = new File([blob], "receipt.png", { type: "image/png" });
                    
                    navigator.share({
                        title: 'Villa Receipt',
                        text: 'Here is your receipt',
                        files: [file]
                    })
                    .then(() => {
                        hideLoading();
                        showNotification("Receipt shared successfully");
                    })
                    .catch(error => {
                        hideLoading();
                        showNotification("Error sharing receipt");
                        console.error("Error sharing receipt:", error);
                    });
                });
            });
        }, 500);
    } else {
        showNotification("Sharing not supported on this device");
    }
}

// Save order history to localStorage
function saveOrderHistory() {
    localStorage.setItem('villaOrderHistory', JSON.stringify(orderHistory));
}

// Load order history from localStorage
function loadOrderHistory() {
    const savedHistory = localStorage.getItem('villaOrderHistory');
    if (savedHistory) {
        orderHistory = JSON.parse(savedHistory);
    }
}

// Helper functions
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    document.getElementById(screenId).classList.add('active');
}

function getVillaName(villaId) {
    switch (villaId) {
        case 'little-castle':
            return 'The Little Castle';
        case 'amazing-villa':
            return 'Amazing Villa';
        case 'oh-yeah-villa':
            return 'Oh Yeah Villa';
        default:
            return '';
    }
}

function showLoading() {
    document.querySelector('.loading').style.display = 'flex';
}

function hideLoading() {
    document.querySelector('.loading').style.display = 'none';
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('active');
    
    setTimeout(() => {
        notification.classList.remove('active');
    }, 3000);
}

// Register service worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registered: ', registration.scope);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed: ', error);
            });
    });
}
