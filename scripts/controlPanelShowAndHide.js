const plusBtn = document.querySelector('.btnPlus'),
      info_box2 = document.querySelector('.info-box2');

plusBtn.addEventListener('click',(e)=>{
  if(info_box2.classList.contains('hide')){
    info_box2.classList.remove('hide')
    plusBtn.innerHTML = '-'
  }else{
    info_box2.classList.add('hide')
    plusBtn.innerHTML = '+'
  }

  
})