import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Suspense } from "react";

export async function Header() {
  return (
    <div style={{ padding: 16, border: "1px solid black" }}>
      <p>Header</p>
      <Suspense fallback={<p>Loading...</p>}>
        <ClerkProvider dynamic>
          <SignedIn>
            <p>Signed in:</p>
            <UserButton />
            <SignOutButton />
          </SignedIn>
          <SignedOut>
            <p>Not signed in:</p>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
        </ClerkProvider>
      </Suspense>
    </div>
  );
}
