"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleCheck,
  Command,
  Heart,
  LayoutDashboard,
  LockKeyhole,
  Monitor,
  Pause,
  Play,
  Plus,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";

type View = "overview" | "keywords" | "accounts";

const questions = [
  [
    "어떤 컴퓨터에서 사용할 수 있나요?",
    "Windows x64와 macOS를 지원합니다. Mac은 Apple Silicon과 Intel용 설치 파일을 각각 제공합니다. Google Chrome이 설치되어 있어야 하며, 사용 중에는 인터넷 연결이 필요합니다.",
  ],
  [
    "프로그램을 처음 써도 괜찮을까요?",
    "앱을 설치한 뒤 네이버 계정을 연동하고, 관심 키워드와 작업 항목을 설정하면 됩니다. Node.js를 설치하거나 터미널 명령어를 입력할 필요가 없습니다. 네이버가 추가 인증을 요청하는 경우에는 직접 인증을 완료해주세요.",
  ],
  [
    "여러 블로그 계정을 관리할 수 있나요?",
    "여러 계정을 등록하고 전환할 수 있습니다. 계정별로 키워드와 작업 설정을 구분해 관리할 수 있어, 블로그마다 다른 운영 방식으로 사용할 수 있습니다.",
  ],
  [
    "로그인 정보는 어떻게 보관되나요?",
    "데스크톱 앱은 로그인 세션과 저장 대상 설정을 운영체제의 보안 저장소를 이용해 이 컴퓨터에 암호화하여 저장합니다. 네이버 비밀번호는 파일에 저장하지 않습니다. 보안 저장소를 사용할 수 없는 경우 앱에서 안내합니다.",
  ],
  [
    "컴퓨터를 꺼도 작업이 계속되나요?",
    "작업은 내 컴퓨터에서 실행됩니다. 앱 창을 최소화해도 계속되지만, 앱을 종료하거나 컴퓨터가 잠자기에 들어가면 진행되지 않습니다. 작업 중에는 컴퓨터와 인터넷 연결을 유지해주세요.",
  ],
  [
    "사용 전에 알아두어야 할 점이 있나요?",
    "블로그 도우미는 네이버의 공식 서비스가 아닌 독립 프로그램입니다. 네이버 서비스 정책과 이용 한도를 확인해 사용해주세요. 방문자 수, 검색 노출, 이웃 증가를 보장하지 않으며, 서비스 정책이나 인증 방식에 따라 일부 작업이 제한될 수 있습니다.",
  ],
];

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={`sales-brand${footer ? " footer-brand" : ""}`}
      href="#top"
      aria-label="블로그 도우미 처음으로"
    >
      <span className="brand-symbol" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      블로그 도우미<span className="brand-dot">.</span>
    </a>
  );
}

function ProductPreview() {
  const [view, setView] = useState<View>("overview");
  const [running, setRunning] = useState(false);
  const [keywords, setKeywords] = useState([
    "일상 기록",
    "국내 여행",
    "카페 추천",
  ]);
  const [keyword, setKeyword] = useState("");
  const [account, setAccount] = useState(0);
  const [notice, setNotice] = useState("");
  const menu = [
    { id: "overview", label: "작업 대시보드", icon: LayoutDashboard },
    { id: "keywords", label: "키워드 관리", icon: Search },
    { id: "accounts", label: "계정 관리", icon: UsersRound },
  ] as const;

  return (
    <div className="preview-wrap" id="preview">
      <div className="product-window">
        <div className="window-bar">
          <div className="window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <span>Blog Helper</span>
          <span className="preview-label">인터랙티브 미리보기</span>
        </div>
        <div className="product-body">
          <aside className="product-sidebar" aria-label="제품 미리보기 메뉴">
            <div className="mini-brand">
              <span className="mini-brand-mark">b</span>
              <strong>블로그 도우미</strong>
            </div>
            <div className="preview-menu">
              {menu.map(({ id, label, icon: Icon }) => (
                <button
                  type="button"
                  key={id}
                  aria-pressed={view === id}
                  className={view === id ? "selected" : ""}
                  onClick={() => setView(id)}
                >
                  <Icon size={17} aria-hidden="true" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
            <div className="sidebar-bottom">
              <ShieldCheck size={16} aria-hidden="true" />
              <span>내 컴퓨터에서 실행</span>
            </div>
          </aside>
          <div className="product-content">
            <div className="product-heading">
              <div>
                <span className="product-eyebrow">MY BLOG WORKSPACE</span>
                <h2>
                  {view === "overview"
                    ? "오늘도, 가볍게 시작해요"
                    : view === "keywords"
                      ? "관심 있는 주제부터"
                      : "내 블로그를 한곳에서"}
                </h2>
              </div>
              <div
                className="account-avatar"
                aria-label={`선택한 예시 계정 ${account + 1}`}
              >
                {account === 0 ? "J" : "D"}
              </div>
            </div>
            {view === "overview" && (
              <>
                <div className="preview-stats">
                  <div>
                    <span>
                      <Heart size={15} aria-hidden="true" />
                      오늘의 공감
                    </span>
                    <strong>
                      128<small>건</small>
                    </strong>
                    <p>차곡차곡 쌓이는 소통</p>
                  </div>
                  <div>
                    <span>
                      <UsersRound size={15} aria-hidden="true" />
                      이웃 신청
                    </span>
                    <strong>
                      24<small>건</small>
                    </strong>
                    <p>새로운 연결의 시작</p>
                  </div>
                  <div>
                    <span>
                      <Search size={15} aria-hidden="true" />
                      선택한 키워드
                    </span>
                    <strong>
                      {keywords.length}
                      <small>개</small>
                    </strong>
                    <p>내 관심사에 맞춰서</p>
                  </div>
                </div>
                <div className="preview-task">
                  <div className="task-top">
                    <strong>나의 작업 설정</strong>
                    <span>
                      <span className="green-dot" />
                      계정 연결됨
                    </span>
                  </div>
                  <div className="task-keywords">
                    {keywords.length ? (
                      keywords.map((k) => <span key={k}># {k}</span>)
                    ) : (
                      <span>키워드 관리에서 추가해주세요</span>
                    )}
                  </div>
                  <div className="task-options">
                    <span>
                      <Check size={14} aria-hidden="true" />
                      공감 보내기
                    </span>
                    <span>
                      <Check size={14} aria-hidden="true" />
                      이웃 신청하기
                    </span>
                    <span className="speed-label">
                      <Settings2 size={14} aria-hidden="true" />
                      기본 속도
                    </span>
                  </div>
                  <button
                    type="button"
                    className={`demo-run${running ? " is-running" : ""}`}
                    onClick={() => setRunning(!running)}
                  >
                    {running ? (
                      <Pause size={16} aria-hidden="true" />
                    ) : (
                      <Play size={16} fill="currentColor" aria-hidden="true" />
                    )}
                    {running ? "미리보기 일시정지" : "작업 시작 미리보기"}
                  </button>
                </div>
                <div className="preview-status" role="status">
                  <span className={running ? "green-dot" : "idle-dot"} />
                  {running
                    ? "예시 작업을 실행 중이에요. 실제 계정에는 연결되지 않아요."
                    : "준비 완료. 버튼을 눌러 작업 흐름을 확인해보세요."}
                </div>
              </>
            )}
            {view === "keywords" && (
              <div className="demo-panel">
                <p>내 블로그와 어울리는 키워드를 모아보세요.</p>
                <form
                  className="keyword-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const next = keyword.trim();
                    if (!next) return;
                    if (keywords.includes(next)) {
                      setNotice("이미 추가한 키워드예요.");
                      return;
                    }
                    if (keywords.length >= 6) {
                      setNotice(
                        "미리보기에서는 최대 6개까지 추가할 수 있어요.",
                      );
                      return;
                    }
                    setKeywords([...keywords, next]);
                    setKeyword("");
                    setNotice(`${next} 키워드를 추가했어요.`);
                  }}
                >
                  <label className="sales-sr-only" htmlFor="demo-keyword">
                    미리보기 키워드
                  </label>
                  <input
                    id="demo-keyword"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    maxLength={20}
                    placeholder="예: 제주 여행"
                    autoComplete="off"
                  />
                  <button type="submit" aria-label="키워드 추가">
                    <Plus size={20} aria-hidden="true" />
                  </button>
                </form>
                <ul className="keyword-list" role="list">
                  {keywords.map((k) => (
                    <li key={k}>
                      <span>
                        <Search size={15} aria-hidden="true" />
                        {k}
                      </span>
                      <button
                        type="button"
                        aria-label={`${k} 키워드 삭제`}
                        onClick={() => {
                          setKeywords(keywords.filter((item) => item !== k));
                          setNotice(`${k} 키워드를 삭제했어요.`);
                        }}
                      >
                        <X size={16} aria-hidden="true" />
                      </button>
                    </li>
                  ))}
                </ul>
                <p className="demo-hint" role="status">
                  {notice || "이곳에서 바꾼 내용은 미리보기에만 적용돼요."}
                </p>
              </div>
            )}
            {view === "accounts" && (
              <div className="demo-panel">
                <p>계정마다 다른 블로그, 관리는 한곳에서.</p>
                {["일상을 기록하는 블로그", "여행을 담는 블로그"].map(
                  (name, i) => (
                    <button
                      key={name}
                      type="button"
                      className={`demo-account${account === i ? " active" : ""}`}
                      onClick={() => setAccount(i)}
                      aria-pressed={account === i}
                    >
                      <span className={`account-avatar avatar-${i}`}>
                        {i === 0 ? "J" : "D"}
                      </span>
                      <span>
                        <strong>{name}</strong>
                        <small>
                          {i === 0 ? "daily_journal" : "travel_diary"} · 예시
                          계정
                        </small>
                      </span>
                      {account === i ? (
                        <CircleCheck size={21} aria-hidden="true" />
                      ) : (
                        <span className="account-select">선택</span>
                      )}
                    </button>
                  ),
                )}
                <div className="account-note">
                  <LockKeyhole size={18} aria-hidden="true" />
                  <p>
                    내 컴퓨터에 보관하는 로그인 세션.
                    <br />
                    계정별 설정도 따로 관리해요.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="floating-note">
        <span>
          <Check size={18} strokeWidth={3} aria-hidden="true" />
        </span>
        <div>
          <strong>반복 작업은 맡겨두세요</strong>
          <small>당신의 시간은 더 소중하니까요.</small>
        </div>
      </div>
      <p className="preview-caption">
        기능 이해를 돕기 위한 예시 화면과 데이터입니다. 메뉴와 버튼을 직접
        눌러보세요.
      </p>
    </div>
  );
}

export default function SalesPage({
  oneTimeUrl,
  monthlyUrl,
}: {
  oneTimeUrl?: string;
  monthlyUrl?: string;
}) {
  const [plan, setPlan] = useState<"one-time" | "monthly">("one-time");
  const purchaseUrl = plan === "one-time" ? oneTimeUrl : monthlyUrl;
  return (
    <div className="sales-page" id="top">
      <a className="sales-skip" href="#sales-main">
        본문 바로가기
      </a>
      <header className="sales-header">
        <div className="sales-container header-inner">
          <Brand />
          <nav aria-label="주요 메뉴">
            <a href="#features">주요 기능</a>
            <a href="#how-it-works">사용 방법</a>
            <a href="#faq">자주 묻는 질문</a>
          </nav>
          <a href="#pricing" className="header-cta">
            시작하기
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </header>
      <main id="sales-main" tabIndex={-1}>
        <section className="hero sales-container">
          <div className="hero-pill">
            <span />
            블로그 관리의 새로운 여유
            <ArrowRight size={13} aria-hidden="true" />
          </div>
          <h1>
            블로그에 쏟는 정성은 그대로.
            <br />
            <span>반복하는 일만 가볍게.</span>
          </h1>
          <p className="hero-description">
            키워드 검색부터 공감, 이웃 관리까지 한곳에서.
            <br />
            블로그 도우미와 함께, 좋은 콘텐츠에 더 집중하세요.
          </p>
          <div className="hero-actions">
            <a className="sales-button primary" href="#pricing">
              블로그 도우미 시작하기
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="sales-button secondary" href="#preview">
              제품 미리보기
              <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="platforms">
            <span>
              <Command size={14} aria-hidden="true" />
              macOS
            </span>
            <span>
              <Monitor size={14} aria-hidden="true" />
              Windows
            </span>
            <span className="platform-divider" />
            설치해서 간편하게
          </div>
          <ProductPreview />
        </section>
        <div className="benefit-strip sales-container">
          <span>
            <Search aria-hidden="true" />
            관심 키워드 검색
          </span>
          <span>
            <Heart aria-hidden="true" />
            공감·이웃 관리
          </span>
          <span>
            <UsersRound aria-hidden="true" />
            여러 계정을 한곳에
          </span>
          <span>
            <ShieldCheck aria-hidden="true" />내 컴퓨터에서 실행
          </span>
        </div>
        <section className="features-section" id="features">
          <div className="sales-container">
            <div className="section-heading">
              <span className="eyebrow">LESS WORK, MORE FOCUS</span>
              <h2>
                매일 하던 그 일,
                <br />
                이제 더 간결하게.
              </h2>
              <p>
                여러 화면을 오가던 블로그 관리.
                <br className="mobile-break" /> 필요한 기능만 한곳에 모았어요.
              </p>
            </div>
            <div className="feature-grid">
              <article className="feature-card keyword-feature">
                <span className="feature-icon blue">
                  <Search size={23} aria-hidden="true" />
                </span>
                <h3>
                  내 블로그에 맞는 주제로
                  <br />
                  새로운 연결을 찾아요
                </h3>
                <p>
                  관심 키워드를 저장하고 원하는 주제의 글을 검색하세요.
                  <br className="desktop-break" />
                  매번 같은 검색어를 입력할 필요 없이요.
                </p>
                <div className="keyword-visual" aria-hidden="true">
                  <div className="search-visual">
                    <Search size={21} />
                    <span>어떤 이야기에 관심 있나요?</span>
                    <span className="search-enter">↵</span>
                  </div>
                  <div className="keyword-cloud">
                    <span>일상 기록</span>
                    <span className="active">
                      국내 여행
                      <Check size={14} />
                    </span>
                    <span>카페 추천</span>
                    <span>사진</span>
                    <span>인테리어</span>
                  </div>
                </div>
                <span className="feature-footnote">
                  키워드 저장 · 주제별 검색
                </span>
              </article>
              <article className="feature-card connection-feature">
                <span className="feature-icon coral">
                  <Heart size={23} aria-hidden="true" />
                </span>
                <h3>
                  마음을 전하는 일은 쉽게.
                  <br />
                  반복 작업은 가볍게.
                </h3>
                <p>
                  공감과 이웃 신청을 원하는 설정으로 관리하세요.
                  <br className="desktop-break" />
                  작업 속도와 중지도 직접 조절할 수 있어요.
                </p>
                <div className="connection-visual" aria-hidden="true">
                  <div className="connection-line" />
                  <div className="person-bubble person-left">
                    <UserRound size={25} />
                    <span>새로운 이웃</span>
                  </div>
                  <div className="heart-bubble">
                    <Heart size={35} fill="currentColor" />
                  </div>
                  <div className="person-bubble person-right">
                    <UserRound size={25} />
                    <span>나의 블로그</span>
                  </div>
                  <span className="connection-tag">
                    <Check size={13} />
                    소통을 더 간편하게
                  </span>
                </div>
                <span className="feature-footnote">
                  공감 · 이웃 신청 · 작업 제어
                </span>
              </article>
            </div>
            <article className="control-feature">
              <div>
                <span className="eyebrow">EVERYTHING IN ONE PLACE</span>
                <h3>
                  계정이 여러 개여도,
                  <br />
                  관리는 한눈에.
                </h3>
                <p>
                  계정마다 키워드와 작업 설정을 따로 관리하고,
                  <br />
                  작업 기록에서 진행 상황을 확인하세요.
                </p>
                <a href="#preview" className="text-link">
                  제품 미리보기
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
              <div className="account-visual" aria-hidden="true">
                <div className="account-visual-top">
                  <span>나의 블로그</span>
                  <UsersRound size={18} />
                </div>
                <div className="account-visual-row">
                  <span className="account-avatar">J</span>
                  <div>
                    <strong>일상을 기록하는 블로그</strong>
                    <small>일상 기록 · 카페 추천</small>
                  </div>
                  <span className="account-badge">선택됨</span>
                </div>
                <div className="account-visual-row">
                  <span className="account-avatar avatar-1">D</span>
                  <div>
                    <strong>여행을 담는 블로그</strong>
                    <small>국내 여행 · 사진</small>
                  </div>
                  <span className="account-arrow">
                    <ArrowRight size={16} />
                  </span>
                </div>
                <div className="account-visual-bottom">
                  <LockKeyhole size={14} />
                  계정별로 구분되는 나만의 작업 공간
                </div>
              </div>
            </article>
          </div>
        </section>
        <section className="how-section sales-container" id="how-it-works">
          <div className="section-heading">
            <span className="eyebrow">A SIMPLE START</span>
            <h2>
              시작은 단순하게.
              <br />세 단계면 준비 끝.
            </h2>
          </div>
          <ol className="steps" role="list">
            <li>
              <span className="step-number">01</span>
              <div className="step-icon">
                <Monitor size={28} aria-hidden="true" />
              </div>
              <h3>내 컴퓨터에 설치하고</h3>
              <p>
                사용하는 운영체제에 맞는
                <br />
                앱을 설치해주세요.
              </p>
              <span className="step-detail">macOS · Windows</span>
            </li>
            <li>
              <span className="step-number">02</span>
              <div className="step-icon">
                <UserRound size={28} aria-hidden="true" />
              </div>
              <h3>블로그 계정을 연결한 뒤</h3>
              <p>
                네이버 계정으로 로그인하고
                <br />
                필요한 인증을 완료하세요.
              </p>
              <span className="step-detail">Google Chrome 필요</span>
            </li>
            <li>
              <span className="step-number">03</span>
              <div className="step-icon">
                <Play size={26} aria-hidden="true" />
              </div>
              <h3>원하는 작업을 시작하세요</h3>
              <p>
                키워드와 작업 항목을 선택하면
                <br />
                나만의 관리 루틴이 완성돼요.
              </p>
              <span className="step-detail">
                설정부터 진행 확인까지 한곳에서
              </span>
            </li>
          </ol>
        </section>
        <section className="trust-section">
          <div className="sales-container trust-inner">
            <span className="trust-icon">
              <ShieldCheck size={37} aria-hidden="true" />
            </span>
            <div>
              <h2>
                내 작업은 내 컴퓨터에서.
                <br className="mobile-break" /> 정보 보관도 신중하게.
              </h2>
              <p>
                로그인 세션과 저장 대상 설정은 운영체제의 보안 저장소로 암호화해
                보관합니다.
                <br className="desktop-break" />
                네이버 비밀번호는 파일에 저장하지 않아요.
              </p>
            </div>
            <span className="trust-detail">데스크톱 앱 기준</span>
          </div>
        </section>
        <section className="pricing-section sales-container" id="pricing">
          <div className="pricing-intro">
            <span className="eyebrow">MAKE ROOM FOR YOUR BLOG</span>
            <h2>
              좋은 글을 위한 시간,
              <br />
              이제 되찾아보세요.
            </h2>
            <p>
              반복하던 관리에 여유를 더하는 도구.
              <br />
              블로그 도우미로 시작하세요.
            </p>
            <div className="pricing-platforms">
              <span>
                <Command size={18} aria-hidden="true" />
                macOS
              </span>
              <span>
                <Monitor size={18} aria-hidden="true" />
                Windows
              </span>
            </div>
          </div>
          <div className="pricing-card">
            <div className="pricing-top">
              <span className="mini-brand-mark">b</span>
              <span className="pricing-tag">DESKTOP APP</span>
            </div>
            <h3>블로그 도우미</h3>
            <p className="plan-description">
              꾸준한 블로그 운영을 위한 나만의 도구
            </p>
            <div className="plan-switch" role="group" aria-label="구매 방식">
              <button
                type="button"
                aria-pressed={plan === "one-time"}
                onClick={() => setPlan("one-time")}
              >
                한 번에 구매
              </button>
              <button
                type="button"
                aria-pressed={plan === "monthly"}
                onClick={() => setPlan("monthly")}
              >
                월 구독
              </button>
            </div>
            <div className="plan-price" aria-live="polite" aria-atomic="true">
              <div className="price-value">
                {plan === "one-time" ? "450,000" : "50,000"}
                <span>원{plan === "monthly" ? " / 월" : ""}</span>
              </div>
              <p className="price-note">
                {plan === "one-time"
                  ? "한 번 결제로 구매하는 일시불 요금"
                  : "매월 결제하는 구독 요금"}
              </p>
            </div>
            <ul>
              {[
                "관심 키워드 검색 및 관리",
                "공감 · 이웃 신청 작업 관리",
                "여러 계정과 계정별 설정 관리",
                "작업 기록 확인 및 실행 제어",
                "macOS · Windows 지원",
              ].map((item) => (
                <li key={item}>
                  <Check size={17} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            {purchaseUrl ? (
              <a
                className="sales-button primary purchase-button"
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                구매 안내 확인하기
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            ) : (
              <button
                className="sales-button pending-button"
                type="button"
                disabled
              >
                구매 연결 준비 중<ArrowRight size={18} aria-hidden="true" />
              </button>
            )}
            <span className="pricing-bottom">
              <LockKeyhole size={13} aria-hidden="true" />
              {purchaseUrl
                ? "구매 전 지원 환경을 확인해주세요"
                : "구매 페이지는 곧 연결될 예정이에요"}
            </span>
          </div>
        </section>
        <section className="faq-section sales-container" id="faq">
          <div className="section-heading">
            <span className="eyebrow">GOOD TO KNOW</span>
            <h2>궁금한 점을 모았어요.</h2>
          </div>
          <div className="faq-list">
            {questions.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <ChevronDown size={20} aria-hidden="true" />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="closing-section">
          <div className="sales-container">
            <span className="closing-icon">
              <Sparkles size={26} aria-hidden="true" />
            </span>
            <h2>
              당신의 블로그에는
              <br />
              당신의 이야기가 더 필요하니까.
            </h2>
            <p>반복은 줄이고, 기록하는 즐거움은 더하세요.</p>
            <a className="sales-button primary" href="#pricing">
              블로그 도우미 시작하기
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <footer className="sales-footer sales-container">
        <div className="footer-top">
          <Brand footer />
          <a href="#faq">
            자주 묻는 질문
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
        <p>블로그에 집중할 수 있도록, 블로그 도우미.</p>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Blog Helper.</span>
          <span>블로그 도우미는 네이버와 제휴하지 않은 독립 서비스입니다.</span>
        </div>
      </footer>
    </div>
  );
}
