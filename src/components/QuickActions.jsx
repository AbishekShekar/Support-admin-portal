function QuickActions({ darkMode }) {

    const actions = [
        {
            title: "Add Customer",
            icon: "👤",
            path: "/customers"
        },
        {
            title: "Approve Subscription",
            icon: "✅",
            path: "/subscriptions"
        },
        {
            title: "Generate Report",
            icon: "📊",
            path: "/reports"
        },
        {
            title: "Send Notification",
            icon: "📢",
            path: "/notifications"
        }
    ];

    return (
        <div className={`p-6 rounded-xl shadow ${
            darkMode ? "bg-slate-800 text-white" 
            : "bg-white text-black"}`}
            >
            <h2 className="text-xl font-bold mb-4">
                Quick Actions
                </h2>
            <div className="grid grid-cols-2 gap-4">
                {actions.map((action, index) => (
                    <button
                        key={index}
                         onClick={() => navigate(action.path)}
                        className={`p-4
                                    rounded-lg
                                    bg-blue-600
                                    text-white
                                    hover:bg-blue-700
                                    transition
                                    duration-300
                                ' ${
                            darkMode ? "bg-blue-600 hover:bg-blue-700" 
                            : "bg-blue-500 hover:bg-blue-600"} text-white`}
                    >
                        <div className="text-2xl mb-2">{action.icon}</div>
                        <div>{action.title}</div>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default QuickActions;