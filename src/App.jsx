import { AvocadoSales } from "./components/AvocadoSales";
import { useState, useEffect } from "react";
import avocado from "../src/assets/avocado2.png";
import { Hero } from "./components/Hero";
function App() {
  return (
    <>
      <Hero />
      <AvocadoSales />
    </>
  );
}

export default App;
