import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const isAuthenticated = false;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
          <div>
              <h1>Advanced Routing Demo</h1>
              <Routes>
                  {/* Profile Page with Nested Routes (Protected Route) */}
                  <Route
                      path="/profile/*"
                      element={
                          <ProtectedRoute isAuthenticated={isAuthenticated}>
                              <Profile />
                          </ProtectedRoute>
                      }
                  />

                  {/* Dynamic Blog Post Page */}
                  <Route path="/blog/:postId" element={<BlogPost />} />

                  {/* Fallback Route */}
                  <Route path="*" element={<Navigate to="/" />} />
              </Routes>
          </div>
        </Router>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
