import "./app.css";
import { Todo } from "./components/todo/index";

function App() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Todo />
    </div>
  );
}

export default App;
