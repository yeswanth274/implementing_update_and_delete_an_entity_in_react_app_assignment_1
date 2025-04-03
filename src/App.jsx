import UpdateItem from "./components/UpdateItem";

const API_URI = "http://localhost:5000/doors"; // Replace when backend is available

function App() {
  return (
    <div>
      <h1>Management Of Doors</h1>
      <UpdateItem API_URI={API_URI} />
    </div>
  );
}

export default App;