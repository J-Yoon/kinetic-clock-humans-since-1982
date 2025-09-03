# ClockClock 24 - Analog Clock Module Animation

![ClockClock 24](https://img.shields.io/badge/ClockClock-24-blue) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) ![Cursor AI](https://img.shields.io/badge/Made%20with-Cursor%20AI-00D4FF?logo=cursor&logoColor=white)

A web implementation of the YouTube-style ClockClock 24, featuring an artistic clock animation where 24 analog clock modules combine to display digital time. Built with Cursor AI for modern web development.

## ✨ Features

- **24 Clock Modules**: 4 digits × 6 clocks each (3×2 grid)
- **Real-time Display**: Aligns to current time every minute with 10-second transition buffer
- **Smooth Animation**: Elegant 10-second hand movement transitions with cubic-bezier easing
- **Special States**: Happy/Neutral/Midnight mode support
- **SVG-based Hands**: Dynamic SVG path generation for precise clock hands
- **Responsive Design**: Auto-adapts to various screen sizes
- **Pure Web Technologies**: HTML/CSS/JavaScript only, no external dependencies

## 🎮 Interactions

### Keyboard Shortcuts
- **H Key**: Happy state (22:30 - 7:30)
- **N Key**: Neutral state (7:30 - 7:30)
- **Y Key**: Midnight state (24:00 display)

### Mouse Controls
- **Clock Area Click**: Fullscreen toggle with text hiding

## 🚀 Getting Started

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/clock-clock-24.git

# Navigate to project directory
cd clock-clock-24
```

### Running
```bash
# Start local server (Python 3)
python3 -m http.server 8000

# Or using Node.js
npx http-server

# Open in browser
open http://localhost:8000
```

## 📁 Project Structure

```
clock-clock-24/
├── index.html          # Main HTML file (minimal structure)
├── style.css           # Complete stylesheet with animations
├── script.js           # JavaScript logic with angle tables
└── README.md           # Project documentation
```

## 🎨 Design Features

### Visual Style
- **Background**: Clean white background (#fff)
- **Clock Panel**: Black matte texture (#000) with subtle overlay
- **Clock Circles**: Dark gray (#1a1a1a) with matte finish
- **Hands**: Thick white SVG hands (12px width) with glow effects
- **Animation**: Smooth 10-second transitions with cubic-bezier(0.4, 0.0, 0.2, 1)

### Technical Implementation
- **SVG Generation**: Dynamic SVG path creation for clock hands
- **Angle Tables**: Precise hour/minute angle mapping for each digit (0-9)
- **CSS Variables**: Custom properties for hand positioning
- **Transform Origin**: 50% 50% for smooth rotation animations

## ⚙️ Tech Stack

- **HTML5**: 
  - Semantic markup with minimal structure
  - Dark color scheme meta tag
  - Responsive viewport configuration
- **CSS3**: 
  - CSS Grid layout for digit arrangement
  - CSS custom properties for animations
  - Transform animations with cubic-bezier easing
  - Box-shadow 3D effects and hover states
  - Fullscreen mode support
- **JavaScript (ES6+)**:
  - Dynamic SVG DOM generation
  - Real-time time synchronization with 10-second buffer
  - Angle calculation functions (hourToDegrees, minuteToDegrees)
  - Special state management (Happy/Neutral/Midnight)

## 🔧 Customization

### Adjust Clock Hand Speed
```css
.clock-smallHand,
.clock-largeHand {
    transition: transform 10s cubic-bezier(0.4, 0.0, 0.2, 1);
    /* Change duration value to adjust speed */
}
```

### Change Color Theme
```css
:root {
    --primary-bg: #fff;        /* Background color */
    --clock-bg: #1a1a1a;       /* Clock background */
    --hand-color: #fff;        /* Hand color */
    --text-color: #333;        /* Text color */
}
```

### Modify Clock Size
```css
.clock {
    width: 70px;   /* Clock size */
    height: 70px;
}
```

### Adjust Hand Thickness
```css
.clock-smallHand,
.clock-largeHand {
    width: 12px;   /* Hand thickness */
}
```

## 🌟 Use Cases

- **Wallpaper Engine**: Dynamic desktop wallpaper
- **Chrome New Tab Extension**: New tab page
- **Digital Signage**: Public display systems
- **Artistic Websites**: Portfolio elements
- **Educational**: Time concept visualization
- **Screen Savers**: Elegant time display

## 📱 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is released into the **Public Domain**. You are free to use, modify, distribute, and even sell this code without any restrictions. No attribution is required, though it's always appreciated.

**What this means:**
- ✅ Use in commercial projects
- ✅ Modify and redistribute
- ✅ Include in proprietary software
- ✅ No license fees or restrictions
- ✅ No warranty or liability

## 🙏 Acknowledgments

- **Humans since 1982**: Original ClockClock 24 design inspiration
- **manu.ninja**: Angle table logic and implementation reference
- **YouTube**: Style and interaction reference
- **Cursor AI**: Development assistance and code generation
- **Web Standards**: Pure web technology implementation


⭐ If this project helped you, please give it a star!

**Made with ❤️ and Cursor AI**
