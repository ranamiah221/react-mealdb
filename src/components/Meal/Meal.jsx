import { Link, useNavigate } from "react-router-dom";


const Meal = ({ meal }) => {
  const { strMeal, strMealThumb, idMeal } = meal;
  const navigate=useNavigate();
  const handleShowDetails=()=>{
        navigate(`/meal/${idMeal}`); 
  }
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
          <button onClick={handleShowDetails} className="btn btn-ghost">Show Details Button</button>
      </div>
    </div>
  );
};

export default Meal;
