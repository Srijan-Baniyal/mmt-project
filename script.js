
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 10999,
    colors: [
      {
        code: "black",
        img: "images/air.png",
      },
      {
        code: "darkblue",
        img: "images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 13999,
    colors: [
      {
        code: "lightgrey",
        img: "images/jordan.png",
      },
      {
        code: "green",
        img: "images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 9999,
    colors: [
      {
        code: "lightgrey",
        img: "images/blazer.png",
      },
      {
        code: "green",
        img: "images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 8999,
    colors: [
      {
        code: "black",
        img: "images/crater.png",
      },
      {
        code: "lightgrey",
        img: "images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 8999,
    colors: [
      {
        code: "gray",
        img: "images/hippie.png",
      },
      {
        code: "black",
        img: "images  /hippie2.png",
      },
    ],
  },
];

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    chosenProduct = products[index];

    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = "INR " + chosenProduct.price;
    currentProductImg.src = chosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = chosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none ";

});

const paymentForm = document.getElementById("hidden");
const closeButton = document.querySelector(".close");
function showPaymentForm() {
  paymentForm.style.display = "block";
}
function hidePaymentForm() {
  paymentForm.style.display = "none";
}
closeButton.addEventListener("click", function() {
  if (window.opener) {
    window.close();
  } else {
    window.location.href = "index.html";
  }
});
