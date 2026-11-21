let player = {
    playerName: "Arthas",
    level: 25,
    health: 100,
    maxHealth: 100,
    guild: {
        name: "Warriors of Light",
        rank: "Knight"
    },
    stats: {
        strength: 85,
        agility: 60,
        intelligence: 75
    },
    inventory: ["Sword", "Shield", "Potion", "Bow"],
    activeEffects: ["Strength Boost", "Speed Boost"],

    damage(damage) {
        if(damage <= 0) { return; }
        this.health = this.health - damage;
         if (this.health < 0) {
            this.health = 0;
        }
    },
    heal(heal) {
        if(heal <= 0) { return; }
        this.health = this.health + heal;
        if (this.health > this.maxHealth) {
            this.health = this.maxHealth;
        }

    },
    levelUp() {
        this.level++;
    },
    addItem(item) {
        this.inventory.push(item);

    }
}
player.damage(20);
player.heal(50);
player.levelUp();
player.addItem("Medkit");

player.stats.strength = 100;
player.gold = 520;

let playerCopy = { ...player };

playerCopy.playerName = "Player copy";
playerCopy.stats.strength = 150;

console.log(player);
console.log(playerCopy);

//2
let settingArr = ["theme", "language", "fontSize", "notifications"];

let userSettings = {
    [settingArr[0]]: "dark",
    [settingArr[1]]: "Ukrainian",

    changeSetting(setting, value) {
        this[setting] = value;
    },
    deleteSetting(setting) {
        delete this[setting];
    },
    getSetting(setting) {
        return this[setting];
    }
}

userSettings.changeSetting("theme", "light");
console.log(userSettings.getSetting("theme"));
userSettings.deleteSetting("fontSize");

let keys = Object.keys(userSettings);
console.log(keys);
let entries = Object.entries(userSettings);
console.log(entries);

let settingsCopy = Object.fromEntries(entries);
console.log(settingsCopy);


//3
let user = {
    userData: {
        name: "Alex",
        age: 23,
        email: "alex@gmail.com"
    },
    settings: {
        theme: "dark",
        language: "Ukrainian",
        notifications: true
    },
    address: {
        country: "Ukraine",
        city: "Odesa",
        street: "Deribasivska"
    },
    friends: [
        {
            name: "Anna",
            age: 25
        },
        {
            name: "Maria",
            age: 24
        }
    ],
    actionHistory: [
        "Login",
        "Changed theme",
        "Added friend"
    ]
};

function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    let copy;

    if (Array.isArray(obj)) {
        copy = [];
    }
    else {
        copy = {};
    }

    for (let key in obj) {
        copy[key] = deepCopy(obj[key]);
    }
    return copy;
}

let userCopy = deepCopy(user);

userCopy.userData.name = "Alex";
userCopy.settings.theme = "light";
userCopy.address.city = "Lviv";
userCopy.friends[0].name = "Bob";
userCopy.actionHistory.push("Logged out");

console.log("First user:");
console.log(user);

console.log("Copied user:");
console.log(userCopy);


//4
let shop = {
    products: [
        {
            name: "Laptop",
            price: 35000,
            category: "Electronics",
            quantity: 5,

            changeQuantity(amount) {
                if (this.quantity + amount < 0) {
                    return;
                }
                this.quantity += amount;
            }
        },
        {
            name: "Sneakers",
            price: 2500,
            category: "Sportswear",
            quantity: 14,

            changeQuantity(amount) {
                if (this.quantity + amount < 0) {
                    return;
                }
                this.quantity += amount;
            }
        },
        {
            name: "Paint",
            price: 272,
            category: "Art",
            quantity: 18,

            changeQuantity(amount) {
                if (this.quantity + amount < 0) {
                    return;
                }
                this.quantity += amount;
            }
        },
        {
            name: "Book",
            price: 500,
            category: "Books",
            quantity: 20,

            changeQuantity(amount) {
                if (this.quantity + amount < 0) {
                    return;
                }
                this.quantity += amount;
            }
        }
    ],
    
    findProduct(name) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].name === name) {
                return this.products[i];
            }
        }
        return;
    },

    deleteProduct(name) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].name === name) {
                this.products.splice(i, 1);
                return;
            }
        }
    },

    changePrice(name, newPrice) {
        let product = this.findProduct(name);

        if (product !== undefined && newPrice > 0) {
            product.price = newPrice;
        }
    },
    
    getTotalValue() {
        let total = 0;

        for (let i = 0; i < this.products.length; i++) {
            total += this.products[i].price * this.products[i].quantity;
        }
        return total;
    }
};

shop.products[0].changeQuantity(-2);
shop.products[1].changeQuantity(5);

let findingProduct = shop.findProduct("Book");
console.log(findingProduct);

shop.changePrice("Book", 600);

shop.deleteProduct("Paint");

let additionalInfo = {
    brand: "Lenovo",
    color: "Black"
};

let product1 = Object.assign({}, shop.products[0], additionalInfo);

let product2 = {
    ...shop.products[0],
    ...additionalInfo
};

console.log("Products:");
console.log(shop.products);
console.log(`Product ${shop.products[0].name}:`);
console.log(product1);
console.log(`Product ${shop.products[0].name}:`);
console.log(product2);


//5
let Character = {
    name: "",
    health: 100,

    attack() {
        console.log(`${this.name} is attacking!`);
    }
};

let Warrior = Object.create(Character);
Warrior.weapon = "Sword";

Warrior.attack = function() {
    console.log(`${this.name} is attacking with a sword!`);
};

Warrior.heal = function() {
    console.log(`${this.name} is healing!`);
};

let Mage = Object.create(Character);
Mage.mana = 100;

Mage.attack = function() {
    console.log(`${this.name} casts a spell!`);
};

Mage.castSpell = function() {
    this.mana -= 20;
    console.log(`${this.name} casts a spell. Mana: ${this.mana}`);
};

let Archer = Object.create(Character);
Archer.arrows = 30;

Archer.attack = function() {
    this.arrows--;
    console.log(`${this.name} shoots an arrow!`);
};

Archer.reload = function() {
    this.arrows += 10;
    console.log(`${this.name} is reloading arrows. Arrows: ${this.arrows}`);
};

let warrior = Object.create(Warrior);
warrior.name = "Alex";
warrior.health = 150;

let mage = Object.create(Mage);
mage.name = "Anna";
mage.health = 80;

let archer = Object.create(Archer);
archer.name = "Bob";
archer.health = 100;

warrior.attack();
warrior.heal();
mage.attack();
mage.castSpell();
archer.attack();
archer.reload();