import { PartyPopper } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import "./App.css";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <h1 className="flex text-[#7966b2] items-center">
        <PartyPopper size={50} />
        React-Ts-Template
      </h1>
      <Button variant="outline">Button</Button>
    </ThemeProvider>
  );
}

export default App;
