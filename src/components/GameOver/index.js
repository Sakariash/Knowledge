export default function GameOver({ points }) {
  const refreshPage = () => window.location.reload();

  return (
    <div className="flex flex-col h-full items-center justify-center text-center">
      <h1 className="text-6xl font-bold mb-1">Game Over</h1>
      <p className="mb-14">You got {points} points out of 15!</p>
      <button
        className="border-2 rounded-xl border-[#F79673] text-black bg-white select-none cursor-pointer py-4 px-10 hover:bg-[#F79673] hover:text-white font-bold"
        onClick={refreshPage}
      >
        Play Again
      </button>
    </div>
  );
}
