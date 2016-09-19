<a href='https://www.recurse.com' title='Made with love at the Recurse Center'>
<img src='https://cloud.githubusercontent.com/assets/2883345/11325206/336ea5f4-9150-11e5-9e90-d86ad31993d8.png' height='20px'/></a>
[![GPL Licence](https://badges.frapsoft.com/os/gpl/gpl.svg?v=103)][license]

The [Mandelbrot set][mandelbrot] is an interesting set of complex numbers
produced by repeated iteration of a quadratic equation that forms a
[fractal][fractal]. It is a special case of a [Julia Set][julia], and was first
described by [Benoit Mandelbrot][benoit].

[mandelbrot]: https://en.wikipedia.org/wiki/Mandelbrot_set
[fractal]: https://en.wikipedia.org/wiki/Fractal
[julia]: https://en.wikipedia.org/wiki/Julia_set
[benoit]: https://en.wikipedia.org/wiki/Benoit_Mandelbrot

In particular, this fractal is known to produce some stunning visuals:

![img1][img1]
![img2][img2]
![img3][img3]
![img4][img4]
![img5][img5]
![img6][img6]

[img1]: https://panashefundira.me/assets/mandelbrot/myCanvas4.jpg
[img2]: https://panashefundira.me/assets/mandelbrot/myCanvas(1).jpg
[img3]: https://panashefundira.me/assets/mandelbrot/myCanvas9.jpg
[img4]: https://panashefundira.me/assets/mandelbrot/myCanvas10.jpg
[img5]: https://panashefundira.me/assets/mandelbrot/myCanvas11.jpg
[img6]: https://panashefundira.me/assets/mandelbrot/myCanvas12.jpg

This repository contains a Mandelbort set renderer in Javascript, built with
[p5.js][p5]. In the future, this may be ported to canvas or WebGL for better
performance.

[p5]: https://github.com/processing/p5.js

# Running
This should run in any Javacript enabled web browser. Simply open
`src/index.html`.

To zoom in, just click on the image where you'd like to zoom. Be warned,
however, that this is *very* slow.

# License
This work is licensed under the terms of the GNU Public License, Version 3.0.
Please read [LICENSE][license] for more details.

[license]: https://github.com/munyari/mandelbrot-p5/blob/master/LICENSE
