export default function Fruit({ name, price, emoji, soldout }) {
  return (
    <>
      <li>
        <h2>
          {name +" "+ "$"+ price + emoji}
          {soldout ? "soldout" : ""}
        </h2>
      </li>
    </>
  );
}
