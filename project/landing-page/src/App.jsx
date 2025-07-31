// crear componentes navbar, hero y footer

import { Hero } from "./components/Hero.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Properties } from "./components/Properties.jsx";

export function App (){
  return (
    <>
      <Navbar />
      <div className="bg-sky-50 min-h-screen">
        <Hero />
        <Properties />
      </div>
    </>
  )
}
