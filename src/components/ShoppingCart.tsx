import { Offcanvas , Stack} from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import {CartItem} from "./CartItem"
import { StoreItem } from "./StoreItem";
import StoreItems from "../data/items.json"

type ShoppingCartProps = { 
    isOpen: boolean;
}

export function ShoppingCart({isOpen} : ShoppingCartProps) {
    const {closeCart,cartItems} = useShoppingCart()
  return (
    <Offcanvas show={isOpen} placement='end' onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                
                {cartItems.map(item=>(
               < CartItem key={item.id} {...item}/>
                ))}
                <div className="ms-auto fw-bold fs-5">
                  Total {formatCurrency(cartItems.reduce((total,CartItem) => {const item = StoreItems.find(i => i.id === CartItem.id)
                  return total+ (item?.Price || 0) * CartItem.quantity
                  },0))}

                </div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
  );
}
