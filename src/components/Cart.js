

function Cart(props) {

    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((sum, eachItem) => sum + (eachItem.qty * eachItem.price), 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20
    const totalPrice = itemsPrice + taxPrice + shippingPrice


    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart is Empty</div>}
                {cartItems.map((eachItem) => (
                    <div className="row">
                        <div className="col-2">{eachItem.name}</div>
                        <div className="col-2">

                            <button className="remove" onClick={() => onRemove(eachItem)}>-</button>
                            {' '}
                            <button className="add" onClick={() => onAdd(eachItem)}>+</button>
                        </div>

                        <div className="col-2 text-right">{eachItem.qty} * &#8377;{eachItem.price.toFixed(2)}</div>
                    </div>

                ))}
                {cartItems.length !== 0 && (
                    <>
                        <hr></hr>
                        <div className="row">
                            <div className="col-2">Items Price</div>
                            <div className="col-1 text-right">&#8377;{itemsPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2">Tax Price</div>
                            <div className="col-1 text-right">&#8377;{taxPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2">Shipping Price</div>
                            <div className="col-1 text-right">&#8377;{shippingPrice.toFixed(2)}</div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col-2"><strong>Total Price</strong></div>
                            <div className="col-1 text-right">&#8377;{totalPrice.toFixed(2)}</div>
                        </div>
                        <div>
                            <button className="add-to-cart" onClick={() => alert("Implement Checkout")}>Checkout</button>
                        </div>


                    </>
                )}

            </div>
        </aside>
    )

}

export default Cart;