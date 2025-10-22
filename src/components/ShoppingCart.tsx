import { Offcanvas, Stack } from "react-bootstrap";
import storeItems from "../data/items.json";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/currencyFormatter";

// type ShoppingCartProps = {
//   isCartOpen: boolean;
// };
export function ShoppingCart() {
  const { closeCart, isCartOpen, cartItems } = useShoppingCart();

  return (
    <Offcanvas show={isCartOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3} className="d-flex align-items-center">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total Price:{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(
                  (storeItem) => storeItem.id === cartItem.id
                );
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
