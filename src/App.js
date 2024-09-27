
import './App.css';
import hobbies from './hobby.json';
import { ListHobby } from './components/ListHobby/ListHobby.jsx';
import { Herotitle } from './components/HeroTitle/HeroTitle.jsx';

function App() {

  return (
    <>
    <Herotitle/>
      <ListHobby hobbies={hobbies}/>
    </>
  );
}

export default App;
