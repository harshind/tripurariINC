const products=[
    {"pid":1,"title":"Product-1", "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, quos!"},
    {"pid":2,"title":"Product-2", "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, quos!"},
    {"pid":3,"title":"Product-3", "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, quos!"},
    {"pid":4,"title":"Product-4", "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, quos!"},
    {"pid":5,"title":"Product-5", "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, quos!"},
    {"pid":6,"title":"Product-6", "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, quos!"},
    {"pid":7,"title":"Product-7", "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, quos!"},
    {"pid":8,"title":"Product-8", "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, quos!"},
    {"pid":9,"title":"Product-9", "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, quos!"},
    {"pid":10,"title":"Product-10", "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, quos!"},
    {"pid":11,"title":"Product-11", "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, quos!"},
    {"pid":12,"title":"Product-12", "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, quos!"}
]

if(localStorage.getItem("products") === null){
    localStorage.setItem("products", JSON.stringify(products))
}
function updateProducts() {
    localStorage.setItem("products", JSON.stringify(products))
}
updateProducts();
function validateForm(){
    var userName = document.myform.username.value;
    var password = document.myform.password.value;
    console.log(userName + " " + password)
    if(userName == null || userName ==""){
        alert("userName can't be Blank")
        return false;
    }else if(password.length < 6){
        alert("Password must be minimum 6 characters")
        return false;
    }else{
        if( userName =="dummy@accenture.com" && password =="12345678"){
            //sessionStorage.setItem("user", 1)
            window.open("products.html")
        }else{
            alert("Please check your useruserName and Password!")        
        }
    }
    return true;
}
function login(){
    window.open("login.html")
}
function logOut() {
    sessionStorage.removeItem("user")
    window.open("index.html")
}

function addToCart(pid) {
    //localStorage.setItem("cart",JSON.stringify([]))
    var product = products.filter(prod => prod["pid"] == pid)
    var cart = JSON.parse(localStorage.getItem("cart"));
    if(cart === null){
        cart=product
        localStorage.setItem("cart",JSON.stringify(cart))
    }else{
        cart.push(product[0])
        localStorage.setItem("cart",JSON.stringify(cart))
    }
    window.location.assign("cart.html")
}

function remove(pid){
    var cart = JSON.parse(localStorage.getItem("cart"));
    var cart = cart.filter(c=> c != null)
    var newCart = cart.filter(c =>c["pid"] != pid)
    localStorage.setItem("cart", JSON.stringify(newCart))
    window.location.reload();
}

function view(pid){
    var product = products.filter(prod => prod["pid"] == pid)[0]
    if(localStorage.getItem("product-desc") !== null){
        localStorage.removeItem("product-desc")
        localStorage.setItem("product-desc", JSON.stringify(product));
    }else{
        localStorage.setItem("product-desc", JSON.stringify(product));
    }
    window.open("productDescription.html")

}

