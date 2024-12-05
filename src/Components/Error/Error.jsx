const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-200">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-orange-500 mb-6">
          Oops! 404
        </h1>
        <p className="text-lg text-base-content mb-6">
          It seems you're out of bounds!
        </p>{" "}
        <p className="text-base-content mb-6">
          The page you're looking for is unavailable. But don't worry, the game
          isn't over yet!
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-block bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
