import "./loading.css";
export const Loading = () => {
  return (
    <div className="container">
      <div className="loader">
        <svg className="circularLoader" viewBox="25 25 50 50">
          <circle className="loaderPath" cx="50" cy="50" r="20" fill="none"></circle>
        </svg>
      </div>
    </div>
  );
};
