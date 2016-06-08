var MAX_ITERATION = 1000;
var palette = generatePalette();
var hist = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  renderFractal();
}

function renderFractal() {
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var cReal = Xscale(x);
      var cImg = Yscale(y);

      var zReal = 0.0;
      var zImg = 0.0;

      var iteration = 0;
      while (zReal * zReal + zImg*zImg < 4 && iteration < MAX_ITERATION) {
        var nextZReal = zReal*zReal - zImg*zImg + cReal;
        var nextZImg = 2*zReal*zImg + cImg;
        if (zReal == nextZReal && zImg == nextZImg) {
          iteration = MAX_ITERATION;
          break;
        }
        zReal = nextZReal;
        zImg = nextZImg;
        iteration++;
      }
      if (iteration == MAX_ITERATION) {
        stroke(0);
      }
      else {
        var c = palette[iteration];
        // var c = palette[iteration % palette.length];
        stroke(c);
      }
      point(x,y);
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
  for (var i = 0; i < MAX_ITERATION; i++) {
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
