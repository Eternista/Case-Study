import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/style.scss';
import Header from './components/partials/Header';
import Main from './components/partials/Main';
import Footer from './components/partials/Footer';
import { useState } from 'react';

function App() {
  const [isLogged, setIsLogged] = useState<boolean>(true);
  return isLogged === true ? (
        <>
          <Header/>
          <Main/>
          <Footer/>
        </>

    ) : (
      <>
        Nope
      </>
    )
}

export default App
