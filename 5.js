const arrow = (x, n) => {
    let result = x; 
    for (let i = 1; i < n; i++) {
        result *= x;
    }
  return console.log(result);
}
arrow(2, 5);