"use strict";


const itemAcardion = document.querySelectorAll('.acardion__block-item');

itemAcardion.forEach(item => {
    item.addEventListener('click', (e)=>{
        let content = item.nextElementSibling,
            currentArrow = item.lastElementChild;

        if (content.style.maxHeight) {
            document.querySelectorAll('.acardion__block-content').forEach((element) => {
                element.style.maxHeight = null;
            });
            document.querySelectorAll('.acardion__item-image').forEach(arrow=>{
                arrow.style.transform = null
            })
        }else {
            document.querySelectorAll('.acardion__block-content').forEach((element) => {
                element.style.maxHeight = null;
            });
            document.querySelectorAll('.acardion__item-image').forEach(arrow=>{
                arrow.style.transform = null
            })
            content.style.maxHeight = content.scrollHeight + "px";
            currentArrow.style.transform = "rotate(90deg)";
        }
    })
})