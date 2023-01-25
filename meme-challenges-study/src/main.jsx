import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import StateObject from './StateObject'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <StateObject />
  </React.StrictMode>,
)
