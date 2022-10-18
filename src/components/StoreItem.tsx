import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";


type StoreItemsProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export const StoreItem = ({ id, name, price, imgUrl }: StoreItemsProps) => {
  
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
  const quantity = getItemQuantity(id);


  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
          <div className="mt-auto">
            {quantity === 0 ? ( <Button className="w-100" onClick={()=> increaseCartQuantity(id)}>+Adicionar no carrinho</Button>) : 
            (<div className="d-flex align-items-center flex-column" 
            style={{gap: ".5rem"}}
            >
              <div className="d-flex align-items-center justify-content-center"
              style={{gap: ".5rem"}}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                <span className="fs-3"> {quantity} </span>
                Carrinho
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button onClick={() => removeFromCart(id)} variant="danger" size="sm" >Remover</Button>
            </div>)}
          </div>
      </Card.Body>
    </Card>
  );
};
