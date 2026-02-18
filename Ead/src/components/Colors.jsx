export default function ColorList({ colorArray }) {
  return (
    <ul>
      {colorArray.map((color, index) => (
        <li key={index}>{color}</li>
      ))}
    </ul>
  );
}
