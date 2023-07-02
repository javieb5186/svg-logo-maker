# svg-logo-maker

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)

## Description

My motivation is to create an application that will create a logo from a series of questions to save money from hiring an artist. Building this project should reduce cost and time from hiring an artist adn creaking the work ourselves. I did not learn anything new with this project but was reminded of the tools avaliable to me. I was reminded of pattern testing in a string and of a color package. 

## Installation

Follow these steps to setup your environment

1. Make sure to have bash/zsh installed on your computer
2. Clone git repo onto a folder.
3. Navigate to folder in terminal
4. Run npm i to installed dependencies
5. You are ready to run

## Usage

To begin using svg logo maker, run the following command:
```
node index
```
You will then be asked four questions. 

![alt text](/images/svg-lm-questions.png)

Final text output is always uppercase. Numbers can be included in text but not anythign else.

Colors need to be a valid color name or hex. 

NOTE: You won't be able to continue until you provide valid answers

You will then get a 

```
Generated logo.svg
```

in the console.

Check your files for the newly created logo.svg

![alt text](/images/svg-lm-file.png)

Open the logo.svg in your ide to see the contents. Or open to the browser to see the final product

![alt text](/images/svg-lm-xml.png)
![alt text](/images/svg-lm-product.png)

The programs ends with your newly created svg.

## Credits

### Color package

A package to use valid colors located in npm.

https://www.npmjs.com/package/color

### Pattern searching

Although not new to me, I was reminded of pattern searching through this article. 

https://stackoverflow.com/questions/33017274/find-all-words-with-3-letters-with-regex

## License

MIT License

Copyright (c) 2023 javieb5186

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Tests

### shapes.js

The only file avaliable for testing is shapes.js. To begin testing follow these steps. Navigate to root folder via console. Run "npm test".

Testing uses the package jest. 
