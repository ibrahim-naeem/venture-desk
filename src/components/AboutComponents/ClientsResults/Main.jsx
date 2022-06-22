import { useState } from "react"
import ClientsCard from "./ClientsCard"
import ClientsHeroSection from "./ClientsHeroSection"


const Main = () => {
  const [modal, setModal] = useState(false)
  console.log(modal)
  return (
      <div>
      <ClientsHeroSection setModal={setModal}/>
      <ClientsCard modal={modal} />
      </div>
  )
}

export default Main