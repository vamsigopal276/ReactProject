import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Blog from './Blog.jsx'
import MovieGrid from './MovieGrid.jsx'
import Light from './Light.jsx'
import CurrentDateTime from './Current.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Blog /> */}
    {/* <MovieGrid/> */}
    {/* <Light/>
    <App/> */}
    <CurrentDateTime/>
  </StrictMode>,
)
