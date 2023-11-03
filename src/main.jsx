import { ApiProvider } from '@reduxjs/toolkit/query/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { apiSlice } from './api/apiSlice'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApiProvider api={apiSlice}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApiProvider>
)
