import Hero from "../components/sections/Hero.jsx";
import Advertisement from "../components/sections/Advertisement.jsx";
import About from "../components/sections/About.jsx";
import Products from "../components/sections/Products.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";


const Home = () => {
    return (
        <>
            <Hero />
            <Advertisement />
            <About />
            <Products />
            <Testimonials />
        </>
    );
}

export default Home;