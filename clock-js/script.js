const sechand = document.getElementById("s");
const minhand = document.getElementById("m");
const hourhand = document.getElementById("h");

function setDate() {
  const date = new Date();
  const sec = date.getSeconds();
  const secdeg = ((sec / 60) * 360);
  const Min = date.getMinutes();
  const minutedeg = ((Min/60)*360);
  const hour = date.getHours();
  var hour1;
  if(hour>12){
    hour1=hour-12;
  }
  const hourdeg = 0.5*(60*hour1+Min);
  console.log(secdeg);
  console.log(minutedeg);
  console.log(hourdeg);
  sechand.style.transform = `rotate(${secdeg}deg)`;
  minhand.style.transform = `rotate(${minutedeg}deg)`;
  hourhand.style.transform = `rotate(${hourdeg}deg)`;
  if(hourdeg%360==0){
    hourde
  }
}
setInterval(setDate,1000);
