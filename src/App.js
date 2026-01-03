import logo from './logo.svg';
import './App.css';

import { Routes,Route } from 'react-router-dom';

import Acceuil from './components/Acceuil';
import AjouterProduit from './components/AjouterProduit';
import Apropos from './components/Apropos';
import Connexion from './components/Connexion';
import Details from './components/Details';
import Inscription from './components/Inscription';
import Panier from './components/Panier';
import Produits from './components/Produits';

// import Acceuil from './componentsToolkit/Acceuil';
// import AjouterProduit from './componentsToolkit/AjouterProduit';
// import Apropos from './componentsToolkit/Apropos';
// import Connexion from './componentsToolkit/Connexion';
// import Details from './componentsToolkit/Details';
// import Inscription from './componentsToolkit/Inscription';
// import Panier from './componentsToolkit/Panier';
// import Produits from './componentsToolkit/Produits';


function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Connexion/>} />
        <Route path='/Acceuil' element={<Acceuil/>} />
        <Route path='/AjouterProduit' element={<AjouterProduit/>} />
        <Route path='/Apropos' element={<Apropos/>} />
        <Route path='/Connexion' element={<Connexion/>} />
        <Route path='/Details' element={<Details/>} />
        <Route path='/Inscription' element={<Inscription/>} />
        <Route path='/Panier' element={<Panier/>}/>
        <Route path='/Produits' element={<Produits/>}/>
      </Routes> 
    </div>
  );
}

export default App;
