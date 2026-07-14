# ✨ Reveal Animation Website

A beautiful, modern website showcasing smooth reveal animations with scroll-triggered effects.

## Features

✅ **Smooth Animations** - Elegant fade and slide-up effects
✅ **Responsive Design** - Works on all devices
✅ **Cross-browser Compatible** - Safari, Chrome, Firefox, and more
✅ **Scroll Triggered** - Animations trigger as you scroll
✅ **Performance Optimized** - Smooth 60fps animations
✅ **Modern Design** - Beautiful gradients and UI elements

## Live Demo

[View the live website](https://4vpmcbdc69-bit.github.io/reveal-animation-website/)

## How It Works

The website uses CSS transitions and the Intersection Observer API to:

1. Start elements with `.hidden` class (opacity 0, translated down)
2. Detect when elements enter the viewport
3. Add `.show` class to trigger the animation
4. Elements fade in and slide up smoothly over 0.8s

## Animation Code

```css
.hidden {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease;
}

.show {
    opacity: 1;
    transform: translateY(0);
}
```

## File Structure

```
.
├── index.html     # Main HTML file
├── style.css      # All styles and animations
├── script.js      # JavaScript for scroll triggers
└── README.md      # This file
```

## Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Scroll to see the animations in action!

## Customization

You can easily customize:

- **Animation Duration**: Change `.8s` in `style.css`
- **Animation Distance**: Change `translateY(40px)` value
- **Easing Function**: Replace `ease` with `ease-in-out`, `cubic-bezier()`, etc.
- **Colors**: Update gradient values in `style.css`

## Browser Support

- ✅ Safari 12+
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Edge 79+
- ✅ Mobile browsers

## License

Free to use and modify!

---

Made with ✨ and smooth transitions