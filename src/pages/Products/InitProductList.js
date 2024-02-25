import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { toast } from "react-toastify";
import { useFilter } from "../../context";
import { ProductList } from "./ProductList";
import { getProductList } from "../../services";

export const InitProductList = () => {
  useTitle("Explore eBooks Collection");
  const{products,initProductList} =useFilter();
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q");
 
 useEffect(() => {

      async function fetchProducts(){
        try{
          const data = await getProductList(searchTerm);
          initProductList(data);
        } catch(error){
          toast.error(error.message, {closeButton: true, position: "bottom-center" });
        }
      }
      fetchProducts();
    }, [searchTerm]);//eslint-disable-line  

return (

<ProductList products = {products}/>

)
    
}