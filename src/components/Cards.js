import { useEffect, useState } from "react";

function Content() {
  let [character, setCharacter] = useState([]);
  let num;

  useEffect(() => {
    async function getCharacter() {
      let dataCharacter = await fetch(
        "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9",
        {
          mode: "cors",
        }
      );

      let dataJson = await dataCharacter.json();
      console.log(dataJson);
      setCharacter(dataJson);
    }

    getCharacter();
  }, []);

  return (
    <div class=" grid grid-cols-3 grid-rows-3">
      {character.map((x) => {
        num = Math.floor(Math.random() * 10);
        console.log(num);
        return (
          <div class={`order-${num}`}>
            <img src={x.image} alt="character" />
          </div>
        );
      })}
    </div>
  );
}

export default Content;
