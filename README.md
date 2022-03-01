# METARdecoder

METARdecoder is a simple Chrome extension for parsing and decoding METAR reports found online. Users simply highlight the text of a METAR in a web page and click the "Decode METAR" button to get a user-friendly display of the METAR report.

> The current version number of METARdecorder is 0.0.2. This is an initial implementation so best considered a "beta" version. There should be no risk to using it and it shouldn't impact borwser behaviour or performance -- but more testing with many METAR reports from many web sites would be needed to fully validate it works in all necessary use cases.

## Installing METARdecoder

The easiest way to install METARdecoder is from the Chrome Web Store:

[Install from Chrome Web Store](https://chrome.google.com/webstore/detail/metar-decoder/bbjmdeidjfgbeflcdompdiglpmdpbhhm)

You can also clone this repository and load it as an unpacked extension as described in the Chrome Extensions developer documentation:

[Load an unpacked extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked)

This is only recommended by Google for use during extension development.

## Using METARdecorder

Using METARdecoder is easy. Simply visit a web site containing a METAR report on it, select and highlight the text of the METAR in the page, open METARdecorder and press the **Decode Metar** button.

## Credits and Acknowledgements

This project depends on two other projects:

* [jQuery](https://jquery.com/) (distributed under the MIT license)
* ["metar.js" Node/JavaScript module](https://github.com/skydivejkl/metar.js) (distributed under the MIT license)

Both projects's code are included in this project's repository for simplicity and clarity and all rights remain with the original authors.

## License

This project has been developed by [@EththeEth](https://github.com/EththeEth) and [@likeablegeek](https://likeablegeek.com) and is distributed by [FlightSim Ninja](https://flightsim.ninja).

Copyright 2022, FlightSim Ninja (https://flightsim.ninja).

This project is avaiable as an open source package under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
