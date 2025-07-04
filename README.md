# Jungwoo Shim - Portfolio Website

A modern portfolio website built with **Jekyll** and **React.js**, featuring a single-page application (SPA) interface with smooth navigation and interactive components.

## 🚀 Features

- **React.js Frontend**: Modern, interactive UI components
- **Jekyll Backend**: Static site generation with GitHub Pages support
- **Single Page Application**: Smooth navigation without page reloads
- **Responsive Design**: Mobile-friendly interface
- **Modern UI**: Clean, professional design with animations
- **Project Showcase**: Interactive project filtering and display
- **Experience Timeline**: Professional journey and education display

## 🛠️ Tech Stack

### Frontend

- **React.js 18**: Modern UI components and state management
- **SCSS**: Advanced styling with modern CSS features
- **Webpack**: Module bundling and build process
- **Babel**: JavaScript transpilation

### Backend

- **Jekyll**: Static site generation
- **GitHub Pages**: Hosting and deployment
- **Ruby**: Jekyll runtime environment

## 📦 Installation & Setup

### Prerequisites

1. **Node.js** (v16 or higher)
2. **Ruby** (v2.7 or higher)
3. **Git**

### Step 1: Clone the Repository

```bash
git clone https://github.com/jshim0978/jshim0978.github.io.git
cd jshim0978.github.io
```

### Step 2: Install Node.js Dependencies

```bash
npm install
```

### Step 3: Install Ruby Dependencies

```bash
# Install Bundler if not already installed
gem install bundler

# Install Jekyll and other Ruby gems
bundle install
```

### Step 4: Build React Components

```bash
# Development mode (with watch)
npm run dev

# Production build
npm run build
```

### Step 5: Run Jekyll Server

```bash
# In a new terminal window
bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

### Step 6: Access the Site

Open your browser and navigate to:

- **Local Development**: `http://localhost:4000`
- **Network Access**: `http://your-ip:4000`

## 🏗️ Project Structure

```
jshim0978.github.io/
├── assets/
│   ├── js/
│   │   ├── app.js                 # React app entry point
│   │   ├── bundle.js              # Built React bundle (generated)
│   │   └── components/
│   │       ├── App.jsx            # Main React app component
│   │       ├── Navigation.jsx     # Navigation component
│   │       └── sections/
│   │           ├── Home.jsx       # Home section
│   │           ├── Projects.jsx   # Projects section
│   │           └── Experience.jsx # Experience section
│   ├── main.scss                  # Main stylesheet
│   └── images/                    # Static images
├── _config.yml                    # Jekyll configuration
├── index.md                       # Home page (React container)
├── package.json                   # Node.js dependencies
├── webpack.config.js              # Webpack configuration
└── Gemfile                        # Ruby dependencies
```

## 🔧 Development Workflow

### Making Changes

1. **React Components**: Edit files in `assets/js/components/`
2. **Styles**: Modify `assets/main.scss`
3. **Content**: Update `_config.yml` for site-wide content
4. **Build**: Run `npm run dev` to watch for changes

### Adding New Sections

1. Create a new component in `assets/js/components/sections/`
2. Add it to the navigation in `Navigation.jsx`
3. Import and add it to the App component
4. Add corresponding styles to `main.scss`

### Adding New Projects

Edit the `projects` object in `assets/js/components/sections/Projects.jsx`:

```javascript
const projects = {
  ai: [
    {
      title: "Your Project",
      role: "Your Role",
      technologies: ["Tech1", "Tech2"],
      description: "Project description",
    },
  ],
  // ... other categories
};
```

## 🚀 Deployment

### GitHub Pages (Automatic)

1. Push changes to the `main` branch
2. GitHub Pages will automatically build and deploy
3. Site will be available at `https://jshim0978.github.io`

### Manual Deployment

```bash
# Build React components
npm run build

# Build Jekyll site
bundle exec jekyll build

# Deploy to your hosting provider
```

## 🎨 Customization

### Colors and Theme

Edit the CSS variables in `assets/main.scss`:

```scss
// Primary colors
$primary-color: #007bff;
$secondary-color: #6c757d;
$success-color: #28a745;
$warning-color: #ffc107;
```

### Content Updates

- **Personal Info**: Update `_config.yml`
- **Projects**: Edit the projects array in `Projects.jsx`
- **Experience**: Modify the experience data in `Experience.jsx`

## 🔍 Troubleshooting

### Common Issues

1. **Node.js Commands Not Found**

   - Ensure Node.js is installed and in your PATH
   - Try using WSL (Windows Subsystem for Linux) on Windows

2. **Ruby/Bundler Issues**

   - Install Ruby using a version manager (rbenv, rvm)
   - Use `sudo gem install bundler` if needed

3. **Port Already in Use**

   - Change the port: `bundle exec jekyll serve --port 4001`
   - Kill existing processes: `lsof -ti:4000 | xargs kill -9`

4. **Build Errors**
   - Clear cache: `npm run clean`
   - Reinstall dependencies: `rm -rf node_modules && npm install`

### Development Environment

For the best development experience:

- **Windows**: Use WSL Ubuntu
- **macOS**: Use Homebrew for package management
- **Linux**: Use your distribution's package manager

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]

---

Built with ❤️ using Jekyll and React.js
