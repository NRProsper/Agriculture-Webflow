import Hero from "../components/sections/Hero.jsx";
import Advertisement from "../components/sections/Advertisement.jsx";
import About from "../components/sections/About.jsx";
import Products from "../components/sections/Products.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";
import WhatWeOffer from "../components/sections/WhatWeOffer.jsx";
import EcoFriendly from "../components/sections/EcoFriendly.jsx";
import Categories from "../components/sections/Categories.jsx";
import News from "../components/sections/News.jsx";
import Subscribe from "../components/Subscribe.jsx";


const Home = () => {
    return (
        <>
            <Hero />
            <Advertisement />
            <About />
            <Products />
            <Testimonials />
            <WhatWeOffer />
            <EcoFriendly />
            <Categories />
            <News />
            <Subscribe className={"my-[150px]"} />
        </>
    );
}

export default Home;