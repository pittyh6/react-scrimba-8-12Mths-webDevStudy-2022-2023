import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Counter from './counter'
import Ternary from './ternary'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Counter />
    <Ternary />
  </React.StrictMode>,
)
