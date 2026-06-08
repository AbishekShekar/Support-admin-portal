import { useParams } from "react-router-dom";
import { customers } from "../data/mockData";

function CustomerDetails({ darkMode }) {

  const { id } = useParams();

  const customer =
    customers.find(
      c => c.id === Number(id)
    );

  if (!customer) {
    return <h1>Customer Not Found</h1>;
  }

  return (

    <div className="p-8">

      <h1 className="text-4xl font-bold mb-6">
        Customer Profile
      </h1>

      <div
        className={`p-6 rounded-xl shadow ${
          darkMode
            ? "bg-slate-800 text-white"
            : "bg-white text-black"
        }`}
      >

        <p>
          <strong>Shop:</strong> {customer.shop}
        </p>

        <p>
          <strong>Owner:</strong> {customer.owner}
        </p>

        <p>
          <strong>Status:</strong> {customer.status}
        </p>

      </div>

    </div>
  );
}

export default CustomerDetails;