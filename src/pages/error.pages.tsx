import { Link } from "react-router-dom";
import Oops from "../assets/oops.svg?react";

const ErrorPage = () => {
  return (
    <div className="center">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4rem",
          alignItems: "center",
        }}
      >
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
      </div>
    </div>
  );
};

export default ErrorPage;
