function menuMobile() {
  const wrapperMobile = document.querySelector(".wrapper-mobile");
  const navigation = document.querySelector(".navigation");
  const mainMobile = document.querySelector(".main");
  const hiddenGems = document.querySelector(".section-hidden-gems");
  const collection = document.querySelector(".section-collection");
  const create = document.querySelector(".section-create");
  const footer = document.querySelector("footer");

  wrapperMobile.addEventListener("click", () => {
    wrapperMobile.classList.toggle("active");
    navigation.classList.toggle("active");
    mainMobile.classList.toggle("active");
    hiddenGems.classList.toggle("active");
    collection.classList.toggle("active");
    create.classList.toggle("active");
    footer.classList.toggle("active");
  });
}

menuMobile();
