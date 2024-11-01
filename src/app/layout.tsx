import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "./components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Header />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
