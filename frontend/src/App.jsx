import { Box, useColorModeValue } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"

import CreatePage from './pages/CreatePage'
import HomePage from './pages/HomePage'

import Navbar from './components/Navbar'
// import { useProductStore } from "./store/product" //zustand

function App() {
  // const { products} = useProductStore()  //zustand

  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  )
}

export default App