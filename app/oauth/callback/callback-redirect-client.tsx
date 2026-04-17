"use client";

import { useEffect, useMemo } from "react";

type CallbackRedirectClientProps = {
  code?: string;
  state?: string;
};

export default function CallbackRedirectClient({
  code,
  state,
}: CallbackRedirectClientProps) {
  const deepLinkUrl = useMemo(() => {
    if (!code) {
      return null;
    }

    const params = new URLSearchParams({ code });

    if (state) {
      params.set("state", state);
    }

    return `exp://192.168.29.240:8081/--/oauth/callback?${params.toString()}`;`;
  }, [code, state]);

  useEffect(() => {
    if (!deepLinkUrl) {
      return;
    }

    window.location.href = deepLinkUrl;
  }, [deepLinkUrl]);

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
        If you are not redirected automatically, tap Open Zarra app.
      </p>
      {deepLinkUrl ? (
        <a
          className="mx-auto mt-6 inline-flex rounded-full border border-[#232389] bg-[#232389] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#1e1e73] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b5bcf] focus-visible:ring-offset-2"
          href={deepLinkUrl}
        >
          Open Zarra app
        </a>
      ) : null}
    </main>
  );
}
