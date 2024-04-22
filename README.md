# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Solution URL](https://github.com/FevenSeyfu/Shortly-url-shortner)
- Live Site URL: [Live site URL](https://url-shortner-landing-page.netlify.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [TailwindCSS](https://tailwindcss.com/) - For styles
- [Vite](https://vitejs.dev/) - Build Tool
- [tinyurl API](https://tinyurl.com/app/dev) - Rest API

### What I learned

While Completing this project how to handle 3rd party APIs and integrating with react.

```
```Ts
const shorten = async (url: string) => {
    try {
      const response = await axios.post('https://tinyurl.com/api-create.php', null, {
        params: {
          url: url
        }
      });
      const shortUrl = response.data;
      onAddUrl({ id: url.length + 1, longUrl: url, shortUrl: shortUrl });
    
    return shortUrl;
  } catch (error) {
    console.error('Error shortening URL:', error);
  }
  }
```

### Continued development

As a continous development I want to add user authentication to handle Login/Registration and to store shortened urls for user to access later.

## Author

- Website - [Feven Seyfu](https://fevenseyfu.tech/)
- Frontend Mentor - [@FevenSeyfu](https://www.frontendmentor.io/profile/FevenSeyfu)
- Twitter - [@FevenSeyfu](https://www.twitter.com/FevenSeyfu)
- Linkedin - [Feven Seyfu](https://www.linkedin.com/in/fevenseyfu/)


## Acknowledgments

I would like to thank all who have reviewed my solution and given me feedback and Frontend mentors for providing the assets and design files I have used for the project.
