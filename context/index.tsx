import React from "react";
import { AuthProvider } from "./auth";

function AppProviders({ children }: { children: React.ReactNode; }) {
  return <AuthProvider>{children}</AuthProvider>
}

export default AppProviders;