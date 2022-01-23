import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard";
import Login from "./Login";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return code ? <Dashboard code={code}></Dashboard> : <Login />;
}

export default App;
