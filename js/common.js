window.onload = () => {
  let slide = document.getElementsByClassName("slide");
  const leftArrow = document.getElementsByClassName("slider__arrows-left")[0];
  const rightArrow = document.getElementsByClassName("slider__arrows-right")[0];

  let currentSlide = 0;
  let zIndex = 2000;
  var clickable = true;
  const howFast = 1000; //ms min 900-1500 recommended

  for(let i = 0; i < slide.length; i++){
    slide[i].style.zIndex = zIndex - (i * 10);
  }

  rightArrow.onclick = () => {
    if(clickable){
      clickable = false;

      if(currentSlide == slide.length - 1){
        slide[currentSlide].style.left = '-100%'
        slide[currentSlide].style.zIndex = '6000'
        currentSlide = 0;

        for(let i = 0; i < slide.length - 1; i++){
          slide[i].style.transition = '0s';
          slide[i].style.left = '0';
          slide[i].style.zIndex = zIndex - ((i+10) * 100)
        }

        setTimeout(() => {
          for(let i = 0; i < slide.length - 1; i++){
            slide[i].style.zIndex = zIndex - (i * 10);
          }

          slide[slide.length - 1].style.zIndex = zIndex - ((slide.length - 1) * 10);
          setTimeout(() => {
            slide[slide.length - 1].style.left = '0';
          }, 1500)

          for(let i = 0; i < slide.length; i++){
            slide[i].style.transition = '1.5s'
          }
        }, 1000)

        setTimeout(() => {
          clickable = true;
        }, howFast)

      }else{
        slide[currentSlide].style.left = '-100%'
        currentSlide++;
        setTimeout(() => {
          clickable = true;
        }, howFast)
      }
    }
  }

  leftArrow.onclick = () => {

    if(clickable){
      clickable = false;
      console.log(currentSlide)
      if(currentSlide == 0){
        for(let i = 0; i < slide.length; i++){
          slide[i].style.transition = '0s';
          if(i != 0){
            slide[i].style.left = '-100%';
            slide[i].style.zIndex = zIndex - (i+10) * 10
          }else{
            slide[i].style.zIndex = 30
          }
        }
        setTimeout(function(){
          slide[slide.length-1].style.transition = '1.5s';
          slide[slide.length-1].style.left = '0%';

          for(let i = 0; i < slide.length; i++){
            slide[i].style.transition = '1.5s';
          }
        }, 100)
        setTimeout(() => {
          clickable = true;
        }, howFast)
        currentSlide = slide.length;
      }else{
        slide[0].style.left = '-100%'
        setTimeout(function(){
          slide[0].style.zIndex = 2000
        }, 500)
        setTimeout(() => {
          clickable = true;
        }, howFast)
        slide[currentSlide-1].style.left = '0%'
      }
      currentSlide--;
    }
  }

}
