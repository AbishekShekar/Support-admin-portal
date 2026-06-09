function RecentActivity({ darkMode }) {

  const activities = [

    {
      id: 1,
      type: "Approved",
      message: "Subscription approved for Coffee Hub",
      time: "10 mins ago"
    },

    {
      id: 2,
      type: "Renewal",
      message: "Renewal request received from Retail Mart",
      time: "30 mins ago"
    },

    {
      id: 3,
      type: "Customer",
      message: "Fresh Cafe added as customer",
      time: "1 hour ago"
    },

    {
      id: 4,
      type: "Expired",
      message: "Subscription expired for City Stores",
      time: "2 hours ago"
    }

  ];

  return (

    <div
      className={`p-6 rounded-xl shadow ${
        darkMode
          ? "bg-slate-800 text-white"
          : "bg-white text-black"
      }`}
    >

      <h2 className="text-xl font-bold mb-4">
        Recent Activity
      </h2>

      <div className="space-y-4">

        {activities.map(activity => (

          <div
            key={activity.id}
            className="border-l-4 border-blue-500 pl-4"
          >

            <p className="font-medium">
              {activity.message}
            </p>

            <p className="text-sm text-gray-500">
              {activity.time}
            </p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default RecentActivity;