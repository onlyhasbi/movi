import { Link } from "react-router-dom";
import Oops from "../assets/oops.svg?react";
import Error from "../layout/error.layout";

const ErrorPage = () => {
  return (
    <Error>
      <Oops />
      <h1 style={{ fontSize: "4rem", color: "#e11d48" }}>
        Something went wrong.
      </h1>
      <p style={{ fontSize: "1.6rem", color: "#9ca3af" }}>
        An unexpected error occurred. Please try again later.
      </p>
      <Link to="/movies" className="link" style={{ fontSize: "2rem" }}>
        Go to Homepage
      </Link>
    </Error>
  );
};

export default ErrorPage;
