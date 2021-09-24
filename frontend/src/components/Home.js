import React, { Fragment, useEffect } from 'react'

import MetaData from './layout/MetaData'
import Product from './product/Product'
import Loader from './layout/Loader'

import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'
import { useAlert } from 'react-alert'

const Home = () => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, products, error, productsCount } = useSelector(state => state.products)

    useEffect(() => {

        if(error) {
            return alert.error(error)
        }

        dispatch(getProducts());

    }, [dispatch, alert, error])

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Buy Best Products'} />

                    <h1 id="products_heading">Latest Products</h1>

                    <section id="products" className="container mt-5">
                        <div className="row">

                            {products && products.map(product => (

                                <Product key={product._id} product={product} />

                            ))}

                        </div>
                    </section>
                </Fragment>
            )}

        </Fragment>
    )
}

export default Home
