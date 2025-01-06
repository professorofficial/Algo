// JavaScript Algorithms

// Dataset for Shopping List
let shoppingList = ["Milk", "Bread", "Eggs", "Butter"];

// Add item to the shopping list
function addItem() {
    const item = document.getElementById("shoppingInput").value;
    if (item) {
        shoppingList.push(item);
        document.getElementById("shoppingInput").value = "";
        updateShoppingList();
    }
}

// Display the shopping list
function updateShoppingList() {
    const list = document.getElementById("shoppingList");
    list.innerHTML = shoppingList.map(item => `<li>${item}</li>`).join("");
}
updateShoppingList();

// Sort the shopping list
function sortList() {
    shoppingList.sort();
    updateShoppingList();
}

// Dataset for Searching Keys
const drawer = ["Keys", "Wallet", "Phone", "Notebook"];

// Search for an item in the drawer
function searchItem() {
    const searchValue = document.getElementById("searchInput").value;
    const result = drawer.includes(searchValue) ? 
        `${searchValue} found in the drawer!` : 
        `${searchValue} is not in the drawer.`;
    document.getElementById("searchResult").innerText = result;
}

// Shortest Path Simulation
const routes = {
    "Home-Office": 5,
    "Home-Gym": 3,
    "Office-Gym": 2
};

// Find the shortest route
function findShortestRoute() {
    let shortest = { route: "", distance: Infinity };
    for (let route in routes) {
        if (routes[route] < shortest.distance) {
            shortest = { route, distance: routes[route] };
        }
    }
    document.getElementById("routeResult").innerText = 
        `The shortest route is ${shortest.route} with ${shortest.distance} km.`;
}