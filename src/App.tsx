import './assets/scss/style.scss';
import Header from './components/partials/Header';
import Main from './components/partials/Main';
import Footer from './components/partials/Footer';
import { useState } from 'react';

function App() {
  let newDate = new Date();
  let pass =
    (newDate.getFullYear() *
      (newDate.getMonth() + 1) *
      newDate.getHours() *
      newDate.getDate()) **
    2;
  const [isLogged, setIsLogged] = useState<boolean>(true);
  const [password, setPassword] = useState<number>();

  const onLogin = () => {
    if (password === pass) setIsLogged(true);
  };

  return isLogged === true ? (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  ) : (
    <>
      <input
        type="password"
        onChange={(e) => {
          setPassword(Number(e.target.value));
        }}
      />
      <button onClick={onLogin}>Login</button>
      <br />
      {pass}
    </>
  );
}

export default App;
