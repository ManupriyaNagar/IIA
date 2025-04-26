"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      router.push("/admin-login"); // Redirect to login if not authenticated
    }
  }, [router]);

  return null; // This component does not render anything
};

export default AuthRedirect;