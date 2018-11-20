var startX, startY, endX, endY, startTime, endTime, beta, gamma;
var secTop = document.getElementById('top');
var secMain = document.getElementById('main');
var secResult = document.getElementById('result');

secMain.style.display = 'none';
secResult.style.display = 'none';

document.getElementById('start').addEventListener('click', function(evt){
  secTop.style.display = 'none';
  secMain.style.display = 'block';
});

window.addEventListener('deviceorientation', function(evt){
  beta = evt.beta;
  gamma = evt.gamma;
});

document.getElementById('hoge').addEventListener('touchstart', function(evt){
  startX = evt.touches[0].screenX;
  startY = evt.touches[0].screenY;
  startTime = new Date();
});

document.getElementById('hoge').addEventListener('touchend', function(evt){
  endX = evt.changedTouches[0].screenX;
  endY = evt.changedTouches[0].screenY;
  endTime = new Date();

  /*縦の移動*/
  var h = startY - endY;
  /*横の移動*/
  var w = startX - endX;
  /*距離*/
  var distance = Math.sqrt(h*h + w*w);
  /*経過時間*/
  var diffTime = endTime - startTime;
  /*速度（pt/ms）*/
  var speed = distance / diffTime;

  console.log(h , w , speed , beta , gamma);

  if( h && w && speed && beta && gamma ) {
    document.getElementById('point').textContent='100';
    secMain.style.display = 'none';
    secResult.style.display = 'block';
  } else {
    alert('スマホでやってね');
    // document.getElementById('point').textContent='0';
  }
});
