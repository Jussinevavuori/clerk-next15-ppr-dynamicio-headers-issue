import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from "react";
import Link from "next/link";
import { ProtectedCurrentUserId } from "./components/protected-current-user-id";

export default function Home() {
  return (
    <main style={{ padding: 16, border: "1px solid black" }}>
      <h1>Protected page</h1>
      <Link href="/">Go to public page</Link>
      <Suspense fallback={<p>Loading...</p>}>
        <ClerkProvider dynamic>
          <ProtectedCurrentUserId />
        </ClerkProvider>
      </Suspense>
    </main>
  );
}
