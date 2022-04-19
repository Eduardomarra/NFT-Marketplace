export default function menuMobile() {
    const wrapperMobile = document.querySelector(".wrapper-mobile")
    const navigation = document.querySelector(".navigation")
    const mainMobile = document.querySelector(".main")

    wrapperMobile.addEventListener("click", () => {
        wrapperMobile.classList.toggle('active')
        navigation.classList.toggle('active')
        mainMobile.classList.toggle('active')
    })

}

menuMobile();