import Default from "./component/Default";
import Navbar from "./component/Navbar";
import "./index.css";
function App() {
  return (
    <>
      <div className=" relative">
        <Navbar />

        <Default />
      </div>
    </>
  );
}

export default App;
