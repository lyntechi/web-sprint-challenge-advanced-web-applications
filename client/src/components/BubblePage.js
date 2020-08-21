import React, { useState, useEffect } from "react";
import axiosWithAuth from './axiosWithAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
  axiosWithAuth().get('/api/colors')
  .then(response => {
    setColorList(response.data)
    console.log('response for colors', response)
  })
  .catch(error =>console.log('error happend with get request to api', error))
  },[])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
