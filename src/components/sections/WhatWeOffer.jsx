import Button from "../Button.jsx";
import product1 from "../../assets/img/products/prod1.png";
import product2 from "../../assets/img/products/prod2.png";
import product3 from "../../assets/img/products/prod3.png";
import product4 from "../../assets/img/products/prod4.png";
import ProductCard from "../ProductCard.jsx";

const organics = [
    {
        image: product1,
        name: "calabrese broccoli",
        price: 13,
        category: "vegetable"
    },
    {
        image: product2,
        name: "fresh banana fruits",
        price: 14,
        category: "fresh"
    },
    {
        image: product3,
        name: "white nuts",
        price: 14,
        category: "millets"
    },
    {
        image: product4,
        name: "vegan red tomato",
        price: 17,
        category: "vegetable"
    },
]

const WhatWeOffer = () => {
    return(
        <section className="bg-darkGreen py-[120px]">
            <div className="container mx-auto px-[32px] xl:px-16 h-full">
                <div className="content">
                    <div className="mb-[50px] flex-col xl:flex-row flex xl:items-end items-start justify-between">
                        <div>
                            <h3 className="text-lightGreen text-[36px] font-tail">Offer</h3>
                            <h1 className="font-bold text-[50px] text-neutral">We Offer Organic For You</h1>
                        </div>
                        <Button hasIcon={true}>
                            Discover More
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[20px]">
                        {
                            organics.map((product, idx) => (
                                <ProductCard key={idx} product={product} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeOffer;