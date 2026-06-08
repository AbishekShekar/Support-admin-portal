import StatCard from "../components/StatCard";
import { stats } from "../data/mockData";
import RevenueChart from "../components/RevenueChart";
import SubscriptionPieChart from "../components/SubscriptionPieChart";
function Dashboard({ darkMode }) {

 return (

  <div className="p-8">

   <h1 className="text-3xl font-bold mb-6">
      Dashboard
   </h1>
   

  <div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-4
">

    <StatCard
  darkMode={darkMode}
  title="👤 Customers"
  value={stats.customers}
/>

    <StatCard
     darkMode={darkMode}
      title="⏳ Pending"
      value={stats.pending}
    />

    <StatCard
     darkMode={darkMode}
      title="✅ Approved"
      value={stats.approved}
    />

    <StatCard
     darkMode={darkMode}
      title="💰 Revenue"
      value={stats.revenue}
    />

   </div>
   <div className="mt-8">
      <RevenueChart 
      darkMode={darkMode} 
      />
    </div>
    <div className="mt-8">
      <SubscriptionPieChart 
      darkMode={darkMode} />
    </div>
  </div>

 );
}

export default Dashboard;