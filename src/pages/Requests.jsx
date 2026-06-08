import { useState } from "react";
import { requests as data } from "../data/mockData";

function Requests({ darkMode }) {

 const [requests,setRequests] =
 useState(data);

 const approveRequest = (id) => {

   setRequests(
     requests.map(req =>
      req.id === id
      ? {...req,status:"Approved"}
      : req
     )
   );

 };

 const rejectRequest = (id) => {

   setRequests(
    requests.map(req =>
      req.id === id
      ? {...req,status:"Rejected"}
      : req
    )
   );

 };

 return (

  <div className="overflow-x-auto">

   <h1 className="text-3xl font-bold mb-5">
      Subscription Requests
   </h1>

   <table
  className={`w-full shadow rounded-lg ${
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
  <th className="p-4 text-left">Owner</th>
  <th className="p-4 text-left">Plan</th>
  <th className="p-4 text-left">Status</th>
  <th className="p-4 text-left">Action</th>

     </tr>

    </thead>

    <tbody>

     {requests.map(req => (

      <tr key={req.id}>

       <td className="p-4">{req.shop}</td>
       <td className="p-4">{req.owner}</td>
       <td className="p-4">{req.plan}</td>
       <td className="p-4">{req.status}</td>

       <td>

        <button
         onClick={() =>
           approveRequest(req.id)
         }
         className="bg-green-500 text-white px-2 py-1 rounded mr-2"
        >
         Approve
        </button>

        <button
         onClick={() =>
          rejectRequest(req.id)
         }
         className="bg-red-500 text-white px-2 py-1 rounded"
        >
         Reject
        </button>

       </td>

      </tr>

     ))}

    </tbody>

   </table>

  </div>

 );
}

export default Requests;