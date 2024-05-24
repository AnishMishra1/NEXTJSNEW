"use client";

import { useState, useEffect } from "react";

export default function Productlist() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data); // Logging the data received from the API
        setProduct(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
	<div>
		<h1>welcome to product</h1>
		{
			product.map((item)=>(
				<h1 key={item.id}> {item.name}</h1>
			))
		}
		
	</div>
  );
}
