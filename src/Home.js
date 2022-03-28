import React from 'react'
import "./Home.css"
import Product from './Product'
export default function Home() {
  return (
    <div className='home'>
<div className='home__container'>
<img className='home__image' src='https://m.media-amazon.com/images/I/61qTBmzQ1QL._SX3000_.jpg'alt=''/>
</div>
<div className='home__row'>
<Product
 id="1211"
 title="CASIO G-Shock GBD-200-2JF [20 ATM Water Resistant G-Squad] Watch Shipped from Japan"
 price={197.75}
 rating={4}
 image="https://m.media-amazon.com/images/I/71fsGFbNMpS._AC_UL320_.jpg"
/>
<Product 
id="1212"
title="ALVISH Men's Button Down Short Sleeve Casual Regular Fit Pocket Cotton Shirt"
price={30}
rating={5}
image="https://m.media-amazon.com/images/I/61qIecS3B3L._AC_SX569._SX._UX._SY._UY_.jpg"
/>

</div>
<div className='home__row'>
<Product
 id="1222"
 title="LEGO NASA Space Shuttle Discovery 10283 Build and Display Model for Adults, New 2021 (2,354 Pieces)"
 price={199}
 rating={5}
 image="https://m.media-amazon.com/images/I/71L+veirUzS._AC_UL320_.jpg"/>
<Product
id="1223"
title="BotaBay Commercial Vegetable Fruit Chopper 1/4″&3/8″ Blade Heavy Duty Professional Food Dicer Kattex French Fry Cutter Onion Slicer"
price={123}
rating={5}
image="https://m.media-amazon.com/images/I/71AvtelIGyL._AC_UL320_.jpg"/>
<Product
id="1224"
title="Bissell Cleanview Bagless Vacuum Cleaner, 2486, Orange"
price={245}
rating={5}
image="https://m.media-amazon.com/images/I/71GZiLcM0bL._AC_SL1500_.jpg"/>

</div>
<div className='home__row'>
<Product
id="1233"
title="TP-Link AC750 Wireless Portable Nano Travel Router(TL-WR902AC) - Support Multiple Modes, WiFi Router/Hotspot/Bridge/Range Extender/Access Point/Client Modes, Dual Band WiFi, 1 USB 2.0 Port"
price={89}
rating={5}
image="https://m.media-amazon.com/images/I/61rMfRcP9qL._AC_SL1500_.jpg"/>
<Product
id="1234"
title="Beleev Skateboards for Beginners, 31 Inch Complete Skateboard for Kids Teens Adults, 7 Layer Canadian Maple Double Kick Deck Concave Cruiser Trick Skateboard"
price={45}
rating={5}
image="https://m.media-amazon.com/images/I/71ntOK1idXL._AC_SL1500_.jpg"/>
<Product
id="1235"
title="New Apple iPhone SE (64GB, (Product) RED)"
price={339}
rating={5}
image="https://m.media-amazon.com/images/I/7119ZwnSokL._AC_SL1500_.jpg"/>

</div>
<div className='home__row'>
<Product
id="1244"
title="Speedrid Electric Bike 48V 500W Fat Tire Electric Bike Snow Bike"
price={925}
rating={5}
image="https://m.media-amazon.com/images/I/71P7WWA4qiL._AC_SX679_.jpg"/>

</div>
    </div>
  )
}
