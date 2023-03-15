const Heading = ({ text1, text2, className, brNone, white }) => {
  return (
    <h2
      className={`${
        white && "text-white "
      } lg:text-5xl md:text-4xl text-3xl md:border-b-0 md:pb-0 border-b-4 pb-5 capitalize lg:w-[70%] ${className}`}
    >
      <strong>
        <span className="font-semibold"> {text1}</span> {!brNone && <br />}
        <span className={`capitalize ${white ? "text-white" : "text-primary"}`}>
          {text2}
        </span>
      </strong>
    </h2>
  );
};

export default Heading;
