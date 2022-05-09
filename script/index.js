// MENU DROPDOWN
function hambugerIconToggle() {
  const menuDropdown = document.querySelector(".menu__dropdown");
  menuDropdown.classList.toggle("show__menu");
}

// IMAGE SLIDESHOW

const productImages = document.querySelectorAll(".product__image");
const productImageLightbox = document.querySelectorAll(
  ".product__image__lightbox"
);

let slideIndex = 0;

function slideIndexControl(value) {
  slideIndex += value;
  if (slideIndex > productImages.length - 1) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = productImages.length - 1;
  }

  showImage();
  showImageLightbox();
  productImageThumbnailsActive();
  productImageThumbnailsActiveLightbox();
}

function showImage() {
  for (let i = 0; i < productImages.length; i++) {
    productImages[i].style.display = "none";
  }
  productImages[slideIndex].style.display = "block";
}

const productImageThumbnails = document.querySelectorAll(
  ".product__image__thumbnails"
);

productImageThumbnails.forEach((image, index) => {
  image.onclick = () => {
    slideIndex = index;
    showImage();
    showImageLightbox();
    productImageThumbnailsActive();
    productImageThumbnailsActiveLightbox();
  };
});

function productImageThumbnailsActive() {
  for (let i = 0; i < productImageThumbnails.length; i++) {
    productImageThumbnails[i].classList.remove("active");
  }
  productImageThumbnails[slideIndex].classList.add("active");
}

// --------------------------------- //

function showImageLightbox() {
  for (let i = 0; i < productImageLightbox.length; i++) {
    productImageLightbox[i].style.display = "none";
  }
  productImageLightbox[slideIndex].style.display = "block";
}

const productImageThumbnailsLightbox = document.querySelectorAll(
  ".product__image__thumbnails__lightbox"
);

productImageThumbnailsLightbox.forEach((image, index) => {
  image.onclick = () => {
    slideIndex = index;
    showImage();
    showImageLightbox();
    productImageThumbnailsActive();
    productImageThumbnailsActiveLightbox();
  };
});

function productImageThumbnailsActiveLightbox() {
  for (let i = 0; i < productImageThumbnails.length; i++) {
    productImageThumbnailsLightbox[i].classList.remove("active");
  }
  productImageThumbnailsLightbox[slideIndex].classList.add("active");
}

const imageSlideSlideshowLightbox = document.querySelector(
  ".image__slideshow__lightbox"
);
const imageSlideshow = document.querySelector(".image__slideshow");

function showLightbox() {
  imageSlideSlideshowLightbox.classList.add("active__lightbox");
}
function closeLightbox() {
  imageSlideSlideshowLightbox.classList.remove("active__lightbox");
}

// CART
const quantityTextElement = document.querySelector(".quantity");

let quantity = 0;
let cartText = 0;

function cartQuantity(value) {
  quantity += value;
  cartText += value;
  if (quantity < 0) {
    quantity = 0;
  }
  quantityTextElement.innerText = quantity;
}

const cartTextElement = document.querySelector(".cart__text");
const cart = document.querySelector(".cart__details");

function clearCartDetails() {
  cart.innerHTML = ` 
                <h3>Cart</h3>
                <div class="row">
                  <h3 class="empty__text">Your cart is empty.</h3>
                </div>`;
}

if (cartText === 0) {
  clearCartDetails();
}

function createCartDetailsElement(cartText) {
  let multiplePrice = `$125.00x${cartText}`;
  let totalPrice = `$${125.0 * cartText}.00`;

  cart.innerHTML = `
                <h3>Cart</h3>
                <div class="row">
                  <div class="cart__details__image">
                    <img src="images/image-product-1-thumbnail.jpg" alt="" />
                  </div>
                  <div class="cart__details__desc">
                    <p class="brand__name">Fall Limited Edition Sneakers</p>
                    <div class="brand__price">
                      <p class="brand__price__multiple">${multiplePrice}</p>
                      <p class="total__price">${totalPrice}</p>
                    </div>
                  </div>
                  <div class="delete__icon" onclick=deleteCartProduct()>
                    <img src="images/icon-delete.svg" alt="" />
                  </div>
                </div>
                <div class="btn__checkout">Checkout</div>`;
}

function addToCart() {
  console.log();
  quantity = 0;
  if (cartText === 0) return;
  quantityTextElement.innerText = 0;
  cartTextElement.style.display = "block";
  cartTextElement.innerText = cartText;
  createCartDetailsElement(cartText);
}

function deleteCartProduct() {
  clearCartDetails();
  cartText = 0;
  cartTextElement.innerText = cartText;
  cartTextElement.style.display = "none";
}

const imagePreview = document.querySelector(".images__preview");

console.log(imagePreview.attributes[1]);

function myFunction(width) {
  if (width.matches) {
    // If media query matches
    imagePreview.removeAttribute("onclick");
  } else {
    imagePreview.setAttribute("onclick", "showLightbox()");
  }
}

var width = window.matchMedia("(max-width: 700px)");
myFunction(width); // Call listener function at run time
width.addListener(myFunction); // Attach listener function on state changes
