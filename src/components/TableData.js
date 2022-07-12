import React from "react";
import { useState, useEffect } from "react";

const TableData = ({ localposts }) => {
  const [searchItem, setSearchItem] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const filtered = localposts.filter((post) =>
      post.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setResults(filtered);
  }, [searchItem, localposts]);
  return (
    <div>
      <div className="p-4  text-lg bg-blue-200">
        <div className="flex justify-between  rounded ">
          <h1 className="text-slate-700 ">
            <strong>Posts</strong>
          </h1>
          <form>
            <input
              className="form-control relative flex-auto min-w-0 block w-full
             px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              placeholder="search title here"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value.toLowerCase())}
            />
          </form>
        </div>
      </div>
      {
        <table className="m-4 table-auto">
          {results.length > 0 ? (
            <>
              <thead>
                <tr>
                  <th className="text-sm font-large text-gray-900 px-6 py-2 text-center">
                    Post Id
                  </th>
                  <th className="text-sm font-large text-gray-900 px-6 py-2 text-center">
                    Title
                  </th>
                  <th className="text-sm font-large text-gray-900 px-6 py-2 text-center">
                    Body
                  </th>
                </tr>
              </thead>
              {results.map((pd) => (
                <tbody>
                  <tr key={pd.id}>
                    <td className="font-medium text-gray-900 px-6 py-4 text-left">
                      {pd.id}
                    </td>
                    <td className="font-medium text-gray-900 px-6 py-4 text-left">
                      {pd.title}
                    </td>
                    <td className="font-medium text-gray-900 px-6 py-4 text-left">
                      {pd.body}
                    </td>
                  </tr>
                </tbody>
              ))}
            </>
          ) : (
            <div class="container p-8 rounded-lg">
            <h1 className=" text-center text-amber-600 text-3xl">
              <strong>No Title Found</strong>
            </h1>
          </div>
            
          )}
        </table>
      }
    </div>
  );
};
export default TableData;
