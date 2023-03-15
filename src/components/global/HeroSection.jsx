import Link from "next/link"

const HeroSection = () => {
  return (
    <section className="md:h-[600px] sm:h-[400px] h-screen lg:px-0 lg:py-0 w-full bg-black relative">
      <figure className="w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted={true}
          src="https://res.cloudinary.com/dcjhzzypt/video/upload/v1674711536/homepage-video_aker3b.mp4"
        ></video>
      </figure>
      <div className="absolute top-1/2 left-1/2 z-10 text-center w-full md:px-10 px-5 -translate-x-1/2 -translate-y-1/2">
        <h3 className="md:text-5xl text-2xl text-white">Get Started</h3>
        <h2 className="md:text-7xl sm:text-5xl text-3xl text-white font-bold md:font-medium">
          Start Your Journey
        </h2>
        <div className="flex items-center mt-5 gap-5 justify-center">
          <Link
            aria-label="link"
            className="btn filled bg-primary"
            href={"/procedures"}
          >
            I&apos;m Patient
          </Link>
          <Link
            aria-label="link"
            className="btn filled white text-primary"
            href={"/courses"}
          >
            I&apos;m Doctor
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
