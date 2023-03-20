import { useAuthStore } from "@/lib/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "./login.module.css"

export default function Login() {
  const { loggedIn } = useAuthStore();
  const router = useRouter();

  const login = () => {
    useAuthStore.setState({ loggedIn: true });
  };

  useEffect(() => {
    if (loggedIn) {
      router.push("/");
    }
  }, [loggedIn, router]);

  return (
    <div className={styles.container}>
      <button onClick={login}>Login</button>
    </div>
  );
}
