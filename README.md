# Tik-Tak-Toe with React and TypeScript

This project is a simple implementation of Tik-Tak-Toe using React and TypeScript, bundled with Webpack. It serves as a practice project to get familiar with using Webpack to convert TypeScript React files into a static webpage.

## Project Structure

```
README.md
package.json
package-lock.json
src/
  assets/
    favicon.png
  css/
    index.css
  index.html
  index.ts
  js/
    app.tsx
    game.ts
postcss.config.js
tailwind.config.js
tsconfig.json
webpack.config.js
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/cyeganeh01248/ReactTikTakToe.git
   cd ReactTikTakToe
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run develop
```

This will start the Webpack development server and you can access the app in your default web browser at 
[http://localhost:3000/](http://localhost:3000/)

### Building for Production

To build the project for production, run:

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

## Project Files

### `app.tsx

This file contains the main React components for the app.

### `game.ts`

This file contains the logic for the game, including the `Board` class and `makePlay` function.

### `index.ts`

This file initializes the React app and renders it to the DOM.

## Styling

The project uses Tailwind CSS for styling. The configuration is defined in `tailwind.config.js` and additional styles are imported in `index.css`.

## Configuration Files

- `webpack.config.js`: Configuration for Webpack to bundle the project.
- `tailwind.config.js`: Configuration for Tailwind CSS.
- `tsconfig.json`: TypeScript configuration.
- `postcss.config.js`: Configuration for PostCSS with Tailwind CSS.
