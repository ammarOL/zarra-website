"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function OAuthCallback() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      window.location.href = `myapp://oauth/callback?code=${code}`;
    }
  }, []);

  return <p>Redirecting back to app...</p>;
}
