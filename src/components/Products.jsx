import Product from "./Product";


function Products(props) {

    let products = props.products

    return(
        <main className="block col-2">
            <h2>Products</h2>
            <hr></hr>
            <div className="row">
                {products.map((eachProduct) => (
                        <Product product={eachProduct} onAdd={props.onAdd}></Product>
                ))}
                 
            </div>
        </main>
    )
}

export default Products;