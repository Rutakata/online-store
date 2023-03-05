import { Routes, Route, Navigate } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import Authorization from "./components/Authorization/Authorization";
import Registration from "./components/Registration/Registration";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import style from "./App.module.css";
import Footer from "./components/Footer/Footer";
import ClothesDetailsContainer from "./components/ClothesDetails/ClothesDetailsContainer";
import ClothesCategoryContainer from "./components/Category/ClothesCategoryContainer";
import CartContainer from "./components/Cart/CartContainer";

function App() {
  return (
    <div className={style.app}>
      <AuthProvider>
        <Header />
        <div className={style.container}>
          <Routes>
            <Route exact path="/" element={<Navigate to={"/home"} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<Authorization />} />
            <Route path="/signup" element={<Registration />} />
            <Route
              path="/category/:type"
              element={<ClothesCategoryContainer />}
            />
            <Route path="/product/:id" element={<ClothesDetailsContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
