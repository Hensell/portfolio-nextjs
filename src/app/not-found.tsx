"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main style={{ textAlign: "center", padding: "4rem" }}>
      <h1>404 – Page Not Found</h1>
      <p>Sorry, the page you are looking for doesn’t exist.</p>
      <button
        onClick={() => router.push("/")}
        className="mt-20 inline-block px-6 py-3 rounded-md bg-foreground text-background text-sm tracking-widest hover:bg-foreground/90 transition"
      >
        Go back home
      </button>
    </main>
  );
}
