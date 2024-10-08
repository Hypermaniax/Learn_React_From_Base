import Examples from "./components/Example/Examples.jsx";
import Header from "./components/Header/Header.jsx";
import CoreConsepts from "./components/CoreConcepts/CoreConcepts.jsx";


function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConsepts/>
        <Examples/>
      </main>
    </>
  );
}

export default App;
