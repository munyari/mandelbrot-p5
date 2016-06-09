const MAX_ITERATION = 1024;
var palette = generatePalette();
// (x1, y1) and (x2, y2) define that part of the complex plane that is visible
var x1 = -2.5;
var x2 = 1;
var y1 = -1;
var y2 = 1;
// width and height of visible complex plane
var cwidth = x2-x1;
var cheight = y2-y1;

function setup() {
  createCanvas(1400, 800);
  renderFractal();
}

function renderFractal() {
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var escapeTime = calculateEscapeTime(x, y);

      stroke(palette[escapeTime]);

      point(x,y);
    }
  }
}

function calculateEscapeTime(x, y) {
  var cReal = mapXToReal(x);
  var cImg = mapYToComplex(y);

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
  return iteration;
}

// map our bitmap x coordinate to a real axis coordinate
function mapXToReal(xcoord) {
  return cwidth * xcoord / width + x1;
}

// map our bitmap y coordinate to an imaginary axis coordinate
function mapYToComplex(ycoord) {
  return y1 + cheight * ycoord / height;
}

// set colors in this function
function generatePalette() {
  var palette = [];
  for (i = 0; i < 16; i++) {
    var c = "rgb(" + (i*8) + "," + (i*8) + "," + (128+i*4) + ")";
    palette.push(c);
  }
  for (i = 16; i < 64; i++) {
    var c = "rgb(" + (128+i-16) + "," + (128+i-16) + "," + (192+i-16) + ")";
    palette.push(c);
  }
  for (i = 64; i < MAX_ITERATION; i++) {
    // 319 is TOTALLY a magic number in this context
    var c = "rgb(" + ((319-i)%256) + "," + ((128+(319-i)/2)%256) + "," + ((319-i)%256) + ")";
    palette.push(c);
  }
  palette[MAX_ITERATION] = "rgb(0,0,0)";
  return palette;
}

// respond to mouse clicks
function mousePressed() {
  var mouseXCoord = (mouseX * 1.0 / width) * cwidth + x1;
  var mouseYCoord = (mouseY * 1.0 / height) * cheight + y1;
  x1 = mouseXCoord - cwidth / 8.0;
  x2 = mouseXCoord + cwidth / 8.0;
  y1 = mouseYCoord - cheight / 8.0;
  y2 = mouseYCoord + cheight / 8.0;
  cwidth /= 4.0;
  cheight /= 4.0;

  renderFractal();
}
