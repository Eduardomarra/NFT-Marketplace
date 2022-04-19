export default function menuMobile() {
    const wrapperMobile = document.querySelector(".wrapper-mobile")
    const navigation = document.querySelector(".navigation")

    wrapperMobile.addEventListener("click", () => {
        wrapperMobile.classList.toggle('active')
        navigation.classList.toggle('active')
    })

}

menuMobile();