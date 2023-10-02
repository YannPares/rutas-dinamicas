import { createContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Checkout } from "./Checkout"



// const dataContext = createContext();

// const dataProvider = () => {
//   return ( 
//     dataContext.Provider()
//   )
// } 


export const Home = () => {

  const [products, setproducts] = useState([])
  console.log(products)
  useEffect(() => {
    const url = 'http://localhost:3000/products'
    const getProducts = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setproducts(data)
    }
    getProducts();

  }, [])



  return (

    <>

      <div>
        {products && products.map(({ id, name, price, stock }) => {

          return (
            <>
              <Link to={`${id}`} key={id}>
                <div>{name}</div>
              </Link>
              <ul>
                <li>{price}</li>
                <li>{stock}</li>
              </ul>
              <hr />
            </>
          )
        })}
      </div>
    </>
  )
}

export default Home
