let score = 0;
function Score({ link }) {
  let check = new Set(link.linkArr);

  if (check.size !== link.linkArr.length) {
    score = 0;
    check.clear();
    link.linkArr.length = [];
    score--;
    /// execute game end
  } else {
    score++;
  }

  return (
    <>
      <div class="bg-[rgba(0,0,0,0.4)] h-full ">
        <div class=" text-white flex justify-center items-center flex-col opacity-100 sticky">
          <p class="font-mouse text-7xl">Score:{score}</p>
          <p class="font-mouse text-2xl">Max score: 18</p>
          <p class="font-mouse text-xl">© Copyright Aaron Lawrence</p>
        </div>
      </div>
    </>
  );
}
export default Score;
