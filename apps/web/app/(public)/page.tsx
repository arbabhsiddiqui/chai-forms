"use client"

import { useUser } from "~/hooks/api/auth";

import { useRouter } from "next/navigation";
import { useEffect } from "react";



export default function Home() {
  // const { status } = await api.health.getHealth.query();
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (user && user.id) {
      router.replace("/admin")
    } else {
      router.replace("/login")
    }
  }, [user, router])

  return (
    <main className="min-h-screen min-w-screen flex justify-center items-center">
      <div>
        <h1 className="text-3xl">Streamyst - Stream in Style</h1>
        {/* <h2>Server Status: {status}</h2> */}
        {JSON.stringify(user, null, 2)}
      </div>
    </main>
  );
}
