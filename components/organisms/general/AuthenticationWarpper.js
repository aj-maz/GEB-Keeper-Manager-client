const AuthenticationWrapper = ({ children }) => {
  const isAuhtenticated = false;

  if (isAuhtenticated) {
    return <div>Please authenticate</div>;
  } else {
    return children;
  }
};

export default AuthenticationWrapper;
