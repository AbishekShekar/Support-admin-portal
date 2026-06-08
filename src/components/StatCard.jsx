function StatCard({ title, value, darkMode }) {

  return (

    <div
      className={`p-6 rounded-xl shadow ${
        darkMode
          ? "bg-slate-800 text-white"
          : "bg-white text-black"
      }`}
      
    >

      <h2 className="text-gray-400">
        {title}
      </h2>

      <p className="text-3xl font-bold">
        {value}
      </p>

    </div>

  );

}

export default StatCard;