function generateHTMLList() {
    let seller = ["Ruth Jefferson", "Byron Elliott",
        "Sandra Montes", "Marwa Meadows", "Wilma Cohen", "Hilda Teresita"];

    let list = document.getElementById("seller-list");

    //create list for each seller
    seller.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    });
}
function generateButtonList() {
    let x = document.querySelectorAll("#seller-list > li");
    for (let i = 0; i < x.length; i++) {
        //Create Button for each list item
        let btn = document.createElement("button");
        btn.appendChild(document.createTextNode("View Details"));
        //Create wrapper for each button
        let wrapper = document.createElement("div");
        wrapper.classList.add("button-wrapper");
        wrapper.appendChild(btn);

        x[i].appendChild(wrapper);
    }
}


