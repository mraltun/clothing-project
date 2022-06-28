import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import SingIn from "./routes/sign-in/sign-in";

// Temporary Shop component
const Shop = () => {
  return (
    <div>
      <h1>Welcome to the shop</h1>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='sign-in' element={<SingIn />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
