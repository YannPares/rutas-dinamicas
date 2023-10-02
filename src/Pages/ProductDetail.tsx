import { useParams } from "react-router-dom";
import Home from "./Home"
import products from "../database/db.json"
// console.log(products.products);
const ProductDetail = () => {
  const productsArray = products.products
  const {id: productID} = useParams();
  const getProductsDetails = productsArray.find(({id}) => id === productID);
  console.log(getProductsDetails)
  const {name, price, stock, id} = getProductsDetails;
  return (
    <>
    <div>esto es el producto con ID: {id}</div>
    <p>{name}</p>
    <p>{price}</p>
    <p>{stock}</p>
    
    
    </>
  )

  
}

export default ProductDetail