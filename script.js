let container= document.createElement('div');
container.classList.add('container');

let navbar =document.createElement('nav');
navbar.id='nav'
navbar.classList.add("navbar","navbar-light", "bg-light");

let navtitle=document.createElement('span');
navtitle.classList.add("navbar-brand", "mb-0", "h1")
navtitle.innerHTML = "Welcome Get your Cosmetics Products...!!!";

let heading = document.createElement('h1');
heading.innerHTML = "Search the Products and click the link to view"

let desc2 = document.createElement('span');
desc2.className='ss'
desc2.innerHTML = "Search by Product Type";

let desc3 = document.createElement('span');
desc3.innerHTML="Our Product type"

let list=document.createElement("ul");
let li1=document.createElement('li');
let li2=document.createElement('li');
let li3=document.createElement('li');
let li4=document.createElement('li');
let li5=document.createElement('li');
let li6=document.createElement('li');
let li7=document.createElement('li');
let li8=document.createElement('li');
let li9=document.createElement('li');
let li10=document.createElement('li');
li1.innerHTML="Blush";
li2.innerHTML="Bronzer";
li3.innerHTML="Eyebrow";
li4.innerHTML="Eyeliner";
li5.innerHTML="Eyeshadow";
li6.innerHTML="Foundation";
li7.innerHTML="Lip liner";
li8.innerHTML="Lipstick";
li9.innerHTML="Mascara";
li10.innerHTML="Nail Polish";

let searchBox = document.createElement('input');
searchBox.innerHTML="Search"
searchBox.setAttribute("type","text");
searchBox.classList.add("form-control", "form-control-md");
searchBox.id="search";
searchBox.setAttribute("placeholder", "Enter Product type");

let button = document.createElement('button');
button.type="button";
button.classList.add("btn","btn-outline-warning");
button.id="button";
button.addEventListener("click", getproducts);
button.innerHTML = "Click to Grab yours";
// let br1 = document.createElement("br");
let br2 = document.createElement("br");

const cardRow = document.createElement('div');
cardRow.className='row g-3';
desc3.append(list);
list.append(li1,li2,li3,li4,li5,li6,li7,li8,li9,li10);
container.append(heading,desc2, br2,desc3, searchBox, button,cardRow);
navbar.append(navtitle);
document.body.append(navbar, container);


async function getproducts() {

    try {
        let userInput = document.getElementById("search").value;
        let data = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${userInput}`);
        let data1 = await data.json();
        console.log(data1);
        alert(`Hi thanks for checking our products
                Please wait till we load 
                    your request`)
       
        for (var i = 0; i < data1.length; i++) {
            let card = document.createElement("div");
            card.setAttribute("class", "card-img-top mb-3 col-md-4");
            card.setAttribute("style", "max-width: 70%;");
            card.setAttribute('id','card');
            let pimg = document.createElement('img');
            pimg.src=data1[i].image_link;
            pimg.alt=data1[i].name;
            pimg.className='img';
            let pname = document.createElement("div");
            pname.id='name';
            pname.innerHTML = `<br><b>Product Name : ${data1[i].name}`;
            let brand = document.createElement("div");
            brand.id='bname';
            brand.innerHTML = `<b>Brand : ${data1[i].brand}`;
            let price = document.createElement("div");
            price.id='price';
            price.innerHTML = `<b>Price : ${data1[i].price_sign} ${data1[i].price}`;
            let desc = document.createElement("div");
            desc.innerHTML = `<b>Description : <br>${data1[i].description}`;
            desc.id='description';
            let link = document.createElement("a");
            link.setAttribute('href', data1[i].product_link);
            link.id='link';
            link.innerHTML="Click to view"
            link.target="_blank";
            link.className="btn btn-primary";
            card.append(pimg,pname, brand, price, desc,link);
            cardRow.append(card);
        }
    } catch (error) {
        console.log(error);
    }
}

  