export const CheckingAuth = () => {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center bg-secondary"
      style={{
        minHeight: "100vh",
        // backgroundColor: "#0d6efd",
        padding: "4rem",
      }}
    >
      <div className="row justify-content-center">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};
