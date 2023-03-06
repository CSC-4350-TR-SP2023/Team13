function createHTMLList() {
    const seller = ["Ruth Jefferson", "Byron Elliott",
        "Sandra Montes", "Marwa Meadows", "Wilma Cohen", "Hilda Teresita", "Eunice Emery", "Emily Johnson", "Oliver Jones",
        "Emma Brown",
        "Liam Martinez",
        "Sophia Davis",
        "Noah Garcia",
        "Isabella Rodriguez",
        "Ethan Wilson",
        "Mia Anderson",
        "Aiden Thomas",
        "Charlotte Smith",
        "Lucas Johnson",
        "Amelia Perez",
        "Mason Martin",
        "Evelyn Taylor",
        "Caden Lee",
        "Harper Hernandez",
        "Logan Young",
        "Aria Moore",
        "Jackson Allen",
        "Chloe King"
    ];

    let list = document.getElementById("seller-list");

    let count = 1;
    //create list for each seller
    seller.forEach((item) => {
        let li = document.createElement("li");

        let name = document.createElement("div");
        name.setAttribute("class", "name-display");
        name.innerText = item;

        let miles = document.createElement("div");
        miles.setAttribute("class", "mile-display");
        miles.innerText = "(10 Miles)";

        let available = document.createElement("div");
        available.setAttribute("class", "available-display");
        available.innerText = "[0/5]";

        li.appendChild(name);
        li.appendChild(miles);
        li.appendChild(available);

        li.setAttribute("id", "seller-" + count);
        list.appendChild(li);
        count++;
    });
}

function checkForClick() {
    const sellerList = document.querySelectorAll('li[id^="seller-');
    sellerList.forEach(sellerListItem => {
        sellerListItem.addEventListener('click', () => {
            const sellerName = sellerListItem.querySelector(".name-display");
            displayName(sellerName.innerText)
        });
    });
}

function displayName(name = "") {
    const sellerInfo = document.getElementById("seller-info");

    sellerInfo.style.visibility = "visible";

    const sellerNames = document.querySelectorAll('[id^="seller-name"]');

    sellerNames.forEach(sellerName => {
        sellerName.innerText = name;
    });
}
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const gsu = { lat: 33.7531, lng: -84.3853 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: gsu,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: gsu,
      map: map,
    });
  }
  
  window.initMap = initMap;
