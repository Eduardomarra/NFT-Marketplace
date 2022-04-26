export default function menuMobile() {
    const wrapperMobile = document.querySelector(".wrapper-mobile")
    const navigation = document.querySelector(".navigation")
    const mainMobile = document.querySelector(".main")
    const hiddenGems = document.querySelector(".section-hidden-gems")
    const collection = document.querySelector(".section-collection")

    wrapperMobile.addEventListener("click", () => {
        wrapperMobile.classList.toggle('active')
        navigation.classList.toggle('active')
        mainMobile.classList.toggle('active')
        hiddenGems.classList.toggle('active')
        collection.classList.toggle('active')
    })

}

menuMobile();