import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";


const Meals = () => {
    const meals= useLoaderData();
    const allMeals=meals.meals;
    console.log(allMeals);
    return (
        <div>
            <h1>This is meals....on the way :{allMeals.length}</h1>
            <div className="grid grid-cols-3 gap-5">
            {
                allMeals.map(meal=><Meal key={meal.idMeal} meal={meal}></Meal>)
            }
            </div>
        </div>
    );
};

export default Meals;