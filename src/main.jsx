import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import global_en from "./translation/en/global.json"
import global_ar from "./translation/ar/global.json"
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import '@fortawesome/fontawesome-free/css/all.min.css';

i18next.init({
  interpolation: {escapeValue: false},
  lng: "ar",
  resources: {
    en: {
      global: global_en
    },
    ar: {
      global: global_ar
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
