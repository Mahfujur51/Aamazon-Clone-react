import React from 'react'
import '../Home/Home.css'
import Product from '../Product/Product'

const Home = () => {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3740_.jpg" alt="" />
                <div className='home_row'>
                    <Product title="The  Lean startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg" rating={5} />
                    {/* <Product title="" /> */}

                    {/* Product  */}
                </div>
                <div className='home_row'>
                    {/* <Product />
                    <Product />
                    <Product /> */}
                </div>
                <div className='home_row'>
                    {/* <Product /> */}
                </div>
            </div>
        </div>
    )
}

export default Home