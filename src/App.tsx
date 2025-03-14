// import logo from "./logo.svg";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { RoutesManagement } from "./routes";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <RoutesManagement />
            </BrowserRouter>
        </div>
    );
}

export default App;
