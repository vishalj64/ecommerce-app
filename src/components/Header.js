

function Header(props) {
    return(
        <header className="block row center">
            <div>
                <a href="#">Shopping Cart</a>
            </div>
            <div>
                <a href="#">Cart{' '}
                    {props.count ? (<button className="badge">{props.count}</button>) : ''}
                    </a>{' '}
                <a href="#">  Welcome</a>
            </div>
        </header>
    )
}

export default Header