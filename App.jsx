import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './index.jsx'

import './assets/css/global.css'
import './assets/css/pokedex.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)