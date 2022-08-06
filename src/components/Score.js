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
    <div>
      <div>`Score:{score}`</div>
      <div></div>
    </div>
  );
}
export default Score;
