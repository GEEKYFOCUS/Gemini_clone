import { useMutation } from "@tanstack/react-query";
import { useGoogle } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useLoginWithGoogle() {
  const { mutate: signupWithGoogle, isLoading } = useMutation({
    mutationFn: useGoogle,
    onSuccess: (user) => {
      toast.success("Signing up with google ....");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return {
    signupWithGoogle,
    isLoading,
  };
}

export default useLoginWithGoogle;
