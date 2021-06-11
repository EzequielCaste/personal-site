---
title: 'Check your <head>'
excerpt: 'There are many steps to follow when designing and building a webpage, choosing a color scheme, determining which technologies to use, which hosting site, domain name, etc.'
date: '2021-06-10T05:35:07.322Z'
---

# Check your <head> 🤔

There are many steps to follow when designing and building a webpage, choosing a color scheme, determining which technologies to use, which hosting site, domain name, etc. That is why it is important to plan _before_ you start writing any line of code. But sometimes we're in a hurry, we want to build a quick webpage and get it uploaded fast. This is where **mistakes** are made. Like the saying goes:

> _errare humanum est_

To err is human, we as humans will make mistakes, it is better to plan ahead and prevent them in the first place. Sometimes we focus so much on the design and functionality of a website that we forget to check if our <head> contain the basic recommended <meta> elements.

So what's the problem? No problem at all... This just goes to say that it's ok to make mistakes, we all do, Trainees. Juniors, Seniors and even those **[LVL +9000](https://media1.tenor.com/images/b3afd78db54dccbe7b3785e59dd45d3d/tenor.gif)**. You're not the only one. Take a deep breath, relax, do some Google researching about the error, read some documentation or ask a fellow developer for help.

---

Let's get back to the main topic of this post, checking your **<head>** so that it has all the right metadata.

## What are meta tags?

Meta tags are fragments of text content that provide an outline or summary of the webpage. The <meta> tag defines metadata about an HTML document. Metadata is data (information) about data.

## Why are meta tags important?

The information provided in the meta tags will appear in search results and when someone shares a link to your site on social media or in chats.

## What metadata should you include?

### Charset

```html
<meta charset="utf-8" />
```

This element specifies the document's character encoding.

### Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

The viewport is the user's visible area of a web page. Set the viewport to make your website look good on all devices.

### Title

```html
<title>Ezequiel Castellanos | Front-end Developer</title>
```

The title element represents the title of the HTML document (not the content).

### Author & Description

```html
<meta name="author" content="Ezequiel Castellanos" />
<meta name="description" content="Personal website and Blog" />
```

These two elements specify the author and provide a brief description of the page.

---

## Open Graph Protocol (og)

Facebook invented the Open Graph protocol to provide more metadata for our websites to display when we share a link in social media. The link will now appear along with an image and description, much more captivating than a simple word link.

```html
<meta
  property="og:title"
  content="Ezequiel Castellanos | Front-end Developer"
/>
<meta property="og:type" content="website" />
<meta
  property="og:image"
  content="https://avatars.githubusercontent.com/u/51804994?s=400&amp;u=efe88c4acafeb4fe560f666482b1454dca508408&amp;v=4"
/>
<meta property="og:url" content="https://ezecastellanos.com.ar" />

<meta property="og:site_name" content="Ezequiel Castellanos" />
<meta property="og:description" content="Personal Website and Blog" />
```

![Preview of how a link to a blog post would look like if posted on Facebook](/images/Check%20your%20head%200bc2d019ba0e4a8a98ab5def8c090365/Untitled.png)_Preview of how a link to a blog post would look like if posted on Facebook_

---

## Twitter Cards

Similar to Open Graph Data, Twitter Cards allows you to attach images and description to Tweets.

Whenever a user Tweets a link to your content, the tweet will include a “Card” that will be visible to their followers.

```html
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@Ezequiel_Caste" />
<meta name="twitter:creator" content="@Ezequiel_Caste" />
<meta name="twitter:title" content="Ezequiel Castellanos" />
<meta name="twitter:description" content="Personal Website and Blog" />
<meta name="twitter:url" content="https://ezecastellanos.com.ar" />
<meta
  name="twitter:image"
  content="https://avatars.githubusercontent.com/u/51804994?s=400&amp;u=efe88c4acafeb4fe560f666482b1454dca508408&amp;v=4"
/>
```

![Preview of a Twitter Card for a blog post](/images/Check%20your%20head%200bc2d019ba0e4a8a98ab5def8c090365/Untitled%201.png)_Preview of a Twitter Card for a blog post_

Once your twitter card tags are up and running you can use [this validator](https://cards-dev.twitter.com/validator) to check-out how it would look. The validator checks for the correct tags and gives you this message if everything went ok:

```html
INFO:  Page fetched successfully INFO:  24 metatags were found INFO:
 twitter:card = summary tag found INFO:  Card loaded successfully
```

---

## Favicons

This is the icon that will appear in the user's Bookmark or Favorites in their browser.

Adding your favicon to the <head> of your site:

```html
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
```

I highly recommend using [https://realfavicongenerator.net/](https://realfavicongenerator.net/) you only have to upload the image you want to use as favicon and the site automatically generates the meta tags and provides a zip file with all the necessary icon files of different sizes.

Don't have a favicon yet? You can make your own icon with [https://www.canva.com/](https://www.canva.com/) It's really easy, mine only took 10 minutes to design.

![Original design made with Canva](/images/Check%20your%20head%200bc2d019ba0e4a8a98ab5def8c090365/Untitled%202.png)_Original design made with Canva_

![Favicon appears to the left of your webpage title.](/images/Check%20your%20head%200bc2d019ba0e4a8a98ab5def8c090365/Untitled%203.png 'TITLE')_Favicon appears to the left of your webpage title._

---

## Check your <head>

Once you have your meta tags, open graph, twitter card and favicon included in your webpage, you can verify how the links to your site will appear in search engines and social media posts. Check your URL with this site:

[Meta Tags - Preview, Edit and Generate](https://metatags.io/)

This site will also generate all the required meta tags in case you missed any.

Good luck! 🥳

---

### Credits & References

[Meta Tag](https://www.w3schools.com/tags/tag_meta.asp)

[The_head_metadata_in_HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)

[Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup)

[https://ogp.me/](https://ogp.me/)

[https://metatags.io/](https://metatags.io/)

[https://realfavicongenerator.net/](https://realfavicongenerator.net/)

[https://www.canva.com/](https://www.canva.com/)
