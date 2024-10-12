import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
  const { strMeal, strMealThumb, idMeal } = meal;
  return (
    <div className="card card-compact bg-base-100 w-full shadow-xl">
      <figure>
        <img
          src={strMealThumb}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{strMeal}</h2>
          <Link className="border-2 w-20 rounded-xl text-center text-xl font-normal bg-slate-300" to={`/meal/${idMeal}`}>Show Details</Link>
      </div>
    </div>
  );
};

export default Meal;
