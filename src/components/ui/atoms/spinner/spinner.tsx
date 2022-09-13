export const Spinner = () => {
  return (
    <div className="d-flex justify-content-center position-absolute top-50 start-50">
      <div className="spinner-border" role="status">
        <span className="m-auto">Loading...</span>
      </div>
    </div>
  );
};
