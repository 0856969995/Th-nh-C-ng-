import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import 'katex/dist/katex.min.css';
import './index.css';
import { testConnection } from './services/firebase';

// Verify Firestore connection on boot per Firebase skill guidelines
testConnection().catch((err) => {
  console.warn('Initial Firestore connection check completed:', err);
});

createRoot(document.getElementById('root')!).render(<App />);
