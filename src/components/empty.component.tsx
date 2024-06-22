import NoMovie from "../assets/no-movie.svg?react";

type Props = {
  title?: string;
  variant?: "info" | "notfound";
};

const Empty = ({ title, variant = "info" }: Props) => {
  const style = { fontSize: "1.6rem", color: "#475569" };

  if (variant == "notfound") {
    return (
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            marginTop: "10rem",
          }}
        >
          <NoMovie
            style={{ width: "50rem", marginBottom: "2rem" }}
          />
          <p style={style}>Movie Not Found</p>
        </div>
      </div>
    );
  }

  return <p style={style}>{`You don't have ${title} movie yet`}</p>;
};

export default Empty;
