import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { AuthProvider } from './context/AuthContext' 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import NewNode from './pages/NewNode'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 6 * 60 * 1000,
    },
  },
})


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider> 
      <QueryClientProvider client= {queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='sign-up' element={<Signup />} />
              <Route path='login' element={<Login />} />
              <Route path='login/activate/:uid/:token/' element={<Login />} />
              <Route path='note/:id' element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
)
