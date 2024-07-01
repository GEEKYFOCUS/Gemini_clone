import { useEffect } from "react";
import useUser from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // //1. Load the authenticated user
  const { user, isLoading, isAuthenticated } = useUser();
  console.log(user);

  // //2. Check if the user is authenticated, and if there is no authenticated user . Redirect to Login Page

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // //3. If the user is authenticated, render the children
  if (isLoading)
    return (
      <div className="h-[100dvh] bg-gray-50 flex content-center justify-center items-center">
        <div>Loading...</div>
      </div>
    );

  // 4. If the user is authenticated, render the children
  if (isAuthenticated) return children;
}
