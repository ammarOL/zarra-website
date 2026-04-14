import CallbackRedirectClient from "./callback-redirect-client";

type CallbackPageProps = {
  searchParams?: Promise<{ code?: string | string[] }>;
};

export default async function OAuthCallback({ searchParams }: CallbackPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const rawCode = resolvedSearchParams?.code;
  const code = Array.isArray(rawCode) ? rawCode[0] : rawCode;

  return <CallbackRedirectClient code={code} />;
}
