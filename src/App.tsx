import { type IPage, Renderer, SduiProvider } from "fable-ui";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import { NotFound } from "./components/NotFound";

function App() {
  const [ui, setUi] = useState<IPage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/ui`)
      .then((response) => response.json())
      .then((data) => setUi(data.ui))
      .catch((error) => console.error("Error:", error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <SduiProvider>
      <div className="flex min-h-screen min-h-dvh flex-col">
        <Header />
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col p-4">
          <Routes>
            {ui.length &&
              !isLoading &&
              ui.map((component) => (
                <Route
                  key={component.route}
                  path={component.route}
                  element={<Renderer ui={component.ui} />}
                />
              ))}
            {!isLoading && <Route path="*" element={<NotFound />} />}
          </Routes>
          {!ui.length && <Loader state={isLoading ? "pending" : "error"} />}
        </div>
      </div>
    </SduiProvider>
  );
}

export default App;
