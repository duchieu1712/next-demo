"use client";

import Link from "next/link";
import { Links } from "./components/links";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/dashboard">Dashboard</Link>
      <button
        onClick={() => {
          // router.push("/dashboard");
          console.log("aaa");
        }}
      >
        Test useRouter to dashboard
      </button>
      <Links />
    </main>
  );
}
