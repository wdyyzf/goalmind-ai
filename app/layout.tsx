import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'GoalMind AI — 足球预测综合平台',
  description: 'AI 透明化 + 副业小试水 = 月入几千的稳健路径',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main className="max-w-[1280px] mx-auto px-6 py-8" style={{ minHeight: 'calc(100dvh - 64px)' }}>
          {children}
        </main>
        <footer className="text-center py-10 mt-16" style={{ borderTop: '1px solid var(--line)' }}>
          <div className="max-w-2xl mx-auto px-6">
            <div className="text-[11px] leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>
              ⚠️ 投注有风险 · 本平台仅作"信息聚合"+"分析工具"· 不直接提供"投注建议"<br />
              数据来源：搜狐 / 腾讯 / 球迷屋 / 捷报比分（多源交叉验证）· 模型 v3.0 Micro+ 200 套餐
            </div>
            <div className="text-[11px]" style={{ color: 'var(--text-muted)' }}>
              © 2026 GoalMind AI · MVP · Next.js 14 + Tailwind · 高级 美 全
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
