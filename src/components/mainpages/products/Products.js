import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import Loading from '../utils/loading/Loading'

function Products  () {
    const state = useContext(GlobalState)
    const [products, setProducts] = state.productsAPI.products
    console.log(products)
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <>
        <div className="products">
            {
                products.map(product => {
                    return <ProductItem key={product._id} product={product}
                    isAdmin={isAdmin}/>
                })
            } 
        </div>
         <Loading/>
        </>
    )
}

export default Products;