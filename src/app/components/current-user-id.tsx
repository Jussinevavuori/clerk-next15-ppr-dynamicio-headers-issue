import { auth } from "@clerk/nextjs/server";

export async function CurrentUserId() {
  const { userId } = await auth();

  if (!userId) {
    return <p>Not signed in</p>;
  }

  return (
    <div>
      <p>Signed in as {userId}</p>
    </div>
  );
}
