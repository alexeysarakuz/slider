window.onload = () => {
  let slide = document.getElementsByClassName("slide");
  const leftArrow = document.getElementsByClassName("slider__arrows-left")[0];
  const rightArrow = document.getElementsByClassName("slider__arrows-right")[0];

  let currentSlide = 0;
  let zIndex = 2000;
  var clickable = true;
  const howFast = 1200; //ms min 1100-1500 recommended

  for(let i = 0; i < slide.length; i++){
    slide[i].style.zIndex = zIndex - (i * 10);
  }

  rightArrow.onclick = () => {
    if(clickable){
      clickable = false;
      let q = slide.length - 2
      if(currentSlide == slide.length - 2){
        slide[currentSlide].style.width = '0%'
        slide[currentSlide].style.zIndex = '6000'
        removeActiveClass(slide, currentSlide)
        currentSlide = 0;

        slide[slide.length - 1].style.width = '0%';
        for(let i = 0; i < slide.length - 1; i++){
          slide[i].style.transition = '0s';
          slide[i].style.width = '100%';
          slide[i].style.zIndex = zIndex - ((i+10) * 100)
        }

        setTimeout(() => {
          for(let i = 0; i < slide.length - 1; i++){
            slide[i].style.zIndex = zIndex - (i * 10);
          }

          slide[slide.length - 1].style.zIndex = zIndex - ((slide.length - 1) * 10);
          setTimeout(() => {
            slide[slide.length - 1].style.width = '100%';
          }, 1500)

          for(let i = 0; i < slide.length; i++){
            slide[i].style.transition = 'width 1.5s'
          }
        }, 1500)

        setTimeout(() => {
          addActiveClass(slide, currentSlide);
          clickable = true;
        }, 1500)

      }else{
        slide[currentSlide].style.width = '0%'
        removeActiveClass(slide, currentSlide)
        currentSlide++;
        setTimeout(() => {
          addActiveClass(slide, currentSlide);
          clickable = true;
        }, howFast)
      }
    }
  }

  leftArrow.onclick = () => {

    if(clickable){
      clickable = false;
      if(currentSlide == 0){
        for(let i = 0; i < slide.length; i++){
          slide[i].style.transition = '0s';
          if(i != 0){
            slide[i].style.width = '0';
            slide[i].style.zIndex = zIndex - (i+10) * 10
          }else{
            slide[i].style.zIndex = 30
          }
        }
        setTimeout(function(){
          slide[slide.length-1].style.transition = 'width 1.5s';
          slide[slide.length-1].style.width = '100%';

          for(let i = 0; i < slide.length; i++){
            slide[i].style.transition = 'width 1.5s';
          }
        }, 100)
        setTimeout(() => {
          currentSlide--;
          clickable = true;
        }, howFast)
        removeActiveClass(slide, currentSlide)
        currentSlide = slide.length - 1;
        addActiveClass(slide, currentSlide);
      }else{
        slide[0].style.width = '0%'
        setTimeout(function(){
          slide[0].style.zIndex = 2000
        }, 1500)
        slide[currentSlide-1].style.width = '100%'
        setTimeout(() => {
          removeActiveClass(slide, currentSlide)
          currentSlide--;
          addActiveClass(slide, currentSlide);
          clickable = true;
        }, 1500)
      }
    }
  }

}

const removeActiveClass = (slide, currentSlide) => {
  setTimeout(() => {
    slide[currentSlide].classList.remove('active');
  }, 1500)
}


const addActiveClass = (slide, currentSlide) => {
  slide[currentSlide].classList.add('active');
}
