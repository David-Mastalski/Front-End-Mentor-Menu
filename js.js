let featuresBtn, companyBtn, hamburgerBtn 

const main = () => {
    prepareDomElements()
    prepareDomEvents()
}

const prepareDomElements = () => {
    featuresBtn = document.querySelector('.features-btn')
    companyBtn = document.querySelector('.company-btn')
    hamburgerBtn = document.querySelector('.menu-btn')
}

const prepareDomEvents = () => {
    hamburgerBtn.addEventListener('click', () => {
        document.querySelector('.layout').classList.toggle('layout-active')
    })
    hamburgerBtn.addEventListener('click', () => {
        document.querySelector('.mobile-nav').classList.toggle('mobile-nav-active')
    })
    featuresBtn.addEventListener('click', featuresOptionActive)
    companyBtn.addEventListener('click', companyOptionActive)
}

const featuresOptionActive = () => {
    document.querySelector('.features-option').classList.toggle('active')
    document.querySelector('.features-btn img').classList.toggle('move-arrow')
}

const companyOptionActive = () => {
    document.querySelector('.company-option').classList.toggle('active')
    document.querySelector('.company-btn img').classList.toggle('move-arrow')
}

document.addEventListener('DOMContentLoaded', main)