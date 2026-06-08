import { useState } from "react";
import NotificationDrawer from "./NotificationDrawer";
function Navbar({ darkMode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

return (
  <>
    <div
      className={`flex flex-col md:flex-row justify-between items-center gap-4 p-4 rounded-xl shadow mb-6 ${
        darkMode
          ? "bg-slate-800 text-white"
          : "bg-white text-black"
      }`}
    >

      <input
        type="text"
        placeholder="🔍 Search..."
        className={`border p-2 rounded-lg w-full md:w-64 ${
          darkMode
            ? "bg-slate-700 text-white"
            : "bg-white text-black"
        }`}
      />

      <div className="flex items-center gap-5">

        <button
          className="text-2xl relative"
          onClick={() => setIsDrawerOpen(true)}
        >
          🔔

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
            3
          </span>

        </button>

        <div className="flex items-center gap-2">

          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="rounded-full"
          />

          <span className="font-medium">
            Admin
          </span>

        </div>

      </div>

    </div>

    <NotificationDrawer
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      darkMode={darkMode}
    />
  </>
);
}

export default Navbar;