import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import menuLink from "@/data/menu.json";
import { useRouter } from "next/router";

const SearchBox = ({ setToggle }) => {
  const [data, setData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [suggestionsActive, setSuggestionsActive] = useState(false);
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);
  const router = useRouter()

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setValue(query);
    if (query.length > 0) {
      const filterSuggestions = data.filter((suggestion) => {
        return (
          suggestion?.search?.toLowerCase()?.indexOf(query) > -1 ||
          suggestion.label.toLowerCase().indexOf(query) > -1
        );
      });
      console.log({ filteredData: filterSuggestions, allData: data });
      setSuggestions(filterSuggestions);
      setSuggestionsActive(true);
    } else {
      setSuggestionsActive(false);
    }
  };

  const handleClick = () => {
    setSuggestions([]);
    setValue("");
    setSuggestionsActive(false);
    setToggle && setToggle(false);
  };

  const handleKeyDown = (e) => {
    // UP ARROW
    if (e.keyCode === 38) {
      if (suggestionIndex === 0) {
        return;
      }
      setSuggestionIndex(suggestionIndex - 1);
    }
    // DOWN ARROW
    else if (e.keyCode === 40) {
      if (suggestionIndex - 1 === suggestions.length) {
        return;
      }
      setSuggestionIndex(suggestionIndex + 1);
    }
    // ENTER
    else if (e.keyCode === 13) {
      setValue("");
      router.push(suggestions[suggestionIndex].link);
      setSuggestionIndex(0);
      setSuggestionsActive(false);
      setToggle && setToggle(false);
    }
  };

  const Suggestions = () => {
    return (
      <ul className="suggestions border absolute bg-white top-full mt-1 shadow-md md:shadow-xl z-50 p-3  md:w-[400px]">
        {suggestions.length ? (
          <p className="text-gray-500">Search Term Match</p>
        ) : null}
        {suggestions.length ? (
          suggestions.map((suggestion, index) => {
            return (
              <li
                className={`${
                  index === suggestionIndex
                    ? "active text-primary   bg-gray-50"
                    : ""
                } list-none p-2 md:text-lg w-full capitalize text-h-primary hover:bg-gray-50 block cursor-pointer`}
                key={index}
                // onClick={() => handleClick(suggestion.link)}
              >
                <Link
                  className="no-underline"
                  to={suggestion.link}
                  onClick={handleClick}
                >
                  {suggestion.label}
                </Link>
              </li>
            );
          })
        ) : (
          <li className="list-none p-2 md:text-lg w-full capitalize">
            No Search Results
          </li>
        )}
      </ul>
    );
  };

  useEffect(() => {
    const planeArr = () => {
      menuLink.forEach((item) => {
        setData((prev) => [...prev, item]);
        if (item.submenu) {
          item.submenu.forEach((subItem) => {
            if (subItem.label) {
              setData((prev) => [...prev, subItem]);
            }
            if (subItem.items) {
              subItem.items.forEach((subsubItem) => {
                setData((prev) => [...prev, subsubItem]);
              });
            }
          });
        }
      });
    };
    planeArr();
  }, []);

  return (
    <div className="relative">
      <div
        id="search-container"
        className={`search bg-gray-50 py-3 gap-3 rounded-full  pl-5 pr-2 shrink-0 flex items-center justify-between ${
          focus ? "outline" : null
        }`}
      >
        <div className="icon text-xl text-gray-400 rounded-full">
          <Icon icon="tabler:search" />
        </div>
        <input
          type="search"
          id={`search-input-main`}
          placeholder={"Search Courses, etc..."}
          className="w-full h-full bg-transparent outline-none"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </div>
      {suggestionsActive && <Suggestions />}
    </div>
  );
};

export default SearchBox;
