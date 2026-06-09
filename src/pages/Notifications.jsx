function Notifications({ darkMode }) {

 const data = [

  {
   id:1,
   message:"New Subscription Request"
  },

  {
   id:2,
   message:"Renewal Request Pending"
  },

  {
   id:3,
   message:"Customer Approved"
  }

 ];

 return (

  <div className="p-8">

   <h1 className="text-4xl font-bold mb-6">
      Notifications
   </h1>

   {data.map(item => (

    <div
      key={item.id}
      className={`p-4 mb-4 rounded shadow ${
        darkMode
       ? "bg-slate-950 text-white"
      : "bg-slate-900 text-white"
      }`}
    >

      {item.message}

    </div>

   ))}

  </div>

 );

}

export default Notifications;