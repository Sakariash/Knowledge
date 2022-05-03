export default function GameOver({ points, text }) {
  const refreshPage = () => window.location.reload();

  return (
    <div className="flex flex-col h-full items-center justify-center text-center">
      <h1 className="text-6xl font-bold mb-1">Game Over</h1>
      <p className="mb-14">You got {points} points out of 10!</p>
      <button
        className="border-2 rounded-xl text-[#616a94] bg-[#161a31] select-none cursor-pointer py-4 px-10 hover:bg-[#22242e]"
        onClick={refreshPage}
      >
        Play Again
      </button>
    </div>
  );
}
