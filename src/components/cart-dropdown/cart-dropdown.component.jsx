import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  console.log(cartItems);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <p>Cart is empty</p>
        )}
      </div>
      <Button
        disabled={!(cartItems.length > 0)}
        type="button"
        onClick={() => {
          navigate("checkout");
        }}
      >
        go to checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
