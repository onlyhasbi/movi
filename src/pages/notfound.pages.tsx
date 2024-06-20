import { Link } from "react-router-dom";
import NotFound from "../assets/404.svg?react";
import Error from "../layout/error.layout";

const NotFoundPage = () => {
  return (
    <Error>
      <div style={{ width: "50rem" }}>
        <NotFound />
      </div>
      <h1 style={{ fontSize: "4rem", color: "#e11d48" }}>Page Not Found</h1>
      <p style={{ fontSize: "1.6rem", color: "#9ca3af" }}>
        Ensure the URL path is correct.
      </p>
      <Link to="/movies" className="link" style={{ fontSize: "2rem" }}>
        Go to Homepage
      </Link>
    </Error>
  );
};

export default NotFoundPage;
