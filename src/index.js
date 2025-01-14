import React from 'react';
import ReactDOM from 'react-dom/client'; // تغییر به 'react-dom/client'

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
// import 'swiper/swiper-bundle.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

// پیدا کردن عنصر ریشه
const root = ReactDOM.createRoot(document.getElementById('root'));

// استفاده از createRoot برای رندر کردن اپلیکیشن
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
