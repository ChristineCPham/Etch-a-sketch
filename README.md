# Etch-a-Sketch

This is a solution to the [Etch-a-Sketch project](https://www.theodinproject.com/lessons/foundations-etch-a-sketch) on [The Odin Project](https://www.theodinproject.com/). The Odin Project is a free and open source full-stack cirriculum.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- Hover over the sketch pad to change draw
- Change the number of squares in the sketch pad
- Reset the sketch pad

### Screenshot

![](/screenshot.JPG)


### Links

- Solution URL: [GitHub](https://github.com/ChristineCPham/Etch-a-sketch)
- Live Site URL: [GitHub Pages](https://christinecpham.github.io/Etch-a-sketch/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I learned how to add the event listener that would allow users to 'sketch' on the sketch pad.

```js
const divs = document.querySelectorAll('.sketchDiv');

divs.forEach((div) => {
   div.addEventListener('mouseenter', () => {
       div.style['background-color'] = 'pink';
   });
});
```

I also learned how to add a CSS variable using JavaScript.

```js
root.style.setProperty('--divNumber',   divSideNumber);
```

### Continued development

I will continue practicing DOM manipulation and events in JavaScript. I will also learn more fundamentals of JavaScript, such as objects.

## Author

- GitHub: [ChristineCPham](https://github.com/ChristineCPham)
- LinkedIn: [ChristineP](https://www.linkedin.com/in/christine-p-b456751a6/)
- Frontend Mentor: [ChristineCPham](https://www.frontendmentor.io/profile/ChristineCPham)

 
