var img1 = document.getElementById("img1")
var img2 = document.getElementById("img2")
var img3 = document.getElementById("img3")
var roomOne = document.getElementById("room_one_content")
var roomTwo = document.getElementById("room_two_content")
var roomThree = document.getElementById("room_three_content")

var imgURL = "../images/room1.jpg"
var imgURL2 = "../images/room2.jpg"
var imgURL3 = "../images/room3.jpg"
var title_one = "Single Room"
var title_two = "Deluxe Room"
var title_three = "Double Room"
var price_one = 50
var price_two = 65
var price_three = 90
var VAT = 5

function addToLocalStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value))
}

var roomOneID = "001"
var roomTwoID = "002"
var roomThreeID = "003"


function insertRoom1() {
    img1.src = imgURL
    img1.id = roomOneID
    var h3 = document.createElement("h3")
    h3.innerText = title_one;
    var p = document.createElement("p")
    p.innerText = `Pricing: $${price_one}`
    var p2 = document.createElement("p")
    p2.innerText = `VAT: $${VAT}`
    var p3 = document.createElement("p")
    p3.innerText = `Total: $${+price_one + +VAT.toFixed(0)}`
    var div = document.createElement("div")
    div.className = "col-md-12 room-btn"
    var a = document.createElement("a")
    a.href="../../blog.html"
    a.className= "book_btn"
    a.id = "room_one_btn"
    a.innerText = "Book Room"
    var br = document.createElement("br")
    div.appendChild(a);
    roomOne.appendChild(h3)
    roomOne.appendChild(p)
    roomOne.appendChild(p2)
    roomOne.appendChild(p3)
    roomOne.appendChild(br)
    roomOne.appendChild(div)
}

function insertRoom2(){
    img2.src = imgURL2
    img2.id = roomTwoID
    var h3 = document.createElement("h3")
    h3.innerText = title_two;
    var p = document.createElement("p")
    p.innerText = `Pricing: $${price_two}`
    var p2 = document.createElement("p")
    p2.innerText = `VAT: $${VAT}`
    var p3 = document.createElement("p")
    p3.innerText = `Total: $${+price_two + +VAT.toFixed(0)}`
    var div = document.createElement("div")
    div.className = "col-md-12 room-btn"
    var a = document.createElement("a")
    a.href="../../blog.html"
    a.className= "book_btn"
    a.innerText = "Book Room"
    a.id = "room_two_btn"
    var br = document.createElement("br")
    div.appendChild(a);
    roomTwo.appendChild(h3)
    roomTwo.appendChild(p)
    roomTwo.appendChild(p2)
    roomTwo.appendChild(p3)
    roomTwo.appendChild(br)
    roomTwo.appendChild(div)
}

function insertRoom3(){
img3.src = imgURL3
img3.id = roomThreeID
var h3 = document.createElement("h3")
h3.innerText = title_three;
var p = document.createElement("p")
p.innerText = `Pricing: $${price_three}`
var p2 = document.createElement("p")
p2.innerText = `VAT: $${VAT}`
var p3 = document.createElement("p")
p3.innerText = `Total: $${+price_three + +VAT.toFixed(0)}`
var div = document.createElement("div")
div.className = "col-md-12 room-btn"
var a = document.createElement("a")
a.href="../../blog.html"
a.className= "book_btn"
a.innerText = "Book Room"
a.id = "room_three_btn"
var br = document.createElement("br")
div.appendChild(a);
roomThree.appendChild(h3)
roomThree.appendChild(p)
roomThree.appendChild(p2)
roomThree.appendChild(p3)
roomThree.appendChild(br)
roomThree.appendChild(div)
}


insertRoom1();
insertRoom2();
insertRoom3();

document.getElementById("room_one_btn").addEventListener("click", ()=> addToLocalStorage("xxx-xxx",{
        imgURL,
        VAT,
        title: title_one,
        price: price_one
}));
document.getElementById("room_two_btn").addEventListener("click", ()=> addToLocalStorage("xxx-xxx", {
    imgURL:imgURL2,
    VAT,
    title: title_two,
    price: price_two
}));
document.getElementById("room_three_btn").addEventListener("click", ()=> addToLocalStorage("xxx-xxx", {
    imgURL: imgURL3,
    price: price_three,
    title: title_three, 
    VAT
}));

function payBtn(){
    alert("Your room has been booked Successfully.")
}