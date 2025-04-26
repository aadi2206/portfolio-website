# Aadi Sachan Portfolio Website

A premium, futuristic portfolio website for Aadi Sachan, founder of Serververse.

## Features

- Dark Mode by default with Light Mode toggle
- Glassmorphism design with blurred glass panels
- Responsive design for all devices
- Smooth animations and transitions
- Theme persistence using localStorage
- Typewriter effect in the hero section
- Tilt effect on project cards

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- AOS (Animate on Scroll)
- Typed.js
- VanillaTilt.js

## Getting Started

### Prerequisites

- A web browser
- Git (optional, for cloning the repository)

### Installation

1. Clone the repository or download it as a ZIP file:
   ```
   git clone https://github.com/yourusername/portfolio-website.git
   ```
   
2. Navigate to the project directory:
   ```
   cd portfolio-website
   ```
   
3. Open the `index.html` file in your web browser.

## Deployment on GitHub Pages

1. Create a GitHub repository for your portfolio.
2. Push your code to the repository:
   ```
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git branch -M main
   git push -u origin main
   ```
3. Go to the repository settings on GitHub.
4. Scroll down to the GitHub Pages section.
5. Set the source to the main branch.
6. Your site will be published at `https://yourusername.github.io`.

## Project Structure

```
/
├── index.html            # Main HTML file
├── style.css             # CSS styles
├── script.js             # JavaScript functionality
├── favicon.ico           # Favicon
├── assets/               # Asset directory
│   └── projects/         # Project images
│       ├── project1.jpg
│       ├── project2.jpg
│       ├── project3.jpg
│       └── project4.jpg
└── README.md             # This file
```

## Customization

### Changing Content

To update the content of the website, edit the `index.html` file. You can modify text, links, and images.

### Changing Colors

To change the color scheme, edit the CSS variables in the `:root` selector in the `style.css` file.

```css
:root {
    --primary-bg: #0a192f;
    --secondary-bg: #112240;
    --primary-accent: #3b82f6;
    --serververse-accent: #ffa632;
    /* Other colors */
}
```

### Adding Projects

To add more projects, duplicate the project card structure in the Projects section of the `index.html` file:

```html
<div class="project-card" data-tilt>
    <div class="project-image">
        <img src="assets/projects/your-project-image.jpg" alt="Project Title">
    </div>
    <div class="project-info">
        <h3>Project Title</h3>
        <p>Project description goes here</p>
    </div>
</div>
```

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Font Awesome](https://fontawesome.com/) for the icons
- [Google Fonts](https://fonts.google.com/) for JetBrains Mono font
- [AOS](https://michalsnik.github.io/aos/) for scroll animations
- [Typed.js](https://github.com/mattboldt/typed.js/) for the typewriter effect
- [VanillaTilt.js](https://micku7zu.github.io/vanilla-tilt.js/) for the tilt effect 