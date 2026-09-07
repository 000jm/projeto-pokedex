import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Rodar from './index'

import './assets/css/global.css'
import './assets/css/pokedex.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Rodar />
    </StrictMode>
)