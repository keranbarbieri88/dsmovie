/*componentes do React Router DOM, servem para configurar as rotas.*/
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
/*componentes que criei para ativar o componente em cada rota.*/
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Navbar from "components/Navbar";

function App() {
  return (    
    /*inicia a configuração das rotas, Navbar aparecerá em todas as páginas, Routes responsável 
    por todas as configurações das rotas */
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form movie={{
            id: 0,
            title: "",
            score: 0,
            count: 0,
            image: ""
          }} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
