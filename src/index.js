import "./pages/index.css";

const menu =  document.querySelector('.header__menu');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__button');

console.log(`${menu}`);

function open(){
  popup.classList.add('popup_open');
}

function close(){
  popup.classList.remove('popup_open');
}

menu.addEventListener('click', open);
closeButton.addEventListener('click', close);
