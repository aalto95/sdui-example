import { type IPage, Renderer, SduiProvider } from "fable-ui";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";

function App() {
  const [ui, setUi] = useState<IPage[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SDUI_ORCHESTRATOR_URL}/ui`)
      .then((response) => response.json())
      .then((data) => setUi(data.ui))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <SduiProvider>
      <div className="flex flex-col h-screen items-center justify-center">
        <div className="flex-1 max-w-7xl w-full">
          <div className="flex items-center justify-between border-b py-4">
            <h1 className="text-2xl font-bold">SDUI Example</h1>
          </div>
          <Routes>
            {ui.map((component: IPage) => (
              <Route
                key={component.route}
                path={component.route}
                element={<Renderer ui={component.ui} />}
              />
            ))}
          </Routes>
        </div>
      </div>
    </SduiProvider>
  );
}

export default App;
