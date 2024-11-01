import { auth } from "@clerk/nextjs/server";

export async function ProtectedCurrentUserId() {
  const { userId } = await auth.protect();

  return (
    <div>
      <p>Signed in as {userId}</p>
    </div>
  );
}
