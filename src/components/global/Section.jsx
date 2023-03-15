const Section = ({ children, className }) => {
  const sectionStyle = "lg:py-20 py-10 md:px-10 px-5";
  return (
    <section className={`${sectionStyle} ${className}`}>{children}</section>
  );
};

export default Section;
