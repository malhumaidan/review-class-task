import "./App.css";
import CreatePet from "./components/CreatePet";
import Home from "./components/Home";
import Nav from "./components/Nav";
import PetsList from "./components/PetsList";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <PetsList />
      <CreatePet />
    </>
  );
}

export default App;
