import logo from "./logo.svg";
import "./App.css";
import Cards from "./components/Cards";
import Score from "./components/Score";

function App() {
  return (
    <>
      <div class="h-screen flex justify-center align-middle flex-col bg-[url('/home/aaron/odin-projects/memory-app/src/bg.jpg')]">
        <Cards />
      </div>
    </>
  );
}

export default App;
