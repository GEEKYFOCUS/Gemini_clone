import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login as loginAPI } from "../../services/apiAuth";

// const { mutate: login, isLoading } = useMutation({
//     mutationFn: ({ email, password }) => loginApi({ email, password }),
//     onSuccess: (user) => {
//       queryClient.setQueryData(["user"], user.user);
//       navigate("/dashboard", { replace: true });
//     },
//     onError: (err) => {
//       console.log("ERROR", err);
//       toast.error("Provided email or password are incorrect");
//     },
//   });

function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginAPI,
    onSuccess: (data) => {
      console.log(data);
      toast.success("user successfully login");
      queryClient.setQueryData(["user"], data.user);
      navigate("/app", { replace: true });
    },
    onError: (error) => {
      console.log(error, "🔥🔥");
      toast.error("Provide A correct email address");
    },
  });

  return {
    login,
    isLoading,
  };
}

export default useLogin;
