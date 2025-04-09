let body = document.querySelector("body");
let products = [
  {
    name: "Mars rug",
    price: 100,
    coins: "coins",
    stock: 24,
    image: "./img/Mars rug.png",
  },
  {
    name: "Mars rug",
    price: 100,
    coins: "coins",
    stock: 24,
    image: "./img/Mars rug.png",
  },
  {
    name: "Keyboard sticker",
    price: 49,
    coins: "coins",
    stock: 11,
    image: "./img/keyboard sticker.png",
  },
  {
    name: "Smart watch",
    price: 899,
    coins: "coins",
    stock: 4,
    image: "./img/Smart watch.png",
  },
  {
    name: "Wireless keyboard",
    price: 350,
    coins: "coins",
    stock: 0,
    image: "./img/wireles keybord.png",
  },
  {
    name: "Mouse",
    price: 359,
    coins: "coins",
    stock: 24,
    image: "./img/Mouse.png",
  },
  {
    name: "Airpods",
    price: 499,
    coins: "coins",
    stock: 11,
    image: "./img/Airpods.png",
  },
  {
    name: "Powerbank",
    price: 899,
    coins: "coins",
    stock: 5,
    image: "./img/Powerbank.png",
  },
  {
    name: "USB flash drive",
    price: 299,
    coins: "coins",
    stock: 0,
    image: "./img/usb.png",
  },
  {
    name: "Smartphone",
    price: 3699,
    coins: "coins",
    stock: 2,
    image: "./img/Smartphone.png",
  },
  {
    name: "Playstation",
    price: 7499,
    coins: "coins",
    stock: "Pre-order available",
    image: "./img/Playstation.png",
  },
  {
    name: "Yandex station",
    price: 1999,
    coins: "coins",
    stock: 4,
    image: "./img/Yandex station.png",
  },
  {
    name: "Planshet",
    price: 4999,
    coins: "coins",
    stock: 0,
    image: "./img/Planshet.png",
  },
  {
    name: "Keyboard",
    price: 399,
    coins: "coins",
    stock: 0,
    image: "img/keyboard.png",
  },
  {
    name: "Branded Hoodie",
    price: 549,
    coins: "coins",
    stock: 8,
    image: "img/hoody.png",
  },
  {
    name: "Screen Glasses",
    price: 399,
    coins: "coins",
    stock: 6,
    image: "img/ScreenGlasses.png",
  },
  {
    name: "Branded Sticker Pack",
    price: 99,
    coins: "coins",
    stock: 14,
    image: "img/Sticker.png",
  },
];

let bigDiv = document.querySelector(".bigDiv");

function displayData() {
  products.map((product) => {
    let card = document.createElement("div");
    card.classList.add("small-div");
    let img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    img.style.width = "140px";
    img.style.height = "140px";
    let name = document.createElement("h2");
    name.textContent = product.name;
    name.style.fontSize = "15px";
    name.style.fontWeight = "600";
    let price = document.createElement("div");
    price.style.display = "flex";
    price.style.alignItems = "center";
    price.style.justifyContent = "center";
    price.style.fontSize = "16px";
    price.style.fontWeight = "500";
    price.style.paddingTop = "17px";
    let coinImg = document.createElement("img");
    coinImg.src = "./img/Coin 1.png";
    coinImg.width = 18;
    coinImg.height = 19;
    let priceText = document.createElement("span");
    priceText.textContent = ` ${product.price} ${product.coins}`;
    price.append(coinImg, priceText);
    let stock = document.createElement("p");
    stock.textContent = `${product.stock} dona mavjud`;
    stock.style.fontSize = "13px";
    stock.style.color = "rgba(0, 0, 0, 0.75)";
    stock.style.fontWeight = "300";
    stock.style.paddingTop = "24px";
    card.append(img, name, price, stock);
    card.style.width = "270px";
    card.style.height = "290px";
    card.style.boxShadow = "0px 4px 13.3px 0px rgba(0, 0, 0, 0.25)";
    card.style.borderRadius = "30px";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.alignItems = "center";
    card.style.justifyContent = "center";
    bigDiv.append(card);
  });
}

displayData();

bigDiv.style.display = "flex";
bigDiv.style.flexWrap = "wrap";
bigDiv.style.width = "85%";
bigDiv.style.margin = "0 auto";
bigDiv.style.gap = "25px";
bigDiv.style.paddingTop = "100px";

let inputButton = document.querySelector(".input1");
let searchButton = document.querySelector(".button1");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputButton.value === "") {
    alert("iltimos qidirmoqchi bolgan tavarnomini kiriting");
  }
  let qidiruvdanKeyin = products.filter(
    (mahsulot) =>
      mahsulot.name.toLowerCase() === inputButton.value.toLowerCase() ||
      String(mahsulot.price) === inputButton.value
  );

  bigDiv.innerHTML = "";

  qidiruvdanKeyin.map((product) => {
    let card = document.createElement("div");
    card.classList.add("small-div");
    let img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    img.style.width = "140px";
    img.style.height = "140px";
    let name = document.createElement("h2");
    name.textContent = product.name;
    name.style.fontSize = "15px";
    name.style.fontWeight = "600";
    let price = document.createElement("div");
    price.style.display = "flex";
    price.style.alignItems = "center";
    price.style.justifyContent = "center";
    price.style.fontSize = "16px";
    price.style.fontWeight = "500";
    price.style.paddingTop = "17px";
    let coinImg = document.createElement("img");
    coinImg.src = "./img/Coin 1.png";
    coinImg.width = 18;
    coinImg.height = 19;
    let priceText = document.createElement("span");
    priceText.textContent = ` ${product.price} ${product.coins}`;
    price.append(coinImg, priceText);
    let stock = document.createElement("p");
    stock.textContent = `${product.stock} dona mavjud`;
    stock.style.fontSize = "13px";
    stock.style.color = "rgba(0, 0, 0, 0.75)";
    stock.style.fontWeight = "300";
    stock.style.paddingTop = "24px";
    card.append(img, name, price, stock);
    card.style.width = "270px";
    card.style.height = "290px";
    card.style.boxShadow = "0px 4px 13.3px 0px rgba(0, 0, 0, 0.25)";
    card.style.borderRadius = "30px";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.alignItems = "center";
    card.style.justifyContent = "center";
    bigDiv.append(card);
  });
});

inputButton.addEventListener("input", () => {
  if (inputButton.value.length === 0) {
    bigDiv.innerHTML = "";
    displayData();
  }
});
