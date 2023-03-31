import { useTranslation } from "@/hooks/useTranslation";

export default function Home() {
  const t = useTranslation();
  return (
    <h1 className="text-3xl font-bold underline">
      {t("helloWorld")}
    </h1>
  );
}
