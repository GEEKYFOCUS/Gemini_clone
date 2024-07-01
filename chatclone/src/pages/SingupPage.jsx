import SignupForm from "../features/authentication/SignupForm";

function SingupPage() {
  return (
    <main className="bg-[#EBF8FE] min-h-[100dvh] px-4  flex flex-col justify-center items-center content-center  gap-[2.2rem] ">
      <h3 className="font-bold xl:text-[2.4rem] md:text-lg sm:text-md text-sm font-poppins text-center">
        Welcome to Gemini, Sign In to continue
      </h3>
      <SignupForm />
    </main>
  );
}

export default SingupPage;
