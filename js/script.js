$('div.service_blocks').on('click', 'li:not(.service_block_active)', function() {
  $(this)
    .addClass('service_block_active').siblings().removeClass('service_block_active')
    .closest ('div.container').find('div.row').find('div.service_box').removeClass('service_box_active').eq($(this).index()).addClass('service_box_active');
});

$(document).ready(function () {
  $('.main_slider').slick({
    speed: 1000,
    adaptiveHeight: true,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    prewArrow: '<button type="button" class="slick-prev"><img src="../icons/icons8-налево-30.png></button>'
  });
});


const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.header_menu'),
      bestScroll = document.querySelector('body'),
      menuItem = document.querySelector('.menu_link');


hamburger.addEventListener('click', open);
bestScroll.addEventListener('click', close);


function open() {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('header_menu_active');
};

function close() {
    if (hamburger.classList.contains('hamburger_active')){
        bestScroll.style.overflow = 'hidden'
    } else {
        bestScroll.style.overflow = 'visible'
    }
}

menuItem.forEach(item => {
  item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
  })
})


const prev = document.getElementById('prev_btn'),
      next = document.getElementById('next_btn'),
      boxes = document.querySelectorAll('.test_box')

let index = 0;

const prepareBoxes = ind => {
          activeBox(ind);
}
      
const activeBox = n => {
    for(test_box of boxes) {
      test_box.classList.remove('active')
}
      boxes[n].classList.add('active')
}
      
const nextTest = () => {
        if(index == boxes.length - 1) {
              index = 0;
              prepareBoxes(index);
          } else{
              index++;
              prepareBoxes(index);
          }
      }
      
const prevTest= () => {
          if(index == 0) {
              index = boxes.length - 1;
              prepareBoxes(index);
          } else{
              index--;
              prepareBoxes(index);
          }
}
      
next.addEventListener('click', nextTest);
prev.addEventListener('click', prevTest);
      
setInterval(nextTest, 2500);



let btns = document.querySelectorAll("*[data-modal-btn]");

const noScroll = document.querySelector('body');


for(let i = 0; i<btns.length; i++) {
  btns[i].addEventListener('click', function(){
    let name = btns[i].getAttribute('data-modal-btn')
    let modal = document.querySelector("[data-modal-window='"+name+"']")
    modal.style.display = "block";
    noScroll.style.overflow = 'hidden';
    let close = modal.querySelector(".close_modal_window");
    close.addEventListener('click', function(){
      modal.style.display = "none";
      noScroll.style.overflow = 'visible';  
    })
  })
}

window.onclick = function (e) {
    if(e.target.hasAttribute('data-modal-window')) {
      let modals = document.querySelectorAll("*[data-modal-window]");
      for(let i = 0; i<modals.length; i++) {
        modals[i].style.display = "none";
        noScroll.style.overflow = 'visible'; 
      }
    }
};
