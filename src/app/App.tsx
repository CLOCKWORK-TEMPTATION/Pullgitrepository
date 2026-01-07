import { HeroAnimation } from "./components/HeroAnimation"
import "../styles/globals.css"

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-hidden" dir="rtl">
      <HeroAnimation />
    </main>
  )
}
