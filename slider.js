const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
  activeSlide(index);    
}

const nextSlide = () => {
    if(index == slides.length - 1) {
      index = 0;
      prepareCurrentSlide(index);
    } else {
      index ++;
      prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
  if(index == 0) {
     index = slides.length - 1;
     prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

document.createElement('figure');
document.createElement('figcaption');



function showMessage() {
  alert("surpraize fzfk")
} 

let btn = document.querySelector("#myBtn");
btn.onclick = showMessage2;

function showMessage2() {
  alert("surpraize fzfk");
}
