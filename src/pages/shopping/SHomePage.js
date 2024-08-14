import React, { useState, useEffect } from 'react'
import Header from '../../sections/Header';
import Footer from '../../sections/Footer';
import { getProducts } from '../../services/products.service';
import ProductsCategory from '../../components/Products/ProductsCategory';


const SHomePage = () => {

    const [products, setProducts] = useState([]);

    const [categories, setCategories] = useState([]);

    const updateProducts = () => {
        getProducts()
        .then(res => {
            setProducts(res?.data);
        }).catch(err => {
            console.error(err);
        })
    }

    useEffect(() => {
        updateProducts();
    }, []);

    return (
        <section>
            <section>
                <Header/>
            </section>

            <section className='content'>
                <h1>Shopping home page</h1>
                <ProductsCategory categoryName={"Computers"} products={products}/>
            </section>

            <section><Footer/></section>
        </section>
    )
}

export default SHomePage;
