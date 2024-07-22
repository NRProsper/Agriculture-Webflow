import Button from "./Button.jsx";

const Hero = () => {
    return (
        <section id="hero" className="h-[768px]">
            <div className="container mx-auto px-16 h-full">
                <div className="flex items-center justify-start h-full w-full">
                    <div className="content">
                        <h3 className="font-tail text-lightGreen text-[36px]">100% Natural Food</h3>
                        <h1 className="text-darkGreen font-extrabold text-[70px] leading-[82.03px] mb-[23px]">Choose the best <br/> healthier way <br/> of life</h1>
                        <Button title={"Explore Now"} hasIcon={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;