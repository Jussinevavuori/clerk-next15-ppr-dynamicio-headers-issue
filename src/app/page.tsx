import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from "react";
import { CurrentUserId } from "./components/current-user-id";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 16, border: "1px solid black" }}>
      <h1>Public page</h1>
      <Link href="/protected">Go to protected page</Link>
      <Suspense fallback={<p>Loading...</p>}>
        <ClerkProvider dynamic>
          <CurrentUserId />
        </ClerkProvider>
      </Suspense>
    </main>
  );
}
