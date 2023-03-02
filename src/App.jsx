import { Routes, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthContext';
import Authorization from './components/Authorization/Authorization';
import Registration from './components/Registration/Registration';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <AuthProvider>
      <Routes> 
        <Route exact path='/' element={<div>Home page</div>} />
        <Route path='/signin' element={<Authorization />} /> 
        <Route path='/signup' element={<Registration />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
