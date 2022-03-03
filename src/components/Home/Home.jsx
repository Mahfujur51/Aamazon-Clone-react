import React from 'react'
import '../Home/Home.css'
import Product from '../Product/Product'

const Home = () => {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3740_.jpg" alt="" />
                <div className='home_row'>
                    <Product id={1} title="Corsair Vengeance Airflow Memory Cooling Fan CMYAF" price={29.99} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg" rating={3} />
                    <Product id={2} title=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestias dolor nihil illum beatae distinctio in autem accusamus exercitationem id!" price={10.9} image="https://m.media-amazon.com/images/I/61DYLoyNRWL._AC_SX679_.jpg"  rating={3}/>

                    {/* Product  */}
                </div>
                <div className='home_row'>
                <Product id={3} title="StarTech.com Deluxe Assortment PC Screw Kit - Screw Nuts and Standoffs - Screw kit - PCSCREWKIT" price={10.9} image="https://m.media-amazon.com/images/I/61DYLoyNRWL._AC_SX679_.jpg"  rating={3}/>
                <Product id={4} title="StarTech.com Expansion Slot Rear Exhaust Cooling Fan with LP4 Connector (FANCASE), Black" price={29.99} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg" rating={5} />
                <Product id={5} title="AMD Ryzen 7 5800X 8-core, 16-Thread Unlocked Desktop Processor" price={10.9} image="https://m.media-amazon.com/images/I/61DYLoyNRWL._AC_SX679_.jpg"  rating={3}/>
                </div>
                <div className='home_row'>
                <Product id={6} title="AMD Ryzen 7 5800X 8-core, 16-Thread Unlocked Desktop Processor AMD Ryzen 7 5800X 8-core, 16-Thread Unlocked Desktop Processor " price={10.9} image="https://m.media-amazon.com/images/I/51DJ91j1TpS._AC_SX679_.jpg"  rating={3}/>
                </div>
            </div>
        </div>
    )
}

export default Home