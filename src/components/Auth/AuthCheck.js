"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Use App Router's useRouter

const AuthCheck = () => {
  const [isMounted, setIsMounted] = useState(false); // Correctly use useState
  const router = useRouter(); // Call useRouter unconditionally

  // Set isMounted after component mounts on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return; // Prevent action if not mounted

    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      router.push("/admin-login"); // Redirect to login page if not authenticated
    }
  }, [isMounted, router]);

  return null; // This component does not render anything
};

export default AuthCheck;