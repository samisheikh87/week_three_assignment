import "./App.css";
import Color from "./components/Colors";

export default function App() {
  const colors = ["Crimson", "Teal", "Goldenrod", "Indigo", "Coral"];

  return (
    <div>
      <h1>Color List</h1>
      <Color colors={colors} />
    </div>
  );
}
