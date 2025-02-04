// import { useState } from 'react'
import './App.css'
import Header from './Reduxcomp/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListing from './Reduxcomp/ProductListing'
import ProductDetail from './Reduxcomp/ProductDetail'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact Component={ProductListing} />
            <Route path="/product/:productId" exact Component={ProductDetail} />
            <Route>404 Not Found!</Route>

          </Routes>
        </Router>


      </div>
    </>
  )
}

export default App
