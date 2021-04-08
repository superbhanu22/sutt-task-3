setInterval(() => {
 let dt = new Date();
 let hours =dt.getHours();
 let minutes =dt.getMinutes();
 let seconds =dt.getSeconds();
 let hrRot=30*hours + minutes*0.5;
 let minRot=6*minutes;
 let secRot=6*seconds;

  
  
 document.querySelector('.minute_hand').style.transform=`rotate(${minRot}deg)`;
 document.querySelector('.hour_hand').style.transform = `rotate(${hrRot}deg)`;
 document.querySelector('.second_hand').style.transform=`rotate(${secRot}deg)`;

}, 1000);