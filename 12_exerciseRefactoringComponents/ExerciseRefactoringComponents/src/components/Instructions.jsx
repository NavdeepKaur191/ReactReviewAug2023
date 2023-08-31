import { Link } from "react-router-dom";

function Instructions() {
  return (
    <div className="flex flex-col space-y-8 content-center text-center mt-12 mx-auto w-3/4">
      <h1 className="text-2xl uppercase">Links to Each Component</h1>

      <div className="flex justify-around">
        <Link
          className="bg-green-200 py-2 px-4 rounded-xl mx-auto  hover:shadow-xl hover:bg-green-400"
          to="/products/3456"
        >
          Component One
        </Link>
        <Link
          className="bg-green-200 py-2 px-4 rounded-xl mx-auto hover:shadow-xl hover:bg-green-400"
          to="/register"
        >
          Component Two
        </Link>
        <Link
          className="bg-green-200 py-2 px-4 rounded-xl mx-auto hover:shadow-xl hover:bg-green-400"
          to="/values"
        >
          Component Three
        </Link>
        <Link
          className="bg-green-200 py-2 px-4 rounded-xl mx-auto hover:shadow-xl hover:bg-green-400"
          to="/promo"
        >
          Component Four
        </Link>
      </div>

      <div className="flex justify-around mt-24">
        <Link
          className="bg-indigo-200 py-2 px-4 rounded-xl mx-auto  hover:shadow-xl hover:bg-indigo-400"
          to="/refactoredproducts/3456"
        >
          Refactored Component One
        </Link>
        <Link
          className="bg-indigo-200 py-2 px-4 rounded-xl mx-auto hover:shadow-xl hover:bg-indigo-400"
          to="/refactoredRegister"
        >
          Refactored Component Two
        </Link>
        <Link
          className="bg-indigo-200 py-2 px-4 rounded-xl mx-auto hover:shadow-xl hover:bg-indigo-400"
          to="/refactoredValues"
        >
          Refactored Component Three
        </Link>
        <Link
          className="bg-indigo-200 py-2 px-4 rounded-xl mx-auto hover:shadow-xl hover:bg-indigo-400"
          to="/refactoredPromo"
        >
          Refactored Component Four
        </Link>
      </div>
    </div>
  );
}

export default Instructions;
