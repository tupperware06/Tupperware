const carousel = document.querySelector('.carousel');

function smoothScroll(direction) {
  const scrollAmount = 500;
  const slideWidth = carousel.scrollWidth;
  const currentScrollPosition = carousel.scrollLeft;
  let newScrollPosition;
  
  if (direction === 'left') {
    newScrollPosition = currentScrollPosition - scrollAmount;
    if (newScrollPosition < 0) {
      newScrollPosition = 0;
    }
  } else {
    newScrollPosition = currentScrollPosition + scrollAmount;
    if (newScrollPosition > slideWidth) {
      newScrollPosition = slideWidth;
    }
  }
  
  carousel.scrollTo({
    left: newScrollPosition,
    behavior: 'smooth'
  });
}

function backToTop() {
  let button = $('.back-to-top');

  $(window).on('scroll',()=> {
    if ($(this).scrollTop()>= 50) {
      button.fadeIn();
} else {
  button.fadeOut();
}
  });


    button.on('click',(e) => {e.preventDefault();
    $('html').animate({scrollTop: 0}, 1000);
    })
    }
  backToTop()
 