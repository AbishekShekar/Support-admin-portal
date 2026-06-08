function Settings({
  darkMode,
  setDarkMode
}) {

  return (

    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Settings
      </h1>

      <div className="grid gap-6">

        {/* Appearance */}

        <div
          className={`p-6 rounded-xl shadow ${
            darkMode
              ? "bg-slate-800 text-white"
              : "bg-white text-black"
          }`}
        >

          <h2 className="text-2xl font-semibold mb-4">
            Appearance
          </h2>

          <div className="flex justify-between items-center">

            <span>Dark Mode</span>

            <button
              onClick={() =>
                setDarkMode(!darkMode)
              }
              className={`px-4 py-2 rounded ${
                darkMode
                  ? "bg-green-500"
                  : "bg-gray-500"
              } text-white`}
            >
              {darkMode
                ? "Enabled"
                : "Disabled"}
            </button>

          </div>

        </div>

        {/* Profile */}

        <div
          className={`p-6 rounded-xl shadow ${
            darkMode
              ? "bg-slate-800 text-white"
              : "bg-white text-black"
          }`}
        >

          <h2 className="text-2xl font-semibold mb-4">
            Profile
          </h2>

          <div className="grid gap-4">

            <input
              type="text"
              placeholder="Full Name"
              className="border p-3 rounded"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border p-3 rounded"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="border p-3 rounded"
            />

          </div>

        </div>

        {/* Company */}

        <div
          className={`p-6 rounded-xl shadow ${
            darkMode
              ? "bg-slate-800 text-white"
              : "bg-white text-black"
          }`}
        >

          <h2 className="text-2xl font-semibold mb-4">
            Company Information
          </h2>

          <div className="grid gap-4">

            <input
              type="text"
              placeholder="Company Name"
              className="border p-3 rounded"
            />

            <input
              type="text"
              placeholder="GST Number"
              className="border p-3 rounded"
            />

            <textarea
              placeholder="Company Address"
              className="border p-3 rounded"
            />

          </div>

        </div>

        {/* Notifications */}

        <div
          className={`p-6 rounded-xl shadow ${
            darkMode
              ? "bg-slate-800 text-white"
              : "bg-white text-black"
          }`}
        >

          <h2 className="text-2xl font-semibold mb-4">
            Notifications
          </h2>

          <div className="flex justify-between mb-4">

            <span>Email Alerts</span>

            <input
              type="checkbox"
            />

          </div>

          <div className="flex justify-between">

            <span>Renewal Reminders</span>

            <input
              type="checkbox"
            />

          </div>

        </div>

        {/* Security */}

        <div
          className={`p-6 rounded-xl shadow ${
            darkMode
              ? "bg-slate-800 text-white"
              : "bg-white text-black"
          }`}
        >

          <h2 className="text-2xl font-semibold mb-4">
            Security
          </h2>

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Change Password
          </button>

        </div>

      </div>

    </div>

  );
}

export default Settings;