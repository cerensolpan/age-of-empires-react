import { Link } from "react-router-dom";

export default function Table({ units }) {

  return (
    <div className="mt-8 flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            {!units ||  units.length < 1 ? (
              <div className="min-w-full flex justify-center items-center min-h-[200px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
                <span className="ml-2">There is no units</span>
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-blue-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left titleText sm:pl-6"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left titleText"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left titleText"
                    >
                      Age
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 text-right pr-4 sm:pr-6"
                    >
                      <span>Costs</span>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 bg-white text-left">
                  {units?.map((unit) => (
                    <tr key={`tb-${unit.id}`}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {unit.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Link to={`/units/${unit.id}`}>
                        {unit.name}
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {unit.age}
                      </td>

                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm sm:pr-6 space-x-4">
                        {unit.cost &&
                          Object.keys(unit.cost).map(function (key) {
                            return (
                              <span>
                                {key}: {unit.cost[key]}
                              </span>
                            );
                          })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
