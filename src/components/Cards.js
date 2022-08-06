import { Preview } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Score from "./Score";

function Content() {
  let [character, setCharacter] = useState([]);
  let num;
  let [link, setLink] = useState([]);

  function click(e) {
    let linkSrc = e.target.src;
    let newArr = link.slice();
    newArr.push(linkSrc);
    setLink(newArr);
  }

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
    <>
      <div class="flex justify-center align-middle">
        <div
          class=" grid grid-cols-3 grid-rows-3 gap-5"
          onClick={(e) => click(e)}
        >
          {character.map((x) => {
            num = Math.floor(Math.random() * 10);
            return (
              <div class={`order-${num}`}>
                <img src={x.image} alt="character" />
              </div>
            );
          })}
        </div>
      </div>
      <Score link={{ linkArr: link }} />
    </>
  );
}

export default Content;
