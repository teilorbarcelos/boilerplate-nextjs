import { useRequest } from "@/hooks/useRequest";
import { useAuthStore, UserInfoProps } from "@/lib/contexts/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "./login.module.css";

export default function Login() {
  const { request } = useRequest();
  const { loggedIn } = useAuthStore();
  const router = useRouter();

  const handleLogin = async () => {
    const { data: response } = await request<UserInfoProps>({
      method: "post",
      url: `/login-route`,
    });

    if (response.id)
      useAuthStore.setState({ loggedIn: true, userInfo: response });
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
