import { useRequest } from "@/hooks/useRequest";
import { useTranslation } from "@/hooks/useTranslation";
import { useAuthStore, UserInfoProps } from "@/lib/contexts/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Button } from "@/components/Button";
import { LoginContainer } from "./login.styles";

export default function Login() {
  const t = useTranslation();
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
    <LoginContainer>
      <Button onClick={handleLogin}>{t("login")}</Button>
    </LoginContainer>
  );
}
