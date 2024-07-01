import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import "./index.css";
import { TextProvider } from "./contexts/TextContext";
import { ImageProvider } from "./contexts/ImageContext";
import { AIProvider } from "./contexts/AIContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import LoginForm from "./features/authentication/LoginForm";
import SignupForm from "./features/authentication/SignupForm";
import LoginPage from "./pages/LoginPage";
import SingupPage from "./pages/SingupPage";
import { ProtectedRoute } from "./components/ProtectedRoute";

// import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

// "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"

function App() {
  const queryClient = new QueryClient({
    defaultOption: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <TextProvider>
        <ImageProvider>
          <AIProvider>
            <BrowserRouter>
              <Routes>
                <Route
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate replace to="app" />} />
                  <Route path="app" element={<AppLayout />} />
                </Route>

                <Route path="login" element={<LoginPage />} />
                <Route path="signup" element={<SingupPage />} />
              </Routes>
            </BrowserRouter>
          </AIProvider>
        </ImageProvider>
      </TextProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
