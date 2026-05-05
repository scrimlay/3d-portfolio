# 3D Interactive Portfolio

An immersive 3D portfolio website built with React, Three.js, and React Three Fiber. Navigate through different portfolio sections in 3D space with smooth animations and interactive elements.

## 🚀 Features

- **Immersive 3D Navigation**: Explore portfolio sections in a 3D environment
- **Interactive 3D Objects**: Click and interact with 3D elements
- **Smooth Transitions**: Fluid camera movements between sections
- **Keyboard Navigation**: Use arrow keys to navigate between rooms
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI Overlay**: Accessible navigation with glassmorphism effects
- **Real-time 3D Rendering**: Powered by Three.js and React Three Fiber

## 🛠️ Tech Stack

- **React 18**: UI framework
- **Three.js**: 3D rendering engine
- **React Three Fiber**: React renderer for Three.js
- **React Three Drei**: Useful helpers for React Three Fiber
- **Framer Motion**: Smooth UI animations
- **React Scripts**: Build tooling

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/scrimlay/3d-portfolio.git
cd 3d-portfolio

# Install dependencies
npm install --legacy-peer-deps

# Start the development server
npm start
```

## 🎮 Usage

### Navigation

**Mouse/Touch:**
- **Drag** to rotate the camera around the scene
- **Scroll** to zoom in/out
- **Click** the navigation buttons on the left to change rooms

**Keyboard:**
- **Arrow Keys** (↑↓←→): Navigate between portfolio sections
- **Home**: Go to the first section (Welcome)
- **End**: Go to the last section (Contact)

### Portfolio Sections

1. **Welcome**: Introduction and overview
2. **Projects**: Showcase of development projects
3. **Skills**: Technical expertise visualization
4. **Contact**: Get in touch information

## 🏗️ Project Structure

```
3d-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── App.js              # Main application with keyboard navigation
│   ├── App.css             # Global styles
│   ├── Scene.js            # 3D scene container
│   ├── Scene.css           # Scene-specific styles
│   ├── PortfolioRoom.js    # Individual 3D room components
│   ├── NavigationOverlay.js # UI navigation component
│   ├── NavigationOverlay.css # Navigation styles
│   └── index.js            # React entry point
├── package.json
└── README.md
```

## 🎨 Customization

### Adding New Portfolio Sections

1. **Add room definition** in `Scene.js`:
```javascript
const rooms = [
  // ... existing rooms
  { id: 4, name: 'New Section', color: '#FF5733', position: [60, 0, 0] },
];
```

2. **Add room content** in `PortfolioRoom.js`:
```javascript
const roomContent = {
  // ... existing rooms
  4: (
    <>
      <Text position={[0, 3, 0]} fontSize={1} color="white">
        New Section
      </Text>
      {/* Add your 3D content here */}
    </>
  ),
};
```

3. **Update total rooms count** in `App.js`:
```javascript
const totalRooms = 5; // Update this number
```

### Modifying Colors and Styles

- **Room colors**: Modify the `color` property in room definitions
- **UI colors**: Update CSS variables in `NavigationOverlay.css`
- **3D materials**: Adjust material properties in `PortfolioRoom.js`

## 🚢 Deployment

### Deploy to GitHub Pages

```bash
# Install gh-pages if not already installed
npm install gh-pages --save-dev

# Add homepage to package.json
"homepage": "https://scrimlay.github.io/3d-portfolio",

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Deploy to Netlify/Vercel

1. Push the repository to GitHub
2. Import the project in Netlify/Vercel
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`

## 🔧 Development

```bash
# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build

# Eject (one-way operation)
npm run eject
```

## 🎯 Key Features Explained

### 3D Scene Management
- **Canvas**: Main 3D rendering context
- **Camera**: Perspective camera with OrbitControls
- **Lighting**: Ambient, directional, and point lights
- **Environment**: City environment preset for realistic reflections

### Room Transitions
- Smooth opacity transitions between rooms
- Floating animation for active room
- Position-based layout for spatial navigation

### UI Overlay
- Glassmorphism design with backdrop blur
- Responsive navigation buttons
- Keyboard shortcuts support
- Animated transitions with Framer Motion

## 🐛 Troubleshooting

### Common Issues

**Port 3000 already in use:**
```bash
PORT=3001 npm start
```

**Dependency conflicts:**
```bash
npm install --legacy-peer-deps
```

**Build errors:**
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

## 📝 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.

## 🌟 Acknowledgments

- Three.js community for excellent 3D library
- React Three Fiber for React integration
- Framer Motion for smooth animations

## 📧 Contact

For questions or collaboration opportunities, please reach out through the contact section in the portfolio!

---

**Built with ❤️ using React, Three.js, and modern web technologies**
