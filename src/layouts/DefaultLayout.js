const DefaultLayout = ({ children }) => {
  return (
    <div>
      <div>Header</div>

      <div>{children}</div>

      <div>Footer</div>
    </div>
  );
};

export default DefaultLayout;