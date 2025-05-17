// Villa POS System

// Define language translations
const translations = {
    en: {
        selectVilla: "Select Villa",
        newOrder: "New Order",
        drinks: "Drinks",
        services: "Services",
        gifts: "Gifts",
        custom: "Custom",
        searchItems: "Search items...",
        customItems: "Custom Items",
        itemName: "Item name",
        itemPrice: "Price in EUR",
        addItem: "Add Item",
        markAsGift: "Mark as gift",
        giftItems: "Gift Items",
        giftInfo: "Items added here will be marked as gifts and won't be charged",
        discounts: "Discounts",
        discountPercent: "%",
        discountAmount: "EUR",
        applyPercentDiscount: "Apply %",
        applyAmountDiscount: "Apply €",
        removeDiscount: "Remove Discount",
        totalItems: "Total Items",
        totalAmount: "Total Amount",
        giftValue: "Gift Value",
        discount: "Discount",
        discountValue: "Discount Value",
        finalTotal: "Final Total",
        proceedToPayment: "Proceed to Payment",
        clearOrder: "Clear Order",
        paymentMethod: "Payment Method",
        cash: "Cash",
        cashDescription: "Pay with cash",
        card: "Card",
        cardDescription: "Pay with credit/debit card",
        unpaid: "Unpaid",
        unpaidDescription: "Mark as unpaid (pay later)",
        completeOrder: "Complete Order",
        cancel: "Cancel",
        orderCompleted: "Order Completed",
        receipt: "RECEIPT",
        paidItems: "Paid Items",
        total: "Total",
        shareReceipt: "Share Receipt",
        saveAsPDF: "Save as PDF",
        newOrder: "New Order",
        orderHistory: "Order History",
        noOrders: "No orders yet",
        clearHistory: "Clear History",
        backToMain: "Back to Main",
        processing: "Processing...",
        beerKeg30: "Beer Keg 30L",
        beerKeg50: "Beer Keg 50L",
        freeItem: "Free",
        giftBeer: "Beer (Gift)",
        giftProsecco: "Prosecco (Gift)",
        giftCocktail: "Cocktail (Gift)",
        pleaseAddItems: "Please add items to your order",
        selectPaymentMethod: "Please select a payment method",
        receiptSaved: "Receipt saved as PDF",
        receiptShared: "Receipt shared successfully",
        errorSharing: "Error sharing receipt",
        sharingNotSupported: "Sharing not supported on this device",
        enterValidAmount: "Please enter a valid amount",
        enterItemNamePrice: "Please enter item name and price",
        discountApplied: "Discount applied",
        discountRemoved: "Discount removed"
    },
    cs: {
        selectVilla: "Vyberte vilu",
        newOrder: "Nová objednávka",
        drinks: "Nápoje",
        services: "Služby",
        gifts: "Dárky",
        custom: "Vlastní",
        searchItems: "Hledat položky...",
        customItems: "Vlastní položky",
        itemName: "Název položky",
        itemPrice: "Cena v EUR",
        addItem: "Přidat položku",
        markAsGift: "Označit jako dárek",
        giftItems: "Dárkové položky",
        giftInfo: "Položky přidané zde budou označeny jako dárky a nebudou účtovány",
        discounts: "Slevy",
        discountPercent: "%",
        discountAmount: "EUR",
        applyPercentDiscount: "Použít %",
        applyAmountDiscount: "Použít €",
        removeDiscount: "Odstranit slevu",
        totalItems: "Počet položek",
        totalAmount: "Celková částka",
        giftValue: "Hodnota dárků",
        discount: "Sleva",
        discountValue: "Hodnota slevy",
        finalTotal: "Konečná cena",
        proceedToPayment: "Pokračovat k platbě",
        clearOrder: "Vymazat objednávku",
        paymentMethod: "Způsob platby",
        cash: "Hotovost",
        cashDescription: "Platba v hotovosti",
        card: "Karta",
        cardDescription: "Platba kartou",
        unpaid: "Nezaplaceno",
        unpaidDescription: "Označit jako nezaplacené (platba později)",
        completeOrder: "Dokončit objednávku",
        cancel: "Zrušit",
        orderCompleted: "Objednávka dokončena",
        receipt: "ÚČTENKA",
        paidItems: "Placené položky",
        total: "Celkem",
        shareReceipt: "Sdílet účtenku",
        saveAsPDF: "Uložit jako PDF",
        newOrder: "Nová objednávka",
        orderHistory: "Historie objednávek",
        noOrders: "Zatím žádné objednávky",
        clearHistory: "Vymazat historii",
        backToMain: "Zpět na hlavní stránku",
        processing: "Zpracování...",
        beerKeg30: "Sud piva 30L",
        beerKeg50: "Sud piva 50L",
        freeItem: "Zdarma",
        giftBeer: "Pivo (Dárek)",
        giftProsecco: "Prosecco (Dárek)",
        giftCocktail: "Koktejl (Dárek)",
        pleaseAddItems: "Přidejte položky do objednávky",
        selectPaymentMethod: "Vyberte způsob platby",
        receiptSaved: "Účtenka uložena jako PDF",
        receiptShared: "Účtenka úspěšně sdílena",
        errorSharing: "Chyba při sdílení účtenky",
        sharingNotSupported: "Sdílení není na tomto zařízení podporováno",
        enterValidAmount: "Zadejte platnou částku",
        enterItemNamePrice: "Zadejte název a cenu položky",
        discountApplied: "Sleva aplikována",
        discountRemoved: "Sleva odstraněna"
    }
};

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
    "wellness-fee": { name: "Wellness fee", priceCZK: 0, priceEUR: 0, category: "services", isCustom: true },
    // New beer kegs
    "beer-keg-30": { name: "Beer Keg 30L", priceCZK: 3000, priceEUR: 120, category: "drinks" },
    "beer-keg-50": { name: "Beer Keg 50L", priceCZK: 4375, priceEUR: 175, category: "drinks" },
    // Gift items
    "gift-beer": { name: "Beer (Gift)", priceCZK: 60, priceEUR: 2.4, category: "gifts", isGift: true },
    "gift-prosecco": { name: "Prosecco (Gift)", priceCZK: 475, priceEUR: 19, category: "gifts", isGift: true },
    "gift-cocktail": { name: "Cocktail (Gift)", priceCZK: 100, priceEUR: 4, category: "gifts", isGift: true }
};

// App state
let currentVilla = "";
let currentOrder = {};
let currentPayment = "";
let orderHistory = [];
let currentLanguage = "en";
let currentDiscount = {
    type: null, // "percent" or "amount"
    value: 0,
    amountEUR: 0
};

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
    // Load order history from localStorage
    loadOrderHistory();
    
    // Set up event listeners
    setupEventListeners();
    
    // Setup search functionality
    setupSearch();
    
    // Setup language switcher
    setupLanguage();
});

// Set up language switcher
function setupLanguage() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            switchLanguage(btn.dataset.lang);
        });
    });
    
    // Initial language update
    updateLanguageText();
}

// Switch language
function switchLanguage(lang) {
    currentLanguage = lang;
    updateLanguageText();
}

// Update UI text based on selected language
function updateLanguageText() {
    // Update elements with data-lang-key attribute
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[currentLanguage][key]) {
            el.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
        const key = el.getAttribute('data-lang-placeholder');
        if (translations[currentLanguage][key]) {
            el.placeholder = translations[currentLanguage][key];
        }
    });
    
    // Update special items with language-specific names
    updateItemNames();
}

// Update item names based on language
function updateItemNames() {
    // Update beer kegs names
    const beerKeg30 = document.querySelector('.item-row[data-item="beer-keg-30"] .item-name');
    if (beerKeg30) beerKeg30.textContent = translations[currentLanguage].beerKeg30;
    
    const beerKeg50 = document.querySelector('.item-row[data-item="beer-keg-50"] .item-name');
    if (beerKeg50) beerKeg50.textContent = translations[currentLanguage].beerKeg50;
    
    // Update gift items
    const giftBeer = document.querySelector('.item-row[data-item="gift-beer"] .item-name');
    if (giftBeer) giftBeer.textContent = translations[currentLanguage].giftBeer;
    
    const giftProsecco = document.querySelector('.item-row[data-item="gift-prosecco"] .item-name');
    if (giftProsecco) giftProsecco.textContent = translations[currentLanguage].giftProsecco;
    
    const giftCocktail = document.querySelector('.item-row[data-item="gift-cocktail"] .item-name');
    if (giftCocktail) giftCocktail.textContent = translations[currentLanguage].giftCocktail;
}

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
    
    // Manual quantity input
    document.querySelectorAll('.qty-input').forEach(input => {
        input.addEventListener('change', () => {
            const itemRow = input.closest('.item-row');
            const itemId = itemRow.dataset.item;
            const newQty = parseInt(input.value) || 0;
            const currentQty = currentOrder[itemId] ? currentOrder[itemId].qty : 0;
            
            if (newQty > currentQty) {
                // Add items
                if (itemId === 'city-tax') {
                    const people = parseInt(document.getElementById('cityTaxPeople').value) || 1;
                    const days = parseInt(document.getElementById('cityTaxDays').value) || 1;
                    addItem(itemId, newQty - currentQty, people, days);
                } else if (itemId === 'wellness-fee') {
                    const amount = parseFloat(document.getElementById('wellnessFeeAmount').value) || 0;
                    if (amount > 0) {
                        addCustomItem(itemId, newQty - currentQty, amount);
                    } else {
                        showNotification(translations[currentLanguage].enterValidAmount);
                        input.value = currentQty;
                        return;
                    }
                } else if (itemId.startsWith('gift-')) {
                    addGiftItem(itemId, newQty - currentQty);
                } else {
                    addItem(itemId, newQty - currentQty);
                }
            } else if (newQty < currentQty) {
                // Remove items
                removeItem(itemId, currentQty - newQty);
            }
            
            updateOrderSummary();
        });
    });
    
    // Quantity buttons
    document.querySelectorAll('.increase-qty').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemRow = e.target.closest('.item-row');
            const itemId = itemRow.dataset.item;
            const qtyInput = itemRow.querySelector('.qty-input');
            let qty = parseInt(qtyInput.value) || 0;
            
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
                    showNotification(translations[currentLanguage].enterValidAmount);
                    return;
                }
            } else if (itemId.startsWith('gift-')) {
                addGiftItem(itemId, 1);
            } else {
                addItem(itemId, 1);
            }
            
            qtyInput.value = qty + 1;
            updateOrderSummary();
        });
    });
    
    document.querySelectorAll('.decrease-qty').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemRow = e.target.closest('.item-row');
            const itemId = itemRow.dataset.item;
            const qtyInput = itemRow.querySelector('.qty-input');
            let qty = parseInt(qtyInput.value) || 0;
            
            if (qty > 0) {
                removeItem(itemId, 1);
                qtyInput.value = qty - 1;
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
    
    // Custom item
    document.getElementById('addCustomItem').addEventListener('click', () => {
        const name = document.getElementById('customItemName').value;
        const price = parseFloat(document.getElementById('customItemPrice').value);
        const isGift = document.getElementById('customItemGift').checked;
        
        if (!name || !price) {
            showNotification(translations[currentLanguage].enterItemNamePrice);
            return;
        }
        
        // Generate a unique ID for the custom item
        const itemId = 'custom-' + Date.now();
        
        // Add to custom items list
        const customItemsList = document.getElementById('customItemsList');
        const itemRow = document.createElement('div');
        itemRow.className = 'item-row';
        itemRow.dataset.item = itemId;
        if (isGift) itemRow.classList.add('gift-item');
        
        itemRow.innerHTML = `
            <div class="item-info">
                <div class="item-name">${name}</div>
                <div class="item-price">${isGift ? '0 EUR (' + translations[currentLanguage].freeItem + ')' : price.toFixed(2) + ' EUR'}</div>
            </div>
            <div class="item-quantity">
                <button class="decrease-qty">-</button>
                <input type="number" class="qty-input" value="0" min="0">
                <button class="increase-qty">+</button>
            </div>
        `;
        
        customItemsList.appendChild(itemRow);
        
        // Add event listeners for the new item
        const qtyInput = itemRow.querySelector('.qty-input');
        qtyInput.addEventListener('change', () => {
            const newQty = parseInt(qtyInput.value) || 0;
            const currentQty = currentOrder[itemId] ? currentOrder[itemId].qty : 0;
            
            if (newQty > currentQty) {
                if (isGift) {
                    addCustomGiftItem(itemId, name, price, newQty - currentQty);
                } else {
                    addCustomRegularItem(itemId, name, price, newQty - currentQty);
                }
            } else if (newQty < currentQty) {
                removeItem(itemId, currentQty - newQty);
            }
            
            updateOrderSummary();
        });
        
        itemRow.querySelector('.increase-qty').addEventListener('click', () => {
            let qty = parseInt(qtyInput.value) || 0;
            
            if (isGift) {
                addCustomGiftItem(itemId, name, price, 1);
            } else {
                addCustomRegularItem(itemId, name, price, 1);
            }
            
            qtyInput.value = qty + 1;
            updateOrderSummary();
        });
        
        itemRow.querySelector('.decrease-qty').addEventListener('click', () => {
            let qty = parseInt(qtyInput.value) || 0;
            
            if (qty > 0) {
                removeItem(itemId, 1);
                qtyInput.value = qty - 1;
                updateOrderSummary();
            }
        });
        
        // Clear form
        document.getElementById('customItemName').value = '';
        document.getElementById('customItemPrice').value = '';
        document.getElementById('customItemGift').checked = false;
    });
    
    // Discount buttons
    document.getElementById('applyPercentDiscount').addEventListener('click', () => {
        const percent = parseFloat(document.getElementById('discountPercent').value);
        if (!percent || percent <= 0 || percent > 100) {
            showNotification(translations[currentLanguage].enterValidAmount);
            return;
        }
        
        applyDiscount('percent', percent);
    });
    
    document.getElementById('applyAmountDiscount').addEventListener('click', () => {
        const amount = parseFloat(document.getElementById('discountAmount').value);
        if (!amount || amount <= 0) {
            showNotification(translations[currentLanguage].enterValidAmount);
            return;
        }
        
        applyDiscount('amount', amount);
    });
    
    document.getElementById('removeDiscount').addEventListener('click', () => {
        removeDiscount();
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
            showNotification(translations[currentLanguage].pleaseAddItems);
        }
    });
    
    document.getElementById('clearOrder').addEventListener('click', () => {
        initializeOrder();
        document.querySelectorAll('.qty-input').forEach(input => {
            input.value = "0";
        });
        updateOrderSummary();
        removeDiscount();
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
            showNotification(translations[currentLanguage].selectPaymentMethod);
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
    currentDiscount = { type: null, value: 0, amountEUR: 0 };
    updateOrderSummary();
}

// Add a regular item to the current order
function addItem(itemId, quantity = 1, people = 1, days = 1) {
    const item = itemsData[itemId];
    
    if (!currentOrder[itemId]) {
        currentOrder[itemId] = {
            name: item.name,
            priceEUR: item.priceEUR,
            priceCZK: item.priceCZK,
            qty: 0,
            totalEUR: 0,
            totalCZK: 0,
            isGift: false
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

// Add a gift item to the current order
function addGiftItem(itemId, quantity = 1) {
    const item = itemsData[itemId];
    
    if (!currentOrder[itemId]) {
        currentOrder[itemId] = {
            name: item.name,
            priceEUR: item.priceEUR,
            priceCZK: item.priceCZK,
            qty: 0,
            totalEUR: 0,
            totalCZK: 0,
            isGift: true
        };
    }
    
    currentOrder[itemId].qty += quantity;
    currentOrder[itemId].totalEUR = currentOrder[itemId].priceEUR * currentOrder[itemId].qty;
    currentOrder[itemId].totalCZK = currentOrder[itemId].priceCZK * currentOrder[itemId].qty;
}

// Add a custom regular item
function addCustomRegularItem(itemId, name, priceEUR, quantity = 1) {
    if (!currentOrder[itemId]) {
        currentOrder[itemId] = {
            name: name,
            priceEUR: priceEUR,
            priceCZK: priceEUR * 25, // Approximate conversion
            qty: 0,
            totalEUR: 0,
            totalCZK: 0,
            isGift: false,
            isCustom: true
        };
    }
    
    currentOrder[itemId].qty += quantity;
    currentOrder[itemId].totalEUR = currentOrder[itemId].priceEUR * currentOrder[itemId].qty;
    currentOrder[itemId].totalCZK = currentOrder[itemId].priceCZK * currentOrder[itemId].qty;
}

// Add a custom gift item
function addCustomGiftItem(itemId, name, priceEUR, quantity = 1) {
    if (!currentOrder[itemId]) {
        currentOrder[itemId] = {
            name: name,
            priceEUR: priceEUR,
            priceCZK: priceEUR * 25, // Approximate conversion
            qty: 0,
            totalEUR: 0,
            totalCZK: 0,
            isGift: true,
            isCustom: true
        };
    }
    
    currentOrder[itemId].qty += quantity;
    currentOrder[itemId].totalEUR = currentOrder[itemId].priceEUR * currentOrder[itemId].qty;
    currentOrder[itemId].totalCZK = currentOrder[itemId].priceCZK * currentOrder[itemId].qty;
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
            totalCZK: 0,
            isGift: false
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
            if (itemsData[itemId] && itemsData[itemId].isPerPersonDay) {
                const people = currentOrder[itemId].people;
                const days = currentOrder[itemId].days;
                currentOrder[itemId].totalEUR = currentOrder[itemId].priceEUR * people * days;
                currentOrder[itemId].totalCZK = currentOrder[itemId].priceCZK * people * days;
            } else if (itemsData[itemId] && itemsData[itemId].isCustom) {
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

// Apply discount
function applyDiscount(type, value) {
    currentDiscount.type = type;
    currentDiscount.value = value;
    
    const subtotal = getTotalAmount(false);
    
    if (type === 'percent') {
        currentDiscount.amountEUR = (subtotal * value / 100);
    } else {
        currentDiscount.amountEUR = value;
    }
    
    updateOrderSummary();
    showNotification(translations[currentLanguage].discountApplied);
}

// Remove discount
function removeDiscount() {
    currentDiscount = { type: null, value: 0, amountEUR: 0 };
    updateOrderSummary();
    
    // Hide discount elements
    document.querySelector('.discount-summary').style.display = 'none';
    document.querySelector('.final-total').style.display = 'none';
    
    showNotification(translations[currentLanguage].discountRemoved);
}

// Update the order summary
function updateOrderSummary() {
    const totalItems = getTotalItems();
    const totalGiftItems = getTotalGiftItems();
    const totalAmount = getTotalAmount(false);
    const totalGiftAmount = getTotalGiftAmount();
    
    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2) + ' EUR';
    
    document.getElementById('totalGiftItems').textContent = totalGiftItems;
    document.getElementById('totalGiftAmount').textContent = totalGiftAmount.toFixed(2) + ' EUR';
    
    // Handle discount if applied
    if (currentDiscount.type) {
        const discountSummary = document.querySelector('.discount-summary');
        const finalTotal = document.querySelector('.final-total');
        
        // Show discount elements
        discountSummary.style.display = 'flex';
        finalTotal.style.display = 'flex';
        
        // Update discount type and value
        document.getElementById('discountType').textContent = 
            currentDiscount.type === 'percent' ? 
            currentDiscount.value + '%' : 
            currentDiscount.value.toFixed(2) + ' EUR';
        
        document.getElementById('discountValue').textContent = currentDiscount.amountEUR.toFixed(2) + ' EUR';
        
        // Calculate final total
        const finalTotalAmount = Math.max(0, totalAmount - currentDiscount.amountEUR);
        document.getElementById('finalTotalAmount').textContent = finalTotalAmount.toFixed(2) + ' EUR';
    } else {
        // Hide discount elements
        document.querySelector('.discount-summary').style.display = 'none';
        document.querySelector('.final-total').style.display = 'none';
    }
}

// Update the payment summary
function updatePaymentSummary() {
    const totalItems = getTotalItems();
    const totalGiftItems = getTotalGiftItems();
    const totalAmount = getTotalAmount(false);
    const totalGiftAmount = getTotalGiftAmount();
    
    document.getElementById('paymentTotalItems').textContent = totalItems;
    document.getElementById('paymentTotalAmount').textContent = totalAmount.toFixed(2) + ' EUR';
    
    document.getElementById('paymentTotalGiftItems').textContent = totalGiftItems;
    document.getElementById('paymentTotalGiftAmount').textContent = totalGiftAmount.toFixed(2) + ' EUR';
    
    // Handle discount if applied
    if (currentDiscount.type) {
        const discountSummary = document.querySelector('#paymentScreen .discount-summary');
        const finalTotal = document.querySelector('#paymentScreen .final-total');
        
        // Show discount elements
        discountSummary.style.display = 'flex';
        finalTotal.style.display = 'flex';
        
        // Update discount type and value
        document.getElementById('paymentDiscountType').textContent = 
            currentDiscount.type === 'percent' ? 
            currentDiscount.value + '%' : 
            currentDiscount.value.toFixed(2) + ' EUR';
        
        document.getElementById('paymentDiscountValue').textContent = currentDiscount.amountEUR.toFixed(2) + ' EUR';
        
        // Calculate final total
        const finalTotalAmount = Math.max(0, totalAmount - currentDiscount.amountEUR);
        document.getElementById('paymentFinalTotalAmount').textContent = finalTotalAmount.toFixed(2) + ' EUR';
    } else {
        // Hide discount elements
        document.querySelector('#paymentScreen .discount-summary').style.display = 'none';
        document.querySelector('#paymentScreen .final-total').style.display = 'none';
    }
}

// Get the total number of items in the order (excluding gifts)
function getTotalItems() {
    let total = 0;
    
    for (const itemId in currentOrder) {
        if (!currentOrder[itemId].isGift) {
            total += currentOrder[itemId].qty;
        }
    }
    
    return total;
}

// Get the total number of gift items
function getTotalGiftItems() {
    let total = 0;
    
    for (const itemId in currentOrder) {
        if (currentOrder[itemId].isGift) {
            total += currentOrder[itemId].qty;
        }
    }
    
    return total;
}

// Get the total amount of the order in EUR (optionally including gifts)
function getTotalAmount(includeGifts = false) {
    let total = 0;
    
    for (const itemId in currentOrder) {
        if (includeGifts || !currentOrder[itemId].isGift) {
            total += currentOrder[itemId].totalEUR;
        }
    }
    
    return total;
}

// Get the total gift amount
function getTotalGiftAmount() {
    let total = 0;
    
    for (const itemId in currentOrder) {
        if (currentOrder[itemId].isGift) {
            total += currentOrder[itemId].totalEUR;
        }
    }
    
    return total;
}

// Get the final total amount after discount
function getFinalTotalAmount() {
    const subtotal = getTotalAmount(false);
    
    if (currentDiscount.type) {
        return Math.max(0, subtotal - currentDiscount.amountEUR);
    }
    
    return subtotal;
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
        
        // Calculate final totals
        const subtotal = getTotalAmount(false);
        const finalTotal = getFinalTotalAmount();
        const giftTotal = getTotalGiftAmount();
        
        // Create order object for history
        const order = {
            id: Date.now(),
            villa: getVillaName(currentVilla),
            villaId: currentVilla,
            date: dateTimeStr,
            timestamp: now.getTime(),
            items: { ...currentOrder },
            totalItems: getTotalItems(),
            totalGiftItems: getTotalGiftItems(),
            subtotalAmount: subtotal,
            discount: { ...currentDiscount },
            finalAmount: finalTotal,
            giftAmount: giftTotal,
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
    
    // Paid items
    const receiptPaidItemsContainer = document.getElementById('receiptPaidItems');
    receiptPaidItemsContainer.innerHTML = "";
    
    // Gift items
    const receiptGiftItemsContainer = document.getElementById('receiptGiftItems');
    receiptGiftItemsContainer.innerHTML = "";
    const receiptGiftSection = document.getElementById('receiptGiftSection');
    
    // Add items to receipt
    let hasGiftItems = false;
    
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
        
        if (item.isGift) {
            receiptGiftItemsContainer.appendChild(itemElement);
            hasGiftItems = true;
        } else {
            receiptPaidItemsContainer.appendChild(itemElement);
        }
    }
    
    // Show or hide gift section
    if (hasGiftItems) {
        receiptGiftSection.style.display = 'block';
        document.getElementById('receiptGiftTotal').textContent = `${order.giftAmount.toFixed(2)} EUR`;
    } else {
        receiptGiftSection.style.display = 'none';
    }
    
    // Handle discount if applied
    const receiptDiscount = document.getElementById('receiptDiscount');
    if (order.discount && order.discount.type) {
        receiptDiscount.style.display = 'block';
        document.getElementById('receiptDiscountType').textContent = 
            order.discount.type === 'percent' ? 
            order.discount.value + '%' : 
            order.discount.value.toFixed(2) + ' EUR';
            
        document.getElementById('receiptDiscountValue').textContent = `-${order.discount.amountEUR.toFixed(2)} EUR`;
        document.getElementById('receiptPaidTotal').textContent = `${order.finalAmount.toFixed(2)} EUR`;
    } else {
        receiptDiscount.style.display = 'none';
        document.getElementById('receiptPaidTotal').textContent = `${order.subtotalAmount.toFixed(2)} EUR`;
    }
    
    // Payment method
    const paymentElement = document.getElementById('receiptPayment');
    switch (order.payment) {
        case 'cash':
            paymentElement.textContent = translations[currentLanguage].cash;
            paymentElement.className = 'receipt-payment';
            break;
        case 'card':
            paymentElement.textContent = translations[currentLanguage].card;
            paymentElement.className = 'receipt-payment';
            break;
        case 'unpaid':
            paymentElement.textContent = translations[currentLanguage].unpaid;
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
            showNotification(translations[currentLanguage].receiptSaved);
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
                        showNotification(translations[currentLanguage].receiptShared);
                    })
                    .catch(error => {
                        hideLoading();
                        showNotification(translations[currentLanguage].errorSharing);
                        console.error("Error sharing receipt:", error);
                    });
                });
            });
        }, 500);
    } else {
        showNotification(translations[currentLanguage].sharingNotSupported);
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
        navigator.serviceWorker.register('./service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registered: ', registration.scope);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed: ', error);
            });
    });
}