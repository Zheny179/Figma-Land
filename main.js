"use strict"

const burgerButton = document.querySelector('.burger')

burgerButton.addEventListener('click', function () {
  this.classList.toggle('is-active')
})

AOS.init();
