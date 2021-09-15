import React from 'react'
import "./Home.css";
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""></img>
            <div className="home__row">
                <Product
                    id="987654"
                    title=" LLMG74 750 Watt Mixer Grinder with 3 Jars (White and Grey) "
                    price={1899}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71J3zp+QR2L._SX425_.jpg"
                />
                <Product
                    id="987653"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
                    price={450}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51aEhyjQGrL._SX316_BO1,204,203,200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="987652"
                    title="(Renewed) Samsung Galaxy Fit E 2019, Fitness Band, Pedometer, Heart Rate &amp; Sleep Tracker, PMOLED Display, 5ATM Water Resistance, MIL-STD-810G, Bluetooth Active SM-R375 - International Version"
                    price={1899}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/313Z+DioI6L._SY450_.jpg"
                />
                <Product
                    id="987651"
                    title="Echo Dot (4th Gen, 2020 release)| #1 smart speaker brand in India with Alexa (Black)"
                    price={4999}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61KIy6gX-CL._SX569_.jpg"
                />
                <Product
                    id="987650"
                    title=" 2021 Apple iPad&nbsp;Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi + Cellular, 512GB) - Silver (3rd Generation)"
                    price={109490}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/817doxCSq7S._SX679_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="987655"
                    title="OnePlus 163.8 cm (65 inches) U Series 4K LED Smart Android TV 65U1S (Black) (2021 Model)"
                    price={68999.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/41JpykaA98S._AC_SY580_FMwebp_.jpg"
                />
            </div>

        </div>
    )
}

export default Home
