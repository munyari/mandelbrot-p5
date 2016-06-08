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
  var palette = [];
  for (var i = 0; i < 16; i++) {
    var c = "rgb(" + (i*8) + "," + (i*8) + "," + (128+i*4) + ")";
    palette.push(c);
  }
  for (var i = 16; i < 64; i++) {
    var c = "rgb(" + (128+i-16) + "," + (128+i-16) + "," + (192+i-16) + ")";
    palette.push(c);
  }
  for (var i = 64; i < MAX_ITERATION; i++) {
    // 319 is TOTALLY a magic number in this context
    var c = "rgb(" + (319-i) + "," + (128+(319-i)/2) + "," + (319-i) + ")";
    palette.push(c);
  }
  return palette;
}
