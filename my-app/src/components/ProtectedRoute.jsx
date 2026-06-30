// import { Navigate } from "react-router-dom";

// function ProtectedRoute({ children }) {

//   const isLoggedIn = false;

//   if (!isLoggedIn) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// }

// export default ProtectedRoute;
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {

    const isLoggedIn = false;

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;