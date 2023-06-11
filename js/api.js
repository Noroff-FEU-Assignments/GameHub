const resultsContainer = document.querySelector(".about")
const title = document.querySelector("title")

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

var url = "https://marshwoolgar.no/gamehub/wp-json/wc/v3/products/?consumer_key=ck_83d99c1bdc63e80d663378313b33705d86516f8e&consumer_secret=cs_d664a99bb3076ff78f1a5bfd603f9fa23b24199a"

console.log(url);

async function detailProducts() {
    try {
        const response = await fetch(url);

        const object = await response.json();

        console.log(object);

        detailContainer.innerHTML = "";

        for(let i = 0; i < object.length; i++) {

        detailContainer.innerHTML +=
            `<div class="about">
                <img src="${object[i].images[0].src}" />
                <h3 class ="name">${object.name}</h3>
                <h4 class ="price">${object.price_html}</h4>
            </div>`;
        }
    }catch (error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
    
}

detailProducts();