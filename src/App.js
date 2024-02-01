import "./App.css";
import Hero from "./ccomponent/hero.component";
import NavBar from "./ccomponent/navbar.component";
import Projects from "./ccomponent/projects.component";
import Services from "./ccomponent/services.component";
import { useState } from "react";
import Footer from "./ccomponent/footer.component";
import NativeProject from "./ccomponent/NativeProject";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  console.log(darkMode);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto ">
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero />
          <Services />
          <h2 className="font-bold text-[#A1B57D] text-2xl text-center py-5">
            Projects
          </h2>
          
          <Projects />
          <div className="mt-10">
            <NativeProject />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
