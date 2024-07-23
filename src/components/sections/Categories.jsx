import CategoryCard from "./CategoryCard.jsx";
import cat1 from "../../assets/img/categories/cat1.png"
import cat2 from "../../assets/img/categories/cat2.png"
import cat3 from "../../assets/img/categories/cat3.png"

const categories = [
    {
        name: "Organic Juice",
        img: cat1
    },
    {
        name: "Organic Food",
        img: cat2
    },
    {
        name: "Nuts Cookies",
        img: cat3
    }
]

const Categories = () => {
    return(
        <section className="py-[150px] bg-veryLightGray">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-[30px] xl:gap-[42px]">
                {
                    categories.map((category, idx) => (
                        <CategoryCard key={idx} category={category} />
                    ))
                }
            </div>
        </section>
    )
}

export default Categories;