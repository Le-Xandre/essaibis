
// add an event listener on the bullets
const allBullets = document.querySelectorAll('.cyber-slider__controls li');

for (const bullet of allBullets) {
    bullet.addEventListener('click', function (e) {

        const upcomingSlide = document.querySelector(`[data-slideid="${bullet.dataset.slide}"]`);
        const currentSlide = document.querySelector('.cyber-slider__wrapper .active');
        //
        const currentBullet = document.querySelector('.cyber-slider__controls .current');
        //
        const slideImage = currentSlide.querySelector('.slide-image');
        const glitchArea = currentSlide.querySelector('.glitch-area');
        const imageHTML = slideImage.outerHTML + slideImage.outerHTML;


        if (bullet !== currentBullet) {
            //  remove the current state of a bullet
            currentBullet.classList.remove('current')
            // add it to the current item
            bullet.classList.add('current');

            // ** Switch the slide
            glitchArea.innerHTML = imageHTML
            // add the glitching class
            currentSlide.classList.add('glitching')
            setTimeout(function () {

                //remove the active state of a slider
                currentSlide.classList.remove('active')

                // remove the glitching class
                glitchArea.innerHTML = 'tag';
                currentSlide.classList.remove('glitching');

                upcomingSlide.classList.add('active');
            }, 500)

        }

    })
}




// Javascript for image slider autoplay navigation
// var repeat = function(activeClass){
//   let active = document.getElementsByClassName('active');
//   let i = 1;

//   var repeater = () => {
// 	setTimeout(function(){
// 	  [...active].forEach((activeSlide) => {
// 		activeSlide.classList.remove('active');
// 	  });

// 	slides[i].classList.add('active');
// 	btns[i].classList.add('active');
// 	i++;

// 	if(slides.length == i){
// 	  i = 0;
// 	}
// 	if(i >= slides.length){
// 	  return;
// 	}
// 	repeater();
//   },10000);
//   }
//   repeater();
// }
// repeat();


const cards = document.querySelector(".cards");
const images = document.querySelectorAll(".card__img");
const backgrounds = document.querySelectorAll(".card__bg");
const range = 60;

//const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
// thanks @alice-mx
const calcValue = (a, b) => (a/b*range-range/2).toFixed(1) ;

let timeout;
document.addEventListener('mousemove', ({x, y}) => {
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }

  timeout = window.requestAnimationFrame(() => {
    const yValue = calcValue(y, window.innerHeight);
    const xValue = calcValue(x, window.innerWidth);

    cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

    [].forEach.call(images, (image) => {
      image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
    });

    [].forEach.call(backgrounds, (background) => {
      background.style.backgroundPosition = `${xValue*.45}px ${-yValue*.45}px`;
    })
	})
}, false);
