import './App.css'
import ColorList from "./ColorList";

export default function App() {

  const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

  return (
    <div>
      <ColorList colorArray={colors} />
    </div>
  );
}

