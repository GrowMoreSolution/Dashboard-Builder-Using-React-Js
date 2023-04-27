import './App.css';
import router from "./router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {router.map((item, k) => {
            return (
              <Route
                key={k}
                element={<item.element />}
                path={item.path}
                exact={item.exact}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
