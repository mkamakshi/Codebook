import { useTitle } from "../../hooks/useTitle";
import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";
import { useCart } from "../../context"

export const CartPage = () => {
const {state} = useCart();
useTitle(`Cart (${state.productList.length})`);

  return (
    <main>       
      { state.productList.length ? <CartList /> : <CartEmpty /> }   
    </main>
  )
}