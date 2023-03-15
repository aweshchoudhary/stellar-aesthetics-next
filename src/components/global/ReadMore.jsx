import { useState } from "react";

const ReadMore = ({ children }) => {
  const [isMore, setIsMore] = useState(true);
  const [scrollValue, setScrollValue] = useState(null);
  function toggleIsMore() {
    setIsMore(!isMore);
    if (isMore) {
      setScrollValue(document.body.scrollTop);
      console.log(scrollValue);
    } else {
      document.body.scrollTop = scrollValue;
    }
  }

  return (
    <>
      <div
        className={`text text-body ${
          isMore && "h-[150px] overflow-hidden text-effect"
        }`}
        dangerouslySetInnerHTML={{__html: children}}
      >
      </div>
      <button
        aria-label="readmore"
        onClick={toggleIsMore}
        className="read-or-hide btn px-0 text-primary"
      >
        {isMore ? "Read More" : "Show Less"}
      </button>
    </>
  );
};

export default ReadMore;
