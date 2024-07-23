
const ProductCard = ({product, className}) => {
    return(
        <div>
            <div className={`top ${className}`}>
                <img src={product.image} alt={product.name+" Image"}/>
                <p className="category">{product.category}</p>
            </div>
            <div className="bottom">
                <h4>{product.name}</h4>
            </div>
        </div>
    )
}

export default ProductCard;