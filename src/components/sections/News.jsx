import Button from "../Button.jsx";
import NewsCard from "./NewsCard.jsx";

import blog1 from "../../assets/img/news/news1.png";
import blog2 from "../../assets/img/news/new2.png";


const blogs = [
    {
        img: blog1,
        title: "The Benefits of Vitamin D & How to Get It",
        description: "Simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum"
    },
    {
        img: blog2,
        title: "Our Favourite Summertime Tommeto",
        description: "Simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum"
    }
]

const News = () => {
    return(
        <section id="news" className="my-[150px]">
            <div className="container mx-auto px-[32px] xl:px-16 h-full">
                <div className="content">
                    <div className="mb-[100px] xl:mb-[50px] flex-col xl:flex-row flex xl:items-end items-start justify-between">
                        <div>
                            <h3 className="text-lightGreen text-[36px] font-tail">News</h3>
                            <h1 className="font-bold text-[50px] text-darkGreen">Discover weekly content about <br /> organic food, & more</h1>
                        </div>
                        <Button hasIcon={true}>
                            Discover More
                        </Button>
                    </div>
                    <div className="flex flex-col space-y-12 lg:space-y-0 lg:flex-row justify-between lg:gap-2">
                        {
                            blogs.map((blog, idx) => (
                                <NewsCard key={idx} blog={blog} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News;