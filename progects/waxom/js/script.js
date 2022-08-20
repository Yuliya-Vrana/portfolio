
function ibg(){
let ibg=document.querySelectorAll(".ibg"); for (var i = 0; i < ibg.length; i++) { if(ibg[i].querySelector('img')){ ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; } }

}

ibg();


$(".filter__item").click(function(event){
  var i=$(this).data("filter");
  if (i==1){
    $ (".project__block").show();
  }else{
    $ (".project__block").hide();
    $ (".project__block.f_"+i).show();
  }
  $(".filter__item").removeClass("active");
  $(this).addClass("active");

  return false;
});











