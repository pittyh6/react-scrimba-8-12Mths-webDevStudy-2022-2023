import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Counter from './counter'
import Ternary from './ternary'
import FlippingState from './flipping-state'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter />
    <FlippingState />
    <App />
    <Ternary />
  </React.StrictMode>,
)
