import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AuthContext from './store/AuthContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <AuthContext>
      <App />
    </AuthContext>
  </>,
)
