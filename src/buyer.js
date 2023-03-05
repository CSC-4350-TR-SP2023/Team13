function createHTMLList() {
    let seller = ["Ruth Jefferson", "Byron Elliott",
        "Sandra Montes", "Marwa Meadows", "Wilma Cohen", "Hilda Teresita"];

    let list = document.getElementById("seller-list");

    let count = 1;
    //create list for each seller
    seller.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        li.setAttribute("id", "seller-" + count);
        list.appendChild(li);
        count++;
    });
}

function createMile() {
    let x = document.querySelectorAll("#seller-list > li");
    for (let i = 0; i < x.length; i++) {
        //Create Button for each list item
        let miles = document.createElement("div");
        miles.setAttribute("class","mile-display")
        miles.innerText = "(10 Miles )";
        //Create wrapper for each button

        x[i].appendChild(miles);
    }
}
function checkForClick(){
    const sellerList = document.querySelectorAll('li[id^="seller-');
    sellerList.forEach(sellerListItem => {
        sellerListItem.addEventListener('click', () => {
            const sellerName = sellerListItem.innerText;
            displayName(sellerName)
        });
    });
}
function displayName(sellerName = ""){
    const sellerInfo = document.getElementById("seller-info");

    sellerInfo.style.visibility = "visible";

    const header = sellerInfo.querySelector("h2");

    header.innerText = sellerName;

    
}

