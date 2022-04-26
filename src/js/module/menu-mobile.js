export default function menuMobile() {
    const wrapperMobile = document.querySelector(".wrapper-mobile")
    const navigation = document.querySelector(".navigation")
    const mainMobile = document.querySelector(".main")
    const hiddenGems = document.querySelector(".section-hidden-gems")

    wrapperMobile.addEventListener("click", () => {
        wrapperMobile.classList.toggle('active')
        navigation.classList.toggle('active')
        mainMobile.classList.toggle('active')
        hiddenGems.classList.toggle('active')
    })

}

menuMobile();