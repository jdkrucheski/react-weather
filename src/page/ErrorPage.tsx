export const ErrorPage = ({ error }: { error: string }) => {
  return (
    <div className="page">
      <span>Ocurrió un error: </span>
      <span>
        <b> {error}</b>
      </span>
    </div>
  );
};
