import React from "react";
import WhoWeAre from "./Components/AboutUs/whoWeAre";
import NavigationBar from "./Components/NavBar/navigationBar";
import Footer from "./Components/Footer/footer";
import WhatWeDo from "./Components/WhatWeDo/whatwedo";
import Carou from "./Components/Carousel/carousel";

function App () {
  return (
    <div>
      <div><NavigationBar/></div>
      <div><Carou/></div>
      <div ><WhoWeAre/></div>
      <div><WhatWeDo/></div>
      <div><Footer/></div>
    </div>
    
  )
}
export default App;