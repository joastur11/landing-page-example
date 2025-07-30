// crear componentes navbar, hero y footer

import { Navbar } from "./components/Navbar.jsx";

export function App (){
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h2> el texto de abajo de la navbar </h2>
      </main>
    </>
  )
}
