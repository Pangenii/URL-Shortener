import "./App.css";
import InputField from "./components/InputField";

function App() {
  return (
    <>
      <div className="flex flex-col gap-12 justify-center items-center min-h-screen ">
        <p className="text-6xl font-bold text-white">URL Shortener</p>
        <InputField />
      </div>
    </>
  );
}

export default App;
