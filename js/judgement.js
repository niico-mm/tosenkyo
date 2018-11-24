function judge(h, w, speed, beta, gmma) {
  if((h >= 200) && (w <= 10) && (speed > 1)
      && (beta <= 5) && (beta >= -5)
      && (gamma <= 5) && (gamma >= -5)) {
    return 2;
  } else if((h >= 100) && (w <= 15) && (speed > 0.5) && (beta <= 7) && (beta >= -7) && (gamma <= 7) && (gamma >= -7)) {
    return 1;
  } else if( h && w && speed && beta && gamma ) {
    return 0;
  } else {
    return -1;
  }
}
