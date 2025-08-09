"use client";

import { useAuth } from "@crossmint/client-sdk-react-ui";
import { useEffect } from "react";

export function Login() {
  const { login, status } = useAuth();
  useEffect(() => {
    if (status === "logged-out") {
      login();
    }
  }, [login, status]);
  return null;
}
