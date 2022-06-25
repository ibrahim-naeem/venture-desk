import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About/About";
import WhatWeDo from "./pages/About/WhatWeDo";
import WhatWeBelieve from "./pages/About/WhatWeBelieve";
import OurPeople from "./pages/About/OurPeople";
import ClientsResults from "./pages/About/ClientsResults";
import GlobalAffiliation from "./pages/About/GlobalAffiliation";
import AwardsAndRecognition from "./pages/About/AwardsAndRecognition";

function App() {
  return (
    <BrowserRouter>
      <div className="App ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/what-we-do" element={<WhatWeDo />} />
          <Route path="/about/what-we-believe" element={<WhatWeBelieve />} />
          <Route path="/about/our-people" element={<OurPeople />} />
          <Route path="/about/clients-results" element={<ClientsResults />} />
          <Route
            path="/about/global-affiliation"
            element={<GlobalAffiliation />}
          />
          <Route
            path="/about/awards-and-recognition"
            element={<AwardsAndRecognition />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
