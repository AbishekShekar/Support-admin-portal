function NotificationDrawer({

  open,
  onClose,
  darkMode

}) {

  const notifications = [

    {
      id:1,
      message:
      "New Subscription Request"
    },

    {
      id:2,
      message:
      "Renewal Request Pending"
    },

    {
      id:3,
      message:
      "Subscription Expiring Soon"
    }

  ];

  return (

    <div
      className={`fixed top-0 right-0 h-full w-80 shadow-lg transform transition-transform duration-300 z-50 ${
        open
          ? "translate-x-0"
          : "translate-x-full"
      } ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-white text-black"
      }`}
    >

      <div className="flex justify-between p-4 border-b">

        <h2 className="text-xl font-bold">
          Notifications
        </h2>

        <button
          onClick={onClose}
        >
          ✖
        </button>

      </div>

      <div className="p-4">

        {notifications.map(item => (

          <div
            key={item.id}
            className="mb-4 p-3 rounded bg-slate-100 text-black"
          >

            {item.message}

          </div>

        ))}

      </div>

    </div>

  );

}

export default NotificationDrawer;