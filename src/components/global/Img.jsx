import { motion } from "framer-motion";

const Img = ({ src, alt, caption, className, imgClass }) => {
  return (
    <figure className={className}>
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        loading="lazy"
        src={src}
        alt={alt || ""}
        className={imgClass || "w-full h-full object-cover"}
      />
      <figcaption className="hidden">{caption}</figcaption>
    </figure>
  );
};

export default Img;
