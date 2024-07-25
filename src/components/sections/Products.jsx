import ProductCard from "../ProductCard.jsx";
import product1 from "../../assets/img/products/prod1.png";
import product2 from "../../assets/img/products/prod2.png";
import product3 from "../../assets/img/products/prod3.png";
import product4 from "../../assets/img/products/prod4.png";
import product5 from "../../assets/img/products/prod5.png";
import product6 from "../../assets/img/products/prod6.png";
import product7 from "../../assets/img/products/prod7.png";
import product8 from "../../assets/img/products/prod8.png";
import Button from "../Button.jsx";
const products = [
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
    {
        image: product5,
        name: "mung bean",
        price: 11,
        category: "health"
    },
    {
        image: product6,
        name: "brown hazelnut",
        price: 12,
        category: "nuts"
    },
    {
        image: product7,
        name: "eggs",
        price: 17,
        category: "fresh"
    },
    {
        image: product8,
        name: "Zelco Suji Elaichi Rusk",
        price: 15,
        category: "fresh"
    }
]

const Products = () => {
    return (
        <section id="prods" className="my-24">
            <div className="container mx-auto px-4 xl:px-8 h-full">
                <div className="prod-content">
                    <h3 className="text-lightGreen text-2xl font-tail text-center">Categories</h3>
                    <h1 className="font-bold text-4xl text-darkGreen text-center">Our Products</h1>
                    <div className="products mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {products.map((product, idx) => (
                            <ProductCard key={idx} product={product}/>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Button hasIcon={true} className="bg-darkGreen">
                            Load More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products;