import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom"
import Home from "../Pages/Home"
import { Checkout } from "../Pages/Checkout"
import ProductDetail from "../Pages/ProductDetail"




const RoutesApp = () => {
    return (
        <>
            <BrowserRouter >
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Checkout' element={<Checkout />} />
                    <Route path='/:id' element={<ProductDetail/>} />
                </Routes>
            </BrowserRouter>
        </>

    )
}

export default RoutesApp