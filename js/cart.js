var container = document.getElementById("booked_room_container");
var bookedImg  = document.getElementById("booked_img")

function removeFromCart(){
    document.getElementById("remove-from-cart").addEventListener("click", ()=> {
        localStorage.removeItem("xxx-xxx");
    })
}

function checkForCart(){
    window.addEventListener("load", ()=>{
        var cartItem = localStorage.getItem("xxx-xxx")
        if(cartItem){
            var item = JSON.parse(cartItem);
            bookedImg.src = item.imgURL;
            bookedImg.style.display = "initial"
            var h3 = document.createElement("h3")
            h3.innerText = item.title;
            var p = document.createElement("p")
            p.innerText = `Pricing: $${item.price}`
            var p2 = document.createElement("p")
            p2.innerText = `VAT: $${item.VAT}`
            var p3 = document.createElement("p")
            p3.innerText = `Total: $${+item.price + +item.VAT.toFixed(0)}`
            var div = document.createElement("div")
            div.className = "col-md-12 blog-btn-wrapper"
            var a = document.createElement("a")
            a.href="../../payment.html"
            a.className= "blog_btn"
            a.innerText = "Procceed"
            var a2 = document.createElement("a")
            a2.href = "../../room.html"
            a2.className = "blog_btn"
            a2.innerText = "Cancel"
            a2.id = "remove-from-cart"
            var br = document.createElement("br")
            div.appendChild(a);
            div.appendChild(a2);
            container.appendChild(h3)
            container.appendChild(p)
            container.appendChild(p2)
            container.appendChild(p3)
            container.appendChild(br)
            container.appendChild(div)
            removeFromCart()
        }else{
            var h3 = document.createElement("h3")
            h3.innerText = "Booked Room";
            h3.style.fontWeight = 700;
            var br = document.createElement("br")
            var p = document.createElement("p")
            p.innerText = "You currently have no room booked. go to our rooms to select the room of your choice"
            p.style.fontSize= "1.1rem"
            var div = document.createElement("div")
            div.className = "col-md-12"
            div.style.display = "grid"
            div.style.placeItems = "center"
            var a = document.createElement("a")
            a.href="../../room.html"
            a.className= "booK_btn"
            a.innerText = "Book Room"
            container.appendChild(h3)
            container.appendChild(br)
            container.appendChild(p)
            container.appendChild(div)
        }
        
    })
}

checkForCart()