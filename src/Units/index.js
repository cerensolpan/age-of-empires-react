import { useState, useEffect } from "react";
import Table from "../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { requestUnitListData } from "../actions/actionTypes";
import LoadingCircle from "../components/LoadingCircle";
import { fetchUnitList } from "./unitListSlice";
import { unitListSelector } from "./unitListSlice";

export default function Units() {
  const { units } = useSelector(unitListSelector);
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    age: {
      isActive: true,
      value: "All",
    },
    Wood: {
      isActive: false,
      value: 0,
    },
    Food: {
      isActive: false,
      value: 0,
    },
    Gold: {
      isActive: false,
      value: 0,
    },
  });

  useEffect(() => {
    dispatch(fetchUnitList(filters));
  }, [filters]);


  const handleFilters = ({ type, isActive, value }) => {
    let updatedValue = { ...filters };
    if (isActive !== undefined) {
      updatedValue[type].isActive = isActive;
    }
    if (value !== undefined) {
      updatedValue[type].value = value;
    }
    setFilters((prev) => ({
      ...prev,
      ...updatedValue,
    }));
  };

  return (
    <div className="space-y-12">
      <h1 className="text-2xl text-blue-500">Units Page</h1>
      <div className="grid md:grid-cols-2 md:space-y-0 space-y-4">
        <div className="flex flex-col">
          <span>Ages</span>
          <div>
            <span className="isolate inline-flex rounded-md shadow-sm mt-4">
              <button
                type="button"
                className={`relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
                  filters.age.value === "All" && "z-10 ring-2 ring-blue-500"
                }`}
                onClick={() => handleFilters({ type: "age", value: "All" })}
              >
                All
              </button>
              <button
                type="button"
                className={`relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
                  filters.age.value === "Dark" && "z-10 ring-2 ring-blue-500"
                }`}
                onClick={() => handleFilters({ type: "age", value: "Dark" })}
              >
                Dark
              </button>
              <button
                type="button"
                className={`relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
                  filters.age.value === "Feudal" && "z-10 ring-2 ring-blue-500"
                }`}
                onClick={() => handleFilters({ type: "age", value: "Feudal" })}
              >
                Feudal
              </button>
              <button
                type="button"
                className={`relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
                  filters.age.value === "Castle" && "z-10 ring-2 ring-blue-500"
                }`}
                onClick={() => handleFilters({ type: "age", value: "Castle" })}
              >
                Castle
              </button>
              <button
                type="button"
                className={`relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
                  filters.age.value === "Imperial" &&
                  "z-10 ring-2 ring-blue-500"
                }`}
                onClick={() =>
                  handleFilters({ type: "age", value: "Imperial" })
                }
              >
                Imperial
              </button>
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center md:items-center items-center md:max-w-[500px]">
          <span>Costs</span>
          <div className="grid grid-cols-2 justify-start items-center mt-4 px-20">
            <div className="space-x-2 flex justify-start items-center">
              <input
                type="checkbox"
                id="Wood"
                name="Wood"
                value="Wood"
                onChange={(e) =>
                  handleFilters({ type: "Wood", isActive: e.target.checked })
                }
              />
              <label htmlFor="Wood"> Wood </label>
            </div>
            <div className="space-x-2 flex justify-start items-center">
              <input
                className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128"
                type="range"
                min="0"
                max="200"
                step="1"
                disabled={!filters.Wood.isActive}
                onChange={(e) =>
                  handleFilters({ type: "Wood", value: e.target.value })
                }
              />
              <span>{filters.Wood.value}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-start items-center mt-4 px-20">
            <div className="space-x-2 flex justify-start items-center">
              <input
                type="checkbox"
                id="Food"
                name="Food"
                value="Food"
                onChange={(e) =>
                  handleFilters({ type: "Food", isActive: e.target.checked })
                }
              />
              <label htmlFor="Food"> Food </label>
            </div>
            <div className="space-x-2 flex justify-start items-center">
              <input
                className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128"
                type="range"
                min="0"
                max="200"
                step="1"
                disabled={!filters.Food.isActive}
                onChange={(e) =>
                  handleFilters({ type: "Food", value: e.target.value })
                }
              />
              <span>{filters.Food.value}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-start items-center mt-4 px-20">
            <div className="space-x-2 flex justify-start items-center">
              <input
                type="checkbox"
                id="Gold"
                name="Gold"
                value="Gold"
                onChange={(e) =>
                  handleFilters({ type: "Gold", isActive: e.target.checked })
                }
              />
              <label htmlFor="Gold"> Gold </label>
            </div>
            <div className="space-x-2 flex justify-start items-center">
              <input
                className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128"
                type="range"
                min="0"
                max="200"
                step="1"
                disabled={!filters.Gold.isActive}
                onChange={(e) =>
                  handleFilters({ type: "Gold", value: e.target.value })
                }
              />
              <span>{filters.Gold.value}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        {/* {loading ? (
          <LoadingCircle />
        ) : error ? (
          <span className="text-red-500">Error</span>
        ) : ( */}
          <Table units={units} />
        {/* )} */}
      </div>
    </div>
  );
}
