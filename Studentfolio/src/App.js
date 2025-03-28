import './App.css';
import Header from './header/header.jsx'
import Main from './main_section/main_section.jsx'
import Login from './login/login.jsx'
import Signup from './signup/signup.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Login />
      <Signup />
    </div>
  );
}

export default App;
