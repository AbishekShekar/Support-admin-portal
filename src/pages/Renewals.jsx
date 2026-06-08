import { useState } from "react";
import { renewals as data } from "../data/mockData";

function Renewals({ darkMode }) {

 const [renewals, setRenewals] = useState(data);

 const approve = (id) => {
   setRenewals(
     renewals.map(item =>
       item.id === id
         ? { ...item, status: "Approved" }
         : item
     )
   );
 };

 return (
  <div className="overflow-x-auto">
   <h1 className="text-3xl font-bold mb-4">
      Renewal Requests
   </h1>

   <table
  className={`w-full rounded shadow ${
    darkMode
      ? "bg-slate-800 text-white"
      : "bg-white text-black"
  }`}
>
     <thead>
        <tr
  className={
    darkMode
      ? "bg-slate-700"
      : "bg-gray-200"
  }
>
    <th className="p-4 text-left">Shop</th>
    <th className="p-4 text-left">Current Plan</th>
    <th className="p-4 text-left">Expiry Date</th>
    <th className="p-4 text-left">Requested</th>
    <th className="p-4 text-left">Status</th>
    <th className="p-4 text-left">Action</th>
  </tr>
     </thead>

     <tbody>
      {renewals.map(item => (
        <tr
  key={item.id}
  className={`border-b ${
    darkMode
      ? "hover:bg-slate-700"
      : "hover:bg-gray-100"
  }`}
>
         <td className="p-4">{item.shop}</td>
         <td className="p-4">{item.currentPlan}</td>
         <td className="p-4">{item.expiryDate}</td>
         <td className="p-4">{item.requestedMonths} Months</td>
         <td className="p-4">
  <span
    className={
      item.status === "Approved"
        ? "bg-green-100 text-green-700 px-2 py-1 rounded"
        : "bg-yellow-100 text-yellow-700 px-2 py-1 rounded"
    }
  >
    {item.status}
  </span>
</td>

         <td>
          <button
            onClick={() => approve(item.id)}
            className="bg-green-500 text-white px-3 py-1 rounded"
          >
            Approve
          </button>
         </td>
        </tr>
      ))}
     </tbody>
   </table>
  </div>
 );
}

export default Renewals;