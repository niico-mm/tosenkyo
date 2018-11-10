var startX, startY, endX, endY;

document.getElementById('hoge').addEventListener('touchstart', function(evt){
  startX = evt.touches[0].screenX;
  startY = evt.touches[0].screenY;
});
document.getElementById('hoge').addEventListener('touchend', function(evt){
  endX = evt.changedTouches[0].screenX;
  endY = evt.changedTouches[0].screenY;

  var h = startY - endY;
  var w = startX - endX;

  var distance = Math.sqrt(h*h + w*w);

  alert(distance);

});
