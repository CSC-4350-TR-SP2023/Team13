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
function generateButtonList(){
    let x = document.querySelectorAll("#seller-list > li");
    for(let i=0;i<x.length;i++){
        var btn = document.createElement("button");
        btn.appendChild(document.createTextNode("View Details"));
        x[i].appendChild(btn);
    }
}


