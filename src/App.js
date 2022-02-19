import "./App.css";
import { Shopping } from "./ShoppingCart/containers/Shopping";
import { ShoppingProvider } from "./ShoppingCart/contexts/ShoppingProvider";

function App() {
  return (
    <ShoppingProvider>
      <div>
        <h1>Shopping</h1>
        <Shopping />
      </div>
    </ShoppingProvider>
  );
}

export default App;
