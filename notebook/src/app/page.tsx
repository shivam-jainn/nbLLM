"use client";
import { Button } from "@/components/ui/button";
import { BackgroundGradientAnimation } from "@/components/bg-animate";
import { MoveUpRight } from 'lucide-react';
import { useRouter } from "next/navigation"; // Correct import for useRouter
import { getSession, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { User } from "next-auth";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<User | undefined>(undefined); // Initialized as null to handle loading state
  
  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      console.log(session);
      if (session) {
        setUser(session.user);
      }
    };
    fetchSession();
  }, []);

  if (user) {
    router.push('/me')
  } else {
    // User is not authenticated or session is loading
    return (
      <div>
        <BackgroundGradientAnimation>
          <div className="items-center h-screen flex flex-col align-middle z-10">
            <div className="my-auto">
              <div className="my-2">
                <h1 className="text-7xl font-bold text-white z-10">Welcome to NotebookLM</h1>
              </div>
              <div className="flex align-middle justify-between items-center py-4">
                <h2 className="text-4xl w-3/4 font-bold text-white z-10 m-0">Chat with your PDFs. Learn faster</h2>
                <Button className="text-white w-1/4 font-bold py-4 px-4 rounded-full flex gap-2" onClick={() => {
                  router.push('/login');
                }}>Get Started <MoveUpRight size={16} /> </Button>
              </div>
            </div>
          </div>
        </BackgroundGradientAnimation>
      </div>
    );
  }
}
