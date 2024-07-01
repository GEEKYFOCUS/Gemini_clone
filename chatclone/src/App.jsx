import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AIProvider } from "./contexts/AIContext";
import { ImageProvider } from "./contexts/ImageContext";
import { TextProvider } from "./contexts/TextContext";
import "./index.css";
import AppLayout from "./pages/AppLayout";
import LoginPage from "./pages/LoginPage";
import SingupPage from "./pages/SingupPage";

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
