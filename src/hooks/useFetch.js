import { useState, useEffect } from "react";

export const useFetch = (apiPath) => {
    const [data, setData] = useState([]);
      
    useEffect(() => {
        async function fetchProducts(){
          const response = await fetch(apiPath);
          const result = await response.json();
          setData(result);
       }
        fetchProducts();
      }, [apiPath])

      return { data }
}