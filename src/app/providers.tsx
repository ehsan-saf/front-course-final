"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { ModalContextProvider } from "@/store/modalContext";
import { AuthContextProvider } from "@/store";
import { CartContextProvider } from "@/store/cartContext";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchIntervalInBackground: false,
            retry: 0,
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>
        <AuthContextProvider>
          <ModalContextProvider>
            {children}
            <ToastContainer
              autoClose={4000}
              hideProgressBar={false}
              closeOnClick={true}
              draggable={false}
              theme="light"
              position="top-right"
            />
          </ModalContextProvider>
        </AuthContextProvider>
      </CartContextProvider>
    </QueryClientProvider>
  );
}
