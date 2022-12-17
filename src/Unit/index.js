import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import LoadingCircle from "../components/LoadingCircle";
import { fetchUnitDetail } from "./unitDetailSlice";
import { unitDetailSelector } from "./unitDetailSlice";

export default function Unit() {
  const {unit}= useSelector(unitDetailSelector);
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUnitDetail(Number(id)));
    // eslint-disable-next-line
  }, [id]);


  return (
    <div className="space-y-12 px-12">
      <h1 className="text-2xl text-blue-500">Unit Detail Page</h1>
      {/* {loading ? (
        <LoadingCircle />
      ) : error ? (
        <span className="text-red-500">Error</span>
      ) : ( */}
        <div className="flex justify-center overflow-hidden">
          <table className="divide divide-gray-300 shadow rounded-lg px-4">
            <tbody>
              <tr className="border border-gray-200">
                <th
                  scope="col"
                  className="bg-blue-50 text-primary border-r py-3.5 pl-4 px-3 text-left text-sm font-semibold sm:pl-6 "
                >
                  ID
                </th>
                <td className="text-secondary py-4 pl-3 pr-4 text-left text-sm sm:pr-6 ">
                  {unit.id}
                </td>
              </tr>
              <tr className="border border-gray-200">
                <th
                  scope="col"
                  className="bg-blue-50 text-primary border-r py-3.5 pl-4 px-3 text-left text-sm font-semibold sm:pl-6 "
                >
                  Name
                </th>
                <td className="text-secondary py-4 pl-3 pr-4 text-left text-sm sm:pr-6 ">
                  {unit.name}
                </td>
              </tr>
              <tr className="border border-gray-200">
                <th
                  scope="col"
                  className="bg-blue-50 text-primary border-r py-3.5 pl-4 px-3 text-left text-sm font-semibold sm:pl-6 "
                >
                  Description
                </th>
                <td className="text-secondary py-4 pl-3 pr-4 text-left text-sm sm:pr-6 ">
                  {unit.description}
                </td>
              </tr>
              <tr className="border border-gray-200">
                <th
                  scope="col"
                  className="bg-blue-50 text-primary border-r py-3.5 pl-4 px-3 text-left text-sm font-semibold sm:pl-6 "
                >
                  Min. Required Age
                </th>
                <td className="text-secondary py-4 pl-3 pr-4 text-left text-sm sm:pr-6 ">
                  {unit.range}
                </td>
              </tr>
              {unit.cost && unit.cost.Wood && (
                <tr className="border border-gray-200">
                  <th
                    scope="col"
                    className="bg-blue-50 text-primary border-r py-3.5 pl-4 px-3 text-left text-sm font-semibold sm:pl-6 "
                  >
                    Wood Cost
                  </th>
                  <td className="text-secondary py-4 pl-3 pr-4 text-left text-sm sm:pr-6 ">
                    {unit.cost.Wood}
                  </td>
                </tr>
              )}

              {unit.cost && unit.cost.Food && (
                <tr className="border border-gray-200">
                  <th
                    scope="col"
                    className="bg-blue-50 text-primary border-r py-3.5 pl-4 px-3 text-left text-sm font-semibold sm:pl-6 "
                  >
                    Food Cost
                  </th>
                  <td className="text-secondary py-4 pl-3 pr-4 text-left text-sm sm:pr-6 ">
                    {unit.cost.Food}
                  </td>
                </tr>
              )}
              {unit.cost && unit.cost.Gold && (
                <tr className="border border-gray-200">
                  <th
                    scope="col"
                    className="bg-blue-50 text-primary border-r py-3.5 pl-4 px-3 text-left text-sm font-semibold sm:pl-6 "
                  >
                    Gold Cost
                  </th>
                  <td className="text-secondary py-4 pl-3 pr-4 text-left text-sm sm:pr-6 ">
                    {unit.cost.Gold}
                  </td>
                </tr>
              )}
              <tr className="border border-gray-200">
                <th
                  scope="col"
                  className="bg-blue-50 text-primary border-r py-3.5 pl-4 px-3 text-left text-sm font-semibold sm:pl-6 "
                >
                  Build Time
                </th>
                <td className="text-secondary py-4 pl-3 pr-4 text-left text-sm sm:pr-6 ">
                  {unit.build_time}
                </td>
              </tr>
              <tr className="border border-gray-200">
                <th
                  scope="col"
                  className="bg-blue-50 text-primary border-r py-3.5 pl-4 px-3 text-left text-sm font-semibold sm:pl-6 "
                >
                  Reload Time
                </th>
                <td className="text-secondary py-4 pl-3 pr-4 text-left text-sm sm:pr-6 ">
                  {unit.reload_time}
                </td>
              </tr>
              <tr className="border border-gray-200">
                <th
                  scope="col"
                  className="bg-blue-50 text-primary border-r py-3.5 pl-4 px-3 text-left text-sm font-semibold sm:pl-6 "
                >
                  Hit Points
                </th>
                <td className="text-secondary py-4 pl-3 pr-4 text-left text-sm sm:pr-6 ">
                  {unit.hit_points}
                </td>
              </tr>
              <tr className="border border-gray-200">
                <th
                  scope="col"
                  className="bg-blue-50 text-primary border-r py-3.5 pl-4 px-3 text-left text-sm font-semibold sm:pl-6 "
                >
                  Attack
                </th>
                <td className="text-secondary py-4 pl-3 pr-4 text-left text-sm sm:pr-6 ">
                  {unit.attack}
                </td>
              </tr>
              <tr className="border border-gray-200">
                <th
                  scope="col"
                  className="bg-blue-50 text-primary border-r py-3.5 pl-4 px-3 text-left text-sm font-semibold sm:pl-6 "
                >
                  Accuracy
                </th>
                <td className="text-secondary py-4 pl-3 pr-4 text-left text-sm sm:pr-6 ">
                  {unit.accuracy}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      {/* )} */}
    </div>
  );
}
