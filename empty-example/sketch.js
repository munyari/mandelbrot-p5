var max_iteration = 1000;
var palette = generatePalette();
var hist = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  printFrac();
}

function printFrac() {
  for (var i = 0; i < width; i++) {
    for (var j = 0; j < height; j++) {
      var x0 = Xscale(i);
      var y0 = Yscale(j);
      var x = 0.0;
      var y = 0.0;
      var iteration = 0;
      while (x * x + y*y < 4 && iteration < max_iteration) {
        var xtemp = x*x - y*y + x0;
        var ytemp = 2*x*y + y0;
        if (x == xtemp && y == ytemp) {
          iteration = max_iteration;
          break;
        }
        x = xtemp;
        y = ytemp;
        iteration++;
      }
      if (iteration == max_iteration) {
        stroke(0);
      }
      else {
        var c = palette[iteration];
        // var c = palette[iteration % palette.length];
        stroke(c);
      }
      point(i,j);
    }

  }
}

// scaled x coordinate (-2.5, 1)
function Xscale(xcoord) {
  return (xcoord * 3.5 / width) + -2.5;
}

// scaled y coordinate (-1, 1)
function Yscale(ycoord) {
  return (ycoord * 2.0 / height) + -1;
}

function generatePalette() {
  var base_r = Math.round(Math.random()*256);
  var base_g = Math.round(Math.random()*256);
  var base_b = Math.round(Math.random()*256);

  var palette = [];
  for (var i = 0; i < max_iteration; i++) {
    var new_col = getColor(base_r, base_b, base_g, 20);
    var c = "rgb(" + new_col[0] + "," + new_col[1] + "," + new_col[2] + ")";
    palette.push(c);
    console.log(c);
  }
  return palette;
}

function getColor(base_r, base_b, base_g, offset) {
  var value = (base_r + base_b + base_g)/3.0;
  var newValue = value + 2 * Math.random() * offset - offset;
  var valueRatio = newValue / value;
  new_r = Math.round(base_r * valueRatio);
  new_g = Math.round(base_g * valueRatio);
  new_b = Math.round(base_b * valueRatio);
  return [new_r, new_g, new_b];
}
