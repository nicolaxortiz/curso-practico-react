import React from "react";
import axios from "axios";

const useGetProducts = (category) => {

  let selectedAPI

  if(category === 0) {
    selectedAPI = 'https://api.escuelajs.co/api/v1/products'
  } else {
    selectedAPI = 'https://api.escuelajs.co/api/v1/categories/'+ category + '/products';
  }

  const API = selectedAPI;

  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data.slice(0, 50));

    setTimeout(() => {
        setLoading(false)
    }, 2000)
  }, [category]);

  return {products, loading}

}

export { useGetProducts };
