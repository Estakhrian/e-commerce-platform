import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartProvider } from './Context/CartContext.jsx';
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <Toaster
      position='bottom-right' 
      toastOptions={{
        style: {
          background:"#1f2937",
          color: "#fff",
          borderRadius: "12px"
        }
      }}/>
      <App />
    </CartProvider>
  </StrictMode>,
)
