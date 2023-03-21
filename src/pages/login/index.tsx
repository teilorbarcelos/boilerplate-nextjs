// import { useRequest } from "@/hooks/useRequest";
import { useAuthStore } from "@/lib/contexts/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "./login.module.css";

export default function Login() {
  // const { request } = useRequest();
  const { loggedIn } = useAuthStore();
  const router = useRouter();

  const handleLogin = async () => {
    // const { data: response } = await request({
    //   method: "get",
    //   url: `/api/login-route`,
    // });
    useAuthStore.setState({ loggedIn: true });
  };

  useEffect(() => {
    if (loggedIn) {
      router.push("/");
    }
  }, [loggedIn, router]);

  return (
    <div className={styles.container}>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
