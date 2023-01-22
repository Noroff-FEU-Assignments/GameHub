const baseUrl = "http://www.marshwoolgar.no/gamehub/wp-json/wc/store/products";
const productContainer = document.querySelector(".box-container")

async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();
    products.forEach(function(product){
        productContainer.innerHTML += `
        <div class="gamesbox">
                    <div class="gamesbox" style="background-image:url('${product.images[0].src}')"
                    <div class="product"><h3>${product.name}</h3>
                    <div class="price">299.00 nok <span>400Nok</span></div>
                    <div class="btn">more info</div>
                    <a href="checkout.html" class="btn">add to cart</a>
                    </a>
                </div>`
    })
    console.log(products);
}

getProducts(baseUrl);
