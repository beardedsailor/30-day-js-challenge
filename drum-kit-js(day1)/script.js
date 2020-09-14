window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(audio);
  if (!audio) {
    return;
  }
  
  audio.play();
  const val=`${e.keyCode}`;  
   document.getElementById(val).style.border="4px solid yellow";
  

});
window.addEventListener("keyup",function(d){
  const va=`${d.keyCode}`;
  document.getElementById(va).style.border="4px solid black";
});

