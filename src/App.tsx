import { type IPage, Renderer, SduiProvider } from "fable-ui";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { Header } from "./components/Header";

function App() {
  const [ui, setUi] = useState<IPage[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/ui`)
      .then((response) => response.json())
      .then((data) => setUi(data.ui))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <SduiProvider>
      <div className="flex flex-col h-screen items-center justify-center">
        <Header />
        <div className="flex-1 max-w-7xl w-full">
          <main className="p-4">
            <Routes>
              {ui.map((component) => (
                <Route
                  key={component.route}
                  path={component.route}
                  element={<Renderer ui={component.ui} />}
                />
              ))}
            </Routes>
          </main>
        </div>
      </div>
    </SduiProvider>
  );
}

export default App;
