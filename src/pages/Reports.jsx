function Reports({ darkMode }) {

  const reports = [

    {
      title: "Revenue Report",
      description: "Monthly revenue and earnings"
    },

    {
      title: "Customer Report",
      description: "Customer subscriptions and activity"
    },

    {
      title: "Renewal Report",
      description: "Renewal requests and approvals"
    },

    {
      title: "Subscription Report",
      description: "Active and expired subscriptions"
    }

  ];

  return (

    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Reports Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

         <div className="bg-blue-500 text-white p-5 rounded-xl">
    <h3>Total Revenue</h3>
    <p className="text-2xl font-bold">
      ₹50,000
    </p>
  </div>

  <div className="bg-green-500 text-white p-5 rounded-xl">
    <h3>Customers</h3>
    <p className="text-2xl font-bold">
      120
    </p>
  </div>

  <div className="bg-yellow-500 text-white p-5 rounded-xl">
    <h3>Renewals</h3>
    <p className="text-2xl font-bold">
      25
    </p>
  </div>

  <div className="bg-red-500 text-white p-5 rounded-xl">
    <h3>Expired</h3>
    <p className="text-2xl font-bold">
      15
    </p>
  </div>

        {reports.map((report, index) => (

          <div
            key={index}
            className={`p-6 rounded-xl shadow ${
              darkMode
                ? "bg-slate-800 text-white"
                : "bg-white text-black"
            }`}
          >

            <h2 className="text-2xl font-semibold mb-2">
              {report.title}
            </h2>

            <p className="mb-4 text-gray-500">
              {report.description}
            </p>

            <div className="flex gap-3">

              <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Export PDF
              </button>

              <button
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Export Excel
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Reports;