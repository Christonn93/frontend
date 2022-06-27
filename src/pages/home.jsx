// Importing React
import React from "react";

// Importing components
import Card from "../components/utils/card";

// Displaying content
function Home() {
 return (
  <div className="content-container home">
   <div className="container">
    <h1>Home</h1>

    {/* Displaying cards */}
    <Card />
   </div>
  </div>
 );
}

export default Home;
