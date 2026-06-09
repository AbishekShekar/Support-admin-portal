import { Link } from "react-router-dom";

function Sidebar({darkMode}) {
  return (
   <div
  className={`w-64
  min-h-screen
  bg-slate-950
  text-white
  p-5 ${
    darkMode
      ? "bg-slate-950 text-white"
      : "bg-slate-900 text-white"
  }`}
>

<h1
  className={`text-4xl font-bold mb-10 ${
    darkMode
      ? "text-cyan-400"
      : "text-yellow-300"
  }`}
>
  Customer Portal
</h1>

      <ul className="space-y-4">

        <li>
          <Link to="/">📊 Dashboard</Link>
        </li>

        <li>
          <Link to="/requests">
            📋 Requests
          </Link>
        </li>

        <li>
          <Link to="/renewals">
            🔄 Renewals
          </Link>
        </li>

        <li>
          <Link to="/customers">
            👥 Customers
          </Link>
        </li>
        <li>
          <Link to="/Notifications">
            🔔 Notifications
          </Link>
        </li>
        <li>
          <Link to="/Settings">
            ⚙️ Settings
          </Link>
        </li>
        <li>
        <Link to="/reports">
           📄 Reports
        </Link>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;