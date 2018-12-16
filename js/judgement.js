function judge(h, w, speed, beta, gmma) {
  if((h >= 200) && (w <= 10) && (speed > 1) && (beta <= 5) && (beta >= -5) && (gamma <= 5) && (gamma >= -5)) {
    return 13;
  } else if((h >= 100) && (w <= 15) && (speed > 0.5) && (beta <= 7) && (beta >= -7) && (gamma <= 7) && (gamma >= -7)) {
    return 12;
  } else if((h >= 150) && w && speed && beta && gamma ) {
    return 9;
  } else if( h && (w <= 50) && speed && beta && gamma ) {
    return 8;
  } else if( h && w && speed && beta && gamma ) {
    return 1;
  } else {
    return -1;
  }
}
