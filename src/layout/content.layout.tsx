import React from "react";

export const Content = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      className="container content"
      style={{ marginTop: "5.6rem", marginBottom: "5.6rem" }}
    >
      {children}
    </div>
  );
};
