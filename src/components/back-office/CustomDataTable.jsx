"use client";
import Data from "@/data/data.json";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";


const CustomDataTable = ({
  tableHeading,
  url,
  columns,
  search,
  apiQuery,
  method,
  checkboxselection,
  searchable,
  ...rest
}) => {
  const [data, setData] = useState([])

  const [loading, setLoading] = useState(false);
  const [pageSize, setPageSize] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentDisplayedData = Data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(Data.length / pageSize);

  useEffect(() => {
    setLoading(true);
    if (method === "post") {
      //fetch data and then function

      return;
    }

    // for method get
    return;
  }, [pageSize, currentPage, search, apiQuery, data]);

  return (
    <div className="shadow-xl bg-slate-100 dark:bg-slate-800 p-5 rounded-xl">
      <h2 className="text-xl font-bold mb-5">{tableHeading}</h2>

      {
        searchable && <div className="my-5">
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search" className="block ps-10 rounded-xl py-2 text-sm text-gray-900 border border-gray-300 w-80 bg-gray-50 focus:ring-yellow-600 focus:border-yellow-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-600 dark:focus:border-green-600" placeholder="Search for items" />
        </div>
    </div>
      }

      {/* TABLE */}
      <div
        className="relative overflow-x-auto sm:rounded-lg"
        style={{ height: "30rem" }}
      >
        <table className="table-auto w-full h-full text-sm text-left rtl:text-right dark:text-gray-600">
          <thead className="text-xs bg-slate-300 dark:bg-slate-700 dark:text-slate-50 uppercase">
            <tr>
              {checkboxselection && (
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
                              dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 
                              dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
              )}
              <th scope="col" className="px-6 py-3">
                Invoic no
              </th>
              <th scope="col" className="px-6 py-3">
                Order Time
              </th>
              <th scope="col" className="px-6 py-3">
                customer name
              </th>
              <th scope="col" className="px-6 py-3">
                Method
              </th>
              <th scope="col" className="px-6 py-3">
                amount
              </th>
              <th scope="col" className="px-6 py-3">
                status
              </th>
              <th scope="col" className="px-6 py-3">
                action
              </th>
              <th scope="col" className="px-6 py-3">
                invoice
              </th>
            </tr>
          </thead>
          <tbody>
            {currentDisplayedData.map((item, i) => (
              <tr
                key={i}
                className="dark:bg-slate-600 border-b border-slate-300 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-gray-600"
              >
                {checkboxselection && (
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                )}
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
                >
                  {item.id}
                </th>
                <td className="px-6 py-4 dark:text-slate-300">
                  {item.order_time}
                </td>
                <td className="px-6 py-4 dark:text-slate-300">
                  {item.customer_name}
                </td>
                <td className="px-6 py-4 dark:text-slate-300">{item.method}</td>
                <td className="px-6 py-4 dark:text-slate-300">{item.amount}</td>
                <td className="px-6 py-4 dark:text-slate-300">{item.status}</td>
                <td className="px-6 py-4 dark:text-slate-300">{item.action}</td>
                <td className="px-6 py-4 dark:text-slate-300">
                  {item.invoice}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav
        className="flex items-center flex-column flex-wrap md:flex-row md:justify-between pt-5"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal dark:text-slate-400 mb-5 md:mb-0 block w-full md:inline md:w-auto">
          Showing{" "}
          <span className="font-semibold dark:text-white">
            {startIndex + 1} - {Math.min(endIndex, Data.length)}
          </span>{" "}
          of{" "}
          <span className="font-semibold dark:text-white">{Data.length}</span>
        </span>

        <span className="mb-5">
          <label htmlFor="pageSize" className="dark:text-slate-400">
            Row per page:{" "}
          </label>
          <select
            name="pageSize"
            id="pageSize"
            onChange={(e) => setPageSize(e.target.value)}
            className="bg-transparent border border-gray-300 dark:border-slate-600 dark:text-gray-50"
          >
            <option value="25" className="text-black">
              25
            </option>
            <option value="50" className="text-black">
              50
            </option>
            <option value="100" className="text-black">
              100
            </option>
          </select>
        </span>

        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
      </nav>
    </div>
  );
};

export default CustomDataTable;
