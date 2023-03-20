import { useAuthStore } from "@/lib/auth";
import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { loggedIn } = useAuthStore();

  useEffect(() => {
    if (!loggedIn && router.asPath !== "/login") {
      router.push("/login");
    }
  }, [loggedIn, router]);

  return (
    <div className="bg-gray-100">
      <Component {...pageProps} />
    </div>
  );
}
