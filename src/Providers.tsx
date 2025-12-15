import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type React from "react";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import { store } from "./store/store";

export default function Providers({ children }: { children: React.ReactNode }) {
    // Create a client 
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                {children}
                <Toaster />
            </Provider>
        </QueryClientProvider>
    )
}
