function generateHTMLList(){
    let seller = ["Ruth Jefferson", "Byron Elliott",
"Sandra Montes", "Marwa Meadows", "Wilma Cohen", "Hilda Teresita"];
 
let list = document.getElementById("myList");

//create list for each seller
seller.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
});
}

