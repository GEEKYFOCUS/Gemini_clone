import supabase from "./supabase";

// export async function signup({ fullName, email, password }) {
//   const { data, error } = await supabase.auth.signUp({
//     email,
//     password,
//     options: {
//       data: {
//         fullName,
//       },
//     },
//   });

//   //   if (error.message === "Email rate limit exceeded")
//   //     throw new Error("User already existed");
//   if (error) throw new Error(error.message);
//   console.log(error.message);
//   return { data, error };
// }

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });
  if (error) throw new Error(error.message);
  console.log(error);
  console.log(data);
  return { data, error };
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  console.log(error);
  console.log(data);

  return { data, error };
}

export async function useGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  if (error) throw new Error(error.message);
  return { data, error };
}

// export async function getCurrentUser() {
//   const { data: session } = await supabase.auth.getSession();
//   if (!session.session) return null;

//   const { data, error } = await supabase.auth.getUser();
//   console.log(data);
//   if (error) throw new Error(error.message);
//   console.log(error);
//   return data?.user;
// }

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  console.log(session);
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  console.log(data);
  if (error) throw new Error(error.message.message);
  console.log(error);
  return data?.user;
}

// export async function logout() {
//   const { error } = await supabase.auth.signOut();
//   if (error) throw new Error(error.message);
// }
