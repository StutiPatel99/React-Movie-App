import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Find your root DOM element
const container = document.getElementById('root');

// Create a root.
const root = createRoot(container);

// Initial render
root.render(<App />);
