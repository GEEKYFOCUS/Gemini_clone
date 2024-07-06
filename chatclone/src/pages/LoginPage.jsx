import LoginForm from "../features/authentication/LoginForm";

// min-height: 100vh;
//   display: grid;
//   grid-template-columns: 48rem;
//   align-content: center;
//   justify-content: center;
//   gap: 3.2rem;
//   background-color: var(--color-grey-50);
function LoginPage() {
  return (
    <main className="bg-red-50 h-screen max-h-[100dvh] min-h-auto flex justify-center items-center flex-col content-center gap-[3.2rem] ">
      {/* <div> */}
      <h3 className="sm:font-bold font-light text-md sm:text-[2.4rem] font-poppins text-center">
        Login to your account
      </h3>
      <LoginForm />
      {/* </div> */}
    </main>
  );
}

export default LoginPage;
