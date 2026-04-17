"use client";

import { useEffect } from "react";

type CallbackRedirectClientProps = {
  code?: string;
  state?: string;
};

export default function CallbackRedirectClient({
  code,
  state,
}: CallbackRedirectClientProps) {
  useEffect(() => {
    if (!code) {
      return;
    }

    const params = new URLSearchParams({ code });

    if (state) {
      params.set("state", state);
    }

    window.location.href = `zarra://oauth/callback?${params.toString()}`;
  }, [code, state]);

  if (!code) {
    return (
      <main className="min-h-screen bg-[#f2f1f8] px-6 py-16 text-center text-[#1f1f35]">
        <h1 className="text-2xl font-semibold text-[#17176a]">
          Missing authorization code
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#5f5f79] sm:text-base">
          We could not complete sign-in because no callback code was provided.
          Please return to the app and try signing in again.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f2f1f8] px-6 py-16 text-center text-[#1f1f35]">
      <h1 className="text-2xl font-semibold text-[#17176a]">
        Redirecting back to app…
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#5f5f79] sm:text-base">
        If you are not redirected automatically, return to the app and continue
        from the sign-in screen.
      </p>
    </main>
  );
}
