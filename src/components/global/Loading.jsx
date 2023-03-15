const Loading = () => {
  return (
    <div className="title-container md:py-[200px] py-10">
      <div className="spinner">
        <svg
          className="loading-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="46" />
        </svg>
      </div>
      <h1 className="title text-3xl mt-5">Loading...</h1>
    </div>
  );
};

export default Loading;
