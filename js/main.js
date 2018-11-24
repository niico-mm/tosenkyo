document.addEventListener('touchmove', function(e) {e.preventDefault();}, {passive: false});

var startX, startY, endX, endY, startTime, endTime, beta, gamma;
var secTop = document.getElementById('top');
var secMain = document.getElementById('main');
var secResult = document.getElementById('result');

var txtName = document.getElementById('name');
var txtPoint = document.getElementById('point');
var txtDetail = document.getElementById('detail');
var txtImg = document.getElementById('img');

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

document.getElementById('flick').addEventListener('touchstart', function(evt){
  startX = evt.touches[0].screenX;
  startY = evt.touches[0].screenY;
  startTime = new Date();
});

document.getElementById('flick').addEventListener('touchend', function(evt){
  endX = evt.changedTouches[0].screenX;
  endY = evt.changedTouches[0].screenY;
  endTime = new Date();

  /*縦の移動*/
  var h = startY - endY;
  /*横の移動*/
  var w = Math.abs(startX - endX);
  /*距離*/
  var distance = Math.sqrt(h*h + w*w);
  /*経過時間*/
  var diffTime = endTime - startTime;
  /*速度（pt/ms）*/
  var speed = distance / diffTime;

  //console.log(h , w , speed , beta , gamma);
  //alert(gamma);

  var meiNum = judge(h, w, speed, beta, gamma);

  if(meiNum >= 0) {
    secMain.style.display = 'none';
    secResult.style.display = 'block';

    txtName.innerHTML = mei[meiNum].name;
    txtPoint.innerHTML = mei[meiNum].point;
    txtDetail.innerHTML = mei[meiNum].detail;
    txtImg.alt = mei[meiNum].name;
    txtImg.src = mei[meiNum].img;
  } else {
    alert('スマホでやってね');
  }
});

document.getElementById('back').addEventListener('click', function(evt){
  secResult.style.display = 'none';
  secTop.style.display = 'block';
});
