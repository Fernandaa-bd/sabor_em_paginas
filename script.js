function VerMais(){
    var cards = document.getElementById('cards-receitas-plus')
    var btn_ver = document.getElementById('ver-mais')

    if(window.getComputedStyle(cards).display === 'none'){
        cards.style.display = 'flex'
        btn_ver.innerHTML = 'Ver menos'
    } else{
        cards.style.display = 'none'
        btn_ver.innerHTML = 'Ver mais'
    }
}

/* menu scroll */

var nav_bar = document.querySelector('#header')

document.addEventListener('scroll', ()=>{
    var scroll_top = window.scrollY

    if(scroll_top > 0){
        nav_bar.classList.add('rolar')
    } else{
        nav_bar.classList.remove('rolar')
    }

})

/* script do menu-mobile */
var btn_open = document.getElementById('btn-open-menu')
var menu_mobile = document.getElementById('menu-mobile')
var overlay_menu = document.getElementById('overlay-menu')
var btn_close = document.getElementById('btn-close')

btn_open.addEventListener('click', ()=>{
    menu_mobile.classList.add('open')
})

menu_mobile.addEventListener('click', ()=>{
    menu_mobile.classList.remove('open')
})

overlay_menu.addEventListener('click', ()=>{
    menu_mobile.classList.remove('open')
})

btn_close.addEventListener('click', ()=>{
    menu_mobile.classList.remove('open')
})

/* animações */
    /* document.addEventListener("DOMContentLoaded", function(){
        document.querySelector(".txt-hero").classList.add("show")
    }) */