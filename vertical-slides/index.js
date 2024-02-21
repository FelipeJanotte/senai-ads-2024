const mainEl = document.querySelector('main')
const slideElList = document.querySelectorAll('.slide')
let currentStep = 0

function down () {
    if (currentStep === slideElList.length - 1) {
        currentStep = 0
        scrollTo(0, 0)
    } else {
        currentStep++
    }
    const top = mainEl.clientHeight * currentStep
    mainEl.scroll({
        behavior: "smooth",
        top
    })
}

function up () {
    if (currentStep !== 0) {
        currentStep--
    } else {
        currentStep=slideElList.length - 1
    }
    const top = mainEl.clientHeight * currentStep
    mainEl.scroll({
        behavior: "smooth",
        top
    })
}