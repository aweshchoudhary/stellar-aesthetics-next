import { useContext } from "react";
import DataContext from "@/context/DataContext";

const useData = () => {
  return useContext(DataContext);
};

export default useData;
