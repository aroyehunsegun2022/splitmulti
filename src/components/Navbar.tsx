import { Button, Container, Nav, Navbar as NavBars } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import cart from "../assets/shopping-cart.png";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <div className="bg-grey shadow-sm mb-3">
      <NavBars sticky="top">
        <Container>
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/store" as={NavLink}>
              Store
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
              About
            </Nav.Link>
          </Nav>
          {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            variant="outline-primary"
            className="rounded-circle"
            style={{ position: "relative" }}
          >
            {" "}
            <img src={cart} style={{ width: "3rem", height: "3rem" }}></img>
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%,25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button> )}
        </Container>
      </NavBars>
    </div>
  );
}
