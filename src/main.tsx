import React from 'react'
// import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { Providers } from './provider.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <ChakraProvider> */}
    <Providers>
    <Router>
      <App />
    </Router>
    </Providers>
    {/* </ChakraProvider> */}
  </React.StrictMode>
)