export default function GameOver({ points }) {
  const refreshPage = () => window.location.reload();

  return (
    <>
      <h1>Game Over</h1>
      <p>You got {points} points out of 10!</p>
      <button onClick={refreshPage}>Play Again</button>
    </>
  );
}
