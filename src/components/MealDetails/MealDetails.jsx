import { useLoaderData, useNavigate } from "react-router-dom";


const MealDetails = () => {
    const meal=useLoaderData();
    const mealDetails=meal.meals;
    const {strMeal, strMealThumb, idMeal,strCategory,strInstructions}=mealDetails[0];
    console.log(mealDetails);
    const navigate=useNavigate();
    const handleGoBack=()=>{
        navigate(-1);
    }
    return (
        <div>
            <h2>Hello from meal details: {idMeal}</h2>
            <img className="w-full" src={strMealThumb} alt="" />
            <h2 className="text-2xl font-bold">{strMeal}</h2>
            <p className="text-base font-normal">Category: {strCategory}</p>
            <p className="text-sm font-thin text-justify">Instruction: {strInstructions}</p>
            <button onClick={handleGoBack} className="btn btn-outline my-4">Go Back</button>
        </div>
    );
};

export default MealDetails;