import CallbackRedirectClient from "./callback-redirect-client";

type CallbackPageProps = {
  searchParams?: Promise<{ code?: string | string[]; state?: string | string[] }>;
};

export default async function OAuthCallback({ searchParams }: CallbackPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const rawCode = resolvedSearchParams?.code;
  const rawState = resolvedSearchParams?.state;
  const code = Array.isArray(rawCode) ? rawCode[0] : rawCode;
  const state = Array.isArray(rawState) ? rawState[0] : rawState;

  return <CallbackRedirectClient code={code} state={state} />;
}
