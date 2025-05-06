//************************************************************************************ SLIDE 4 CODE
const miniButton = document.getElementById('btn-2');
const imgSetS4 = document.querySelectorAll('#slide4 img'); 
const imgTwoS4 = document.querySelector('#slide4 #unscanned');
const textOne = document.querySelectorAll('.text-1'); 
const textTwo = document.getElementById('text-2');
const textBox = document.querySelector('#slide4 .text-box');

miniButton.addEventListener('click', scanAnimation);

function scanAnimation() {
  textBox.style.opacity = 0;
  imgSetS4.forEach(img => {
    img.classList.remove('ani');
    setTimeout(() => {
      img.classList.remove('ani2');
      miniButton.style.display = "none";
      textOne.forEach(text => {
        text.classList.remove('visible');
        text.classList.add('hidden');
      })
      setTimeout(() => {
        textTwo.classList.remove('hidden');
        textTwo.classList.add('visible');
      }, 15);

      setTimeout(() => {
        textBox.style.opacity = 1;
      }, 700);
    }, 350);
  })
}




//************************************************************************************ SLIDE 5 CODE
const victims = document.querySelectorAll('.victim');
const slide5Text = document.querySelector('#slide5 h2');




//************************************************************************************ SLIDE 6 CODE
const miniButton2 = document.getElementById('btn-3');
const bigText2 = document.querySelector('#slide6 p.big-text');
const immis = document.querySelector('.immis');
const bigText = document.querySelector('#slide6 .big-text')

miniButton2.addEventListener('click', immiAnimation);

function immiAnimation() {
  bigText2.classList.add('ani');
  miniButton2.classList.add('ani');
  setTimeout(() => {
    bigText2.classList.add('hidden');
    immis.classList.remove('hidden');
    setTimeout(() => {
      immis.classList.remove('ani');
    }, 100);
  }, 900);
}




//************************************************************************************ SLIDE 7 CODE
const bigTextS7 = document.querySelector('#slide7 p.big-text');
const wordElement = document.querySelector('#slide7 p.big-text big');
const text = wordElement.textContent;
wordElement.textContent = ''; // clear original text

text.split('').forEach(letter => {
  const span = document.createElement('span');
  span.textContent = letter;
  wordElement.appendChild(span);
});




//************************************************************************************ SLIDE 8 CODE
const resizable = document.getElementById('resizable-box');
const resizer = document.getElementById('resizer');
const container = document.getElementById('resize-container');
const slide8 = document.getElementById('slide8');

const minWidth = 0;
const maxWidth = 1000;

function updateResizerPosition() {
  resizer.style.left = resizable.offsetWidth + 'px';
}

// Initial position
updateResizerPosition();

resizer.addEventListener('mousedown', (e) => {
  e.preventDefault();
  resizer.style.cursor = 'grabbing';
  slide8.style.cursor = 'grabbing';
  document.addEventListener('mousemove', resize);
  document.addEventListener('mouseup', stopResize);
});

function resize(e) {
  const containerLeft = container.getBoundingClientRect().left;
  let newWidth = e.clientX - containerLeft;

  if (newWidth < minWidth) newWidth = minWidth;
  if (newWidth > maxWidth) newWidth = maxWidth;

  resizable.style.width = newWidth + 'px';
  updateResizerPosition();
}

function stopResize() {
  resizer.style.cursor = 'grab';
  slide8.style.cursor = 'default';
  document.removeEventListener('mousemove', resize);
  document.removeEventListener('mouseup', stopResize);
}




//************************************************************************************ SLIDE 9 CODE
const sourceBtn = document.getElementById("sources-button");
const sourceBtnOpen = document.getElementById("open");
const sourceBtnClose = document.getElementById("close");
const sourcePage = document.getElementById("sources-page");

sourceBtn.addEventListener("click", () => {
  if (!sourceBtnOpen.classList.contains('inactive')) {
    sourceBtnOpen.classList.add('inactive');
    sourceBtnClose.classList.remove('inactive');
    sourcePage.classList.remove('inactive');
  } else {
    sourceBtnOpen.classList.remove('inactive');
    sourceBtnClose.classList.add('inactive');
    sourcePage.classList.add('inactive');
  }
});







//************************************************************************************ SITE/GLOBAL CODE
const button = document.getElementById('main-button');
const slides = document.querySelectorAll('article');
const progressDots = document.querySelectorAll('.progressDot');

//******************************************** SCROLL BUTTON
let currentIndex = 0; 
button.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  smoothScrollTo(slides[currentIndex].offsetTop, 1000); // 800ms duration
});

function smoothScrollTo(targetY, duration) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  const startTime = performance.now();
  
  function animateScroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1); // clamp between 0 and 1
    const ease = easeInOutCirc(progress); // timing function

    window.scrollTo(0, startY + diff * ease);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }
  
  requestAnimationFrame(animateScroll);
}

function easeInOutCirc(x) {
  return x < 0.5
    ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
    : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
}


//******************************************** OBSERVER FOR SLIDE ENTRY ANIMATIONS
const slidesObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      const slideNumber = id.replace('slide', ''); // e.g. "slide3" → "3"
      progressDots.forEach(dot => dot.classList.remove('active'));
      const activeDot = document.querySelector(`#dot${slideNumber}`);
      if (activeDot) activeDot.classList.add('active');
      
      //**********************Slide 2
      let line1 = document.getElementById('span1');
      let lines = document.querySelectorAll('.line');
      if (id ===  'slide2') {
        line1.classList.remove('ani');
        setTimeout(() => {
          lines.forEach(line => {
            line.classList.remove('ani');
          })
        }, 1000);
      } else {
        if (!line1.classList.contains('ani')) {
          line1.classList.add('ani');
          lines.forEach(line => {
            line.classList.add('ani');
          })
        }
      }

      //**********************Slide 4
      if (id === 'slide4') {
        setTimeout(() => {
          imgTwoS4.classList.add('ani3');
        }, 1800);
      } else {
        imgTwoS4.classList.remove('ani3');

        imgSetS4.forEach(img => {
          if (!img.classList.contains('ani')) {
            img.classList.add('ani');
            img.classList.add('ani2');
          }
        })

        if (textTwo.classList.contains('visible')) {
          textTwo.classList.remove('visible');
          textTwo.classList.add('hidden');
          setTimeout(() => {
            textOne.forEach(text => {
              text.classList.remove('hidden');
              text.classList.add('visible');
            })
            miniButton.style.display = "block";
          }, 15);
        }
      }

      //**********************Slide 5
      if (id === 'slide5') {
        if (entry.intersectionRatio > 0.6) {
          setTimeout(() => {
            victims.forEach(victim => {
            victim.classList.remove('ani');
            console.log("over 50%");
            }) 
            setTimeout(() => {
              slide5Text.classList.remove('ani');
            }, 500);
          }, 300);     
        } 
      } else {
          victims.forEach(victim => {
            victim.classList.add('ani');
            console.log("under 10%");
          }) 
          slide5Text.classList.add('ani');
        }

      //**********************Slide 6
      if (id === 'slide6') {
        setTimeout(() => {
          bigText.classList.remove('ani');
          miniButton2.classList.remove('ani');
        }, 200);
      } else {
        if (!immis.classList.contains('ani') && bigText.classList.contains('hidden')) {
          immis.classList.add('ani');
          setTimeout(() => {
            immis.classList.add('hidden');
            bigText.classList.add('ani');
            bigText.classList.remove('hidden');
          }, 500);
        } else if (!bigText.classList.contains('ani') && immis.classList.contains('hidden')) {
          bigText.classList.add('ani');
          miniButton2.classList.add('ani');
        }
      }

      //**********************Slide 7
      if (id === 'slide7' && entry.intersectionRatio > 0.6) {
        setTimeout(() => {
          bigTextS7.classList.remove('ani');
        }, 200);
      } else {
        bigTextS7.classList.add('ani');
      }

      //**********************Slide 8
      if (id === 'slide8') {
        setTimeout(() => {
          resizable.classList.add('seen');
          resizer.classList.add('seen');
        }, 900);
      }

      //**********************Slide 9
      let slide9Inner = document.getElementById("slide9-inner");
      if (id === 'slide9') {
        console.log("Last slide is now visible!");
        button.style.rotate = "-90deg";
        setTimeout(() => {
          slide9Inner.classList.remove('ani');
        }, 800);
      } else {
         slide9Inner.classList.add('ani');
        button.style.rotate = "90deg";
      }
    }
  });
}, {
  threshold: 0.6
});
// start observing
slides.forEach(slide => {
  slidesObserver.observe(slide);
})




//******************************************** PROGRESS TRACKER
const previewBox = document.getElementById('slidePreview');
const previewImg = document.getElementById('previewImg');

progressDots.forEach(dot => {
  dot.addEventListener('mouseenter', () => {
    const imgSrc = dot.dataset.thumbnail;
    if (imgSrc) {
      previewImg.src = imgSrc;

      //Position relative to the progressTracker container
      const topOffset = dot.offsetTop;
      previewBox.style.top = `${topOffset - 40}px`;
      previewBox.style.left = '25px'; // or tweak as needed
      previewBox.style.display = 'block';
    }
  });

  dot.addEventListener('mouseleave', () => {
    previewBox.style.display = 'none';
    previewImg.src = '';
  });
});

progressDots.forEach((dot, index) => {
  dot.addEventListener('click', (e) => {
    e.preventDefault();

    const targetSlide = slides[index];
    if (targetSlide) {
      currentIndex = index; //update so main-button stays in sync
      smoothScrollTo(targetSlide.offsetTop, 1000);
    }
  });
});















