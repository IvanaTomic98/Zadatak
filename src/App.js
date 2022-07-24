import React from "react";
import WhoWeAre from "./Components/AboutUs/whoWeAre";
import NavigationBar from "./Components/NavBar/navigationBar";
import Carousel from "./Components/Carousel/carousel";
import Footer from "./Components/Footer/footer";

function App () {
  return (
    <div>
      <div><NavigationBar/></div>
      <div><Carousel/></div>
      <div ><WhoWeAre/></div>
      <div><Footer/></div>
    </div>
    
  )
}
export default App;