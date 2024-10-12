import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error=useRouteError();
    return (
        <div id="error-page" className="text-center md:mt-72 ">
      <h1 className="text-red-600 text-4xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-red-500 text-xl font-bold">{error.statusText || error.message}</i>
      </p>
    </div>
    )
};

export default ErrorPage;