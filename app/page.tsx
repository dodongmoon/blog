import type { Metadata } from "next";
import SalesPage from "./sales-page";
import "./sales.css";

export const metadata: Metadata = {
  title: "블로그 도우미 | 직접 운영하는 블로그로 보여드립니다",
  description:
    "제작자가 직접 운영하는 도루프의 미증시 요약에서 블로그 도우미의 활용 사례를 확인하세요. 이웃과 게시글의 공감·댓글을 공개하고, 꾸준한 소통을 돕는 관리 기능을 소개합니다.",
  openGraph: {
    title: "블로그 도우미 | 실제 블로그에서 확인하는 운영 사례",
    description:
      "직접 운영하는 블로그의 이웃과 공감·댓글을 확인하세요. 키워드 검색부터 공감·이웃 관리까지, 꾸준한 소통을 위한 도구.",
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
