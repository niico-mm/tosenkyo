function randomInt(max,min) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function judge(h, w, speed, beta, gmma) {
  if((h >= 150) && (h <= 250) && (w <= 25) && (speed < 2) && (beta <= 20) && (beta >= 10) && (gamma <= 5) && (gamma >= -5)) {
    var min = 29;
    var max = 30;
    return randomInt(max,min);
  } else if((h >= 100) && (h <= 300) && (w <= 50) && (speed < 3) && (beta <= 20) && (beta >= -20) && (gamma <= 20) && (gamma >= -20)) {
    var min = 23;
    var max = 28;
    return randomInt(max,min);
  } else if((h >= 100) && (h <= 300) && (w <= 100) && (speed < 3) && (beta <= 30) && (beta >= -30) && (gamma <= 30) && (gamma >= -30)) {
    var min = 19;
    var max = 22;
    return randomInt(max,min);
  } else if((h <= 300) && (w <= 100) && (speed < 5) && (beta <= 30) && (beta >= -30) && (gamma <= 30) && (gamma >= -30)) {
    var min = 11;
    var max = 18;
    return randomInt(max,min);
  } else if((h <= 300) && (w <= 200) && (speed < 5) && (beta <= 50) && (beta >= -50) && (gamma <= 50) && (gamma >= -50)) {
    var min = 5;
    var max = 10;
    return randomInt(max,min);
  } else if( h && w && speed && beta && gamma ) {
    var min = 0;
    var max = 4;
    return randomInt(max,min);
  } else {
    return -1;
  }
}
