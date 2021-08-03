---
title: 'Color Generator'
excerpt: 'Use values.js package to generate color tints and shades'
date: '2021-08-03T05:35:07.322Z'
---

# Color generator

If you ever want to build a color generator app please don't try to reinvent the wheel. There are many npm packages to help and assist you and most importantly, save you a lot of time. Sometimes it can be good practice to write your own script but don't let it get too complicated.

I found an interesting package called **[values.js](https://noeldelgado.github.io/values.js/)** that provides us with tints and shades of a given color. Before I discovered this package I was going crazy converting colors from HEX to RGB and later to HSL, wasting time when I could have done a simple google search for: "npm color shades and tints"

## Installation

```bash
npm install values.js --save
```

## Usage

```jsx
import Values from 'values.js';
let color = new Values('#aaa');

// Generate the tints and shades of the base color as specified by weight 10.
console.log(color.all(10));
```

For my case of the Color Generator, I needed 10 tints (lighter) and 10 shades (darker). The all() method returns an array of color objects. Each object contains several useful properties such as weight, type, and rgbString, but for this particular case, I used the hex string to extract the HEX color code and the weight to represent the percentage of light/darkness.

![https://i.imgur.com/mlMGZTf.png](https://i.imgur.com/mlMGZTf.png)

## Next Step: Copy to Clipboard

Let's add some additional functionality to this app by allowing the user to copy a color to their clipboard. Be careful 🚧 You may come across

```javascript
document.execCommand();
```

but this method is **deprecated**. The alternative to use is [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API):

```jsx
navigator.clipboard.writeText('text to copy');
```

Remember to change the style of the color divs so that it shows it can be clicked on (hint: cursor: pointer).

Now the tricky part is showing a message to the user that the color code has been copied to their clipboard. This message should only appear for a couple of seconds, and it will have to disappear. Here I used the setTimeout method that will hide the message after 2 seconds:

```jsx
const showMessage = (id: string) => {
  // show message
  document.getElementById(id).setAttribute('style', 'display: block');
  navigator.clipboard.writeText(`#${id}`);
  // wait 1 sec
  // hide message
  setTimeout(() => {
    document.getElementById(id).setAttribute('style', 'display: none');
  }, 2000);
};
```

The `id` parameter is the HEX Color String and is included in each of the color divs:

```html
<p id="{color.hex}" className="color-box-copy">COPIED TO CLIPBOARD</p>
```

---

### Live Color Generator: [https://color-generator-drab.vercel.app/](https://color-generator-drab.vercel.app/)

### Find the code on GitHub: [https://github.com/EzequielCaste/react-projects/tree/main/color-generator](https://github.com/EzequielCaste/react-projects/tree/main/color-generator)

![https://i.imgur.com/4ziuHGk.png](https://i.imgur.com/4ziuHGk.png)

Good luck! 🥳

---

### Credits & References

[https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)

[https://noeldelgado.github.io/values.js/](https://noeldelgado.github.io/values.js/)
