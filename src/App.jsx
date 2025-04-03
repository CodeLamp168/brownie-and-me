"use client"

import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Order from "./pages/Order"

function App() {
  const [currentPage, setCurrentPage] = useState("home")

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === "menu" && <Menu setCurrentPage={setCurrentPage} />}
      {currentPage === "order" && <Order />}
      <Footer />
    </div>
  )
}

export default App


