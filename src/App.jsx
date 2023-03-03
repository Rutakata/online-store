import { Routes, Route, Navigate } from 'react-router-dom';
import AuthProvider from './contexts/AuthContext';
import Authorization from './components/Authorization/Authorization';
import Registration from './components/Registration/Registration';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import style from './App.module.css';
import Footer from './components/Footer/Footer';
import ClothesCategory from './components/Clothes/ClothesCategory';

function App() {
  return <div className={style.app}>
  <AuthProvider>
      <Header />
      <div className={style.container}>
        <Routes> 
          <Route exact path='/' element={<Navigate to={'/home'} />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signin' element={<Authorization />} /> 
          <Route path='/signup' element={<Registration />} />
          <Route path='/category/:type' element={<ClothesCategory />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </AuthProvider>
  </div>;
}

export default App;
