import { useDispatch } from "react-redux";
import {
  filterCardByType,
  filterCardsByStatus,
} from "../../../store/features/cards/slice";
import { useState } from "react";

type filtersType = {
  label: string;
  action: () => void;
  filled: boolean;
};

const Filter = () => {
  const [selected, setSelected] = useState<string>("all");
  const dispatch = useDispatch();

  const filters: filtersType[] = [
    {
      label: "All",
      action: () => {
        dispatch(filterCardsByStatus(null));
        setSelected("all");
      },
      filled: false,
    },
    {
      label: "Active",
      action: () => {
        dispatch(filterCardsByStatus("active"));
        setSelected("active");
      },
      filled: false,
    },
    {
      label: "Inactive",
      action: () => {
        dispatch(filterCardsByStatus("inactive"));
        setSelected("inactive");
      },
      filled: false,
    },
    {
      label: "Terminated",
      action: () => {
        dispatch(filterCardsByStatus("terminated"));
        setSelected("terminated");
      },
      filled: false,
    },
    {
      label: "Physical",
      action: () => {
        dispatch(filterCardByType("physical"));
        setSelected("physical");
      },
      filled: true,
    },
    {
      label: "Digital",
      action: () => {
        dispatch(filterCardByType("digital"));
        setSelected("digital");
      },
      filled: true,
    },
  ];

  return (
    <div className="flex justify-center p-4 space-x-4">
      {filters.map((filter, index) => (
        <button
          key={index}
          onClick={filter.action}
          className={`px-4 py-2 rounded transition duration-300 ease-in-out ${
            selected === filter.label.toLocaleLowerCase()
              ? "bg-orange-500 text-white" // Active (selected) style
              : filter.filled
              ? filter.label === "Physical"
                ? "bg-indigo-900 text-white hover:bg-orange-500"
                : "bg-[#acdce0] text-black hover:bg-orange-500"
              : `border-2 hover:bg-orange-500 hover:text-white border-gray-500`
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
