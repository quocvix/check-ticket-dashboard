import { ModeToggle } from "./components/ModeToggle";
import { Button } from "./components/ui/button";

function App() {
    return (
        <>
            <div className="bg-background text-foreground min-h-screen p-6">
                <div className="flex items-center justify-end">
                    <ModeToggle />
                </div>
                <Button variant="outline">Outline</Button>
            </div>
        </>
    );
}

export default App;
