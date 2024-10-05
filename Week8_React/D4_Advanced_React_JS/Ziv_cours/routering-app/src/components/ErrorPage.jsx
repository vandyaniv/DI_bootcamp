import { useRouteError } from "react-router-dom";

const ErrorPage = (props) => {
  const error = useRouteError();
 console.log(error);
  return (
    <>
      <div>
        <h1>Opps!... </h1>
        <p>Sorry, the page you are looking for does not exists</p>
        <h2>404 not found</h2>
        <p>{error.statusText} {error.message}</p>
      </div>
    </>
  );
};
export default ErrorPage;
