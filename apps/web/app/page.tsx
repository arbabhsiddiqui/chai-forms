"use client"

import { useUser } from "~/hooks/api/auth";



export default async function Home() {
  // const { status } = await api.health.getHealth.query();

  const { user } = useUser();
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
