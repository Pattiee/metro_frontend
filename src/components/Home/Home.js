import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/products.service";
import { Products } from "../Products/Products";
import './home.css';
import { getUserRoles } from "../utils/AuthUtils";
import { Banner } from "../HorizontalBanner/Banner";

const images = require.context('../../assets', true);

const Home = () => {

  const i = images
  
  const imageList = i.keys().map(image => images(image));

  // const[images, setImages] = useState([]);

  useEffect(() => {
    
  }, []);


  return (
    <div className="home-page">
      <Banner images={imageList} speed={50000}/>
      <div>
        <Products/>
        <Products/>
        <Products/>
      </div>
    </div>
  )
}

export default Home;
