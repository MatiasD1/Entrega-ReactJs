import cart from './assets/cart.png'
import './Cartwidget.css'

const CartWidget = () => {

    return (
        <div>
            <img src={cart} alt="cart-widget" className="cart-imagen"/>
            0
        </div>
    )
}

export default CartWidget//acá LE PUSE ; y anduvo WTF