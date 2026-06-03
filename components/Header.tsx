'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { id: 'home', label: '首页', path: '/' },
  { id: 'predictions', label: '预测', path: '/predictions' },
  { id: 'model', label: '模型解读', path: '/model' },
  { id: 'side', label: '副业套餐', path: '/side' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl" style={{ background: 'rgba(10, 15, 30, 0.85)', borderBottom: '1px solid var(--line)' }}>
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-extrabold text-lg" style={{ background: 'var(--gradient-gold)', color: '#0A0F1E' }}>
              G
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              GoalMind <span style={{ color: 'var(--accent-gold)' }}>AI</span>
            </span>
          </Link>
          <nav className="flex gap-1">
            {tabs.map(tab => (
              <Link
                key={tab.id}
                href={tab.path}
                className={`tab-button ${pathname === tab.path ? 'active' : ''}`}
              >
                {tab.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
            v3.0 Micro+ 200套餐
          </span>
          <button className="btn-ghost" style={{ padding: '6px 14px', fontSize: '12px' }}>登录</button>
          <button className="btn-primary" style={{ padding: '6px 14px', fontSize: '12px' }}>订阅 VIP</button>
        </div>
      </div>
    </header>
  );
}
