import product1 from "../../../assets/img/products/prod1.png";
import product2 from "../../../assets/img/products/prod2.png";
import product3 from "../../../assets/img/products/prod3.png";
import product4 from "../../../assets/img/products/prod4.png";
import product5 from "../../../assets/img/products/prod5.png";
import product6 from "../../../assets/img/products/prod6.png";
import product7 from "../../../assets/img/products/prod7.png";
import product8 from "../../../assets/img/products/prod8.png";
import Container from "../../../components/ui/Container.jsx";
import ProductCard from "../../../components/ProductCard.jsx";
import Dialog from "../../../components/ui/Dialog.jsx";
import {useEffect, useState} from "react";

import {AnimatePresence} from "framer-motion";

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
    const [isOpen, setIsOpen] = useState(false)
    const handleClose = () => setIsOpen(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);
    return (
        <>

            <AnimatePresence
                initial={false}
            >
                {
                    isOpen &&
                    <Dialog handleClose={handleClose}>
                        <Dialog.Title>Add Products</Dialog.Title>
                        <Dialog.Body>This is the body</Dialog.Body>
                    </Dialog>
                }
            </AnimatePresence>

            <Container>
                <div className="flex items-center justify-between border-b border-gray pb-6">
                    <h3 className="font-bold text-[50px] text-darkGreen">All Products</h3>
                    <div>
                        <button
                            className="rounded-[16px] px-[39px] py-[20px] items-center bg-yellow text-white"
                            onClick={() => setIsOpen(true)}
                        >Add Product</button>
                    </div>
                </div>
                <div className="products mt-20  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {
                        products.map((prod, idx) => (
                            <ProductCard key={idx} product={prod} />
                        ))
                    }
                </div>
            </Container>
        </>
    )
}


export default Products;