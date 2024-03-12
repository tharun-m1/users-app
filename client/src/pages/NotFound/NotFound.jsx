import React from "react";

function NotFound() {
  return (
    <>
      <div
        style={{
          minHeight: "100dvh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginTop: "10vh",
          }}
        >
          404 <br /> Page Not Found
        </div>
      </div>
    </>
  );
}

export default NotFound;
