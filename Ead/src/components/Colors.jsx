export default function Color({ colors }) {
  return (
    <ul>
      {colors.map((color, index) => (
        <li key={index} style={{ color: color }}>
          {color}
        </li>
      ))}
    </ul>
  );
}
