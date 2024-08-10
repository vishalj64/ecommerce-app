

function Product(props) {

    return(
        <div className="product-style">
            <img className="small" src={props.product.image}></img>
            <h3>{props.product.name}</h3>
            <div>&#8377;{props.product.price}</div>
            <div>
                <button className="add-to-cart" onClick={() => props.onAdd(props.product)}>Add To Cart</button>
            </div>

        </div>
    )
}

export default Product;