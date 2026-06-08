import { useState } from "react";
import { customers } from "../data/mockData";
import { Link } from "react-router-dom";

function Customers({ darkMode }) {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredCustomers =
    customers.filter(customer => {

      const matchesSearch =
        customer.shop
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All"
          ? true
          : customer.status === filter;

      return matchesSearch && matchesFilter;
    });

 return (
  <div className="w-full min-h-screen p-8 border-4 border-red-500">

    <h1 className="text-4xl font-bold mb-6">
      Customer Management
    </h1>

    <div className="flex gap-4 mb-6">

    <input
  type="text"
  placeholder="🔍 Search Shop"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className={`border p-3 rounded-lg w-full md:w-72 ${
    darkMode
      ? "bg-slate-700 text-white"
      : "bg-white text-black"
  }`}
/>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      className={`border p-2 rounded ${
  darkMode
    ? "bg-slate-700 text-white"
    : "bg-white text-black"
}`}
      >
        <option>All</option>
        <option>Active</option>
        <option>Expired</option>
        <option>Pending</option>
      </select>

    </div>

    <table
    className={`w-full shadow rounded-lg ${
      darkMode
        ? "bg-slate-800 text-white"
        : "bg-white text-black"
    }`}
  >

      <thead>

        <tr className={`${
  darkMode
    ? "bg-slate-800 text-white"
    : "bg-gray-200 text-black"
}`}>
          <th className="p-3 text-left">
            Shop
          </th>

          <th className="p-3 text-left">
            Owner
          </th>

          <th className="p-3 text-left">
            Status
          </th>

        </tr>

      </thead>

      <tbody>

        {filteredCustomers.map((customer) => (

          <tr
            key={customer.id}
            className={`border-b ${
  darkMode
    ? "hover:bg-slate-700"
    : "hover:bg-gray-100"
}`}
          >
          <td className="p-3">

               <Link
                   to={`/customers/${customer.id}`}
                  className="text-blue-500 font-medium"
             >
             {customer.shop}
                  </Link>

          </td>

            <td className="p-3">
              {customer.owner}
            </td>

            <td className="p-3">

              <span
                className={
                  customer.status === "Active"
                    ? "bg-green-100 text-green-700 px-2 py-1 rounded"
                    : customer.status === "Expired"
                    ? "bg-red-100 text-red-700 px-2 py-1 rounded"
                    : "bg-yellow-100 text-yellow-700 px-2 py-1 rounded"
                }
              >
                {customer.status}
              </span>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>
);
}

export default Customers;