import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HeroAnimation } from "./components/HeroAnimation"
import UILauncherPage from "./ui/page"
import "../styles/globals.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroAnimation />} />
        <Route path="/ui" element={<UILauncherPage />} />
      </Routes>
    </BrowserRouter>
  )
}
