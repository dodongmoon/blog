import type { Metadata } from "next";
import SalesPage from "./sales-page";
import "./sales.css";

export const metadata: Metadata = {
  title: "블로그 도우미 | 반복은 줄이고, 블로그에 집중하세요",
  description:
    "키워드 검색부터 공감, 이웃 신청, 계정 관리까지. 내 컴퓨터에서 시작하는 더 간결한 네이버 블로그 관리. macOS와 Windows를 지원합니다.",
  openGraph: {
    title: "블로그 도우미 | 블로그 관리의 새로운 여유",
    description:
      "매일의 반복 작업은 가볍게. 키워드 검색, 공감, 이웃 관리를 한곳에서.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function Page() {
  const safePurchaseUrl = (value: string | undefined) => {
    if (!value) return undefined;
    try {
      const url = new URL(value);
      return url.protocol === "https:" ? url.href : undefined;
    } catch {
      return undefined;
    }
  };
  return (
    <SalesPage
      oneTimeUrl={safePurchaseUrl(process.env.SALES_ONE_TIME_URL)}
      monthlyUrl={safePurchaseUrl(process.env.SALES_MONTHLY_URL)}
    />
  );
}
