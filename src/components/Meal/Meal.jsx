const Meal = ({ meal }) => {
  const { strMeal, strMealThumb } = meal;
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
      </div>
    </div>
  );
};

export default Meal;
