# GoalMind AI — MVP Demo

> **足球预测综合平台 · 副业小试水套餐**
> 模型 v3.0 Micro+ 200 套餐 · 14 条补丁 · 6 问过滤器

## 🚀 一键部署（4 选 1）

| 平台 | 按钮 | 备注 |
|---|---|---|
| **Vercel** | [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wdyyzf/goalmind-ai) | 你之前用 Vercel 卡 SSO，可重试 |
| **Netlify** | [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/wdyyzf/goalmind-ai) | **推荐** · 无 SSO 强制 · 公开访问 |
| **Cloudflare Pages** | [![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/wdyyzf/goalmind-ai) | 亚洲 CDN 最快 |
| **Render** | [![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/wdyyzf/goalmind-ai) | 简单稳定 |

> **点上面任意按钮 → 登录 → Deploy → 拿到 URL。** 3 步搞定（OAuth 登录是必须的，没法绕过）。

## 🎯 产品定位

- **全球首个"AI 透明化 + 副业小试水"的足球预测综合平台**
- 主动放弃率 >80% 的"少而精"哲学
- 完整复盘文化（每日 + 每周 + 每月 + 模型演进日志）
- 副业小试水专属套餐（每日 1 注 2串1 200元）

## 🛠️ 技术栈

- **Next.js 14** + TypeScript
- **Tailwind CSS** (暗色高级主题)
- **Framer Motion** (动画预留)
- 数据嵌入版（暂无后端）

## 📦 项目结构

```
goalmind-ai/
├── app/
│   ├── layout.tsx              # 根布局 + Header
│   ├── page.tsx                # 首页（4 大模块）
│   ├── globals.css             # 全局样式
│   ├── predictions/page.tsx    # 预测中心
│   ├── model/page.tsx          # 模型解读
│   └── side/page.tsx           # 副业小试水套餐
├── components/
│   ├── Header.tsx              # 顶部导航
│   └── MatchCard.tsx           # 比赛卡片
├── lib/
│   ├── types.ts                # TypeScript 类型
│   └── data.ts                 # 真实数据（22场样本 + 14 条补丁 + 6 问过滤器）
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 自动部署（Vercel）
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── tsconfig.json
├── vercel.json                 # Vercel 部署配置（Hobby 兼容）
├── netlify.toml                # Netlify 部署配置
├── .gitignore
└── README.md
```

## 🚀 快速启动（本地开发）

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev

# 3. 访问 http://localhost:3000
```

## 📊 4 个核心页面

| 页面 | URL | 内容 |
|---|---|---|
| **首页** | `/` | Hero + 4 卡片统计 + 今日预测 + 副业套餐 + 模型动态 + 新闻 |
| **预测中心** | `/predictions` | 6 问过滤器状态 + 印尼vs也门深度预测 + 14 条补丁 + 反对论点 |
| **模型解读** | `/model` | 4 卡片战绩 + 14 条补丁 P0-P3 优先级树 + 模型演进日志 |
| **副业套餐** | `/side` | 5 大不变量 + 6月3日套餐 + 资金管理 + 反人性规则 |

## ⚠️ 法律合规

- **本平台仅作"信息聚合"+"分析工具"** · 不直接提供"投注建议"
- **投注有风险** · 数据来源已多源交叉验证
- 中国体彩合规：仅做分析工具，避免"投注建议"措辞

## 📈 后续规划

### Phase 1 (当前) — MVP
- ✅ 单文件 HTML demo（已完成）
- ✅ Next.js 完整项目（已完成）
- ⏳ **部署待用户选择平台**（4 选 1，OAuth 登录 + Deploy 即可）

### Phase 2 (1-2 周) — 内容运营
- [ ] 球迷屋数据抓取 API
- [ ] 9 大功能模块（新闻/直播/跟单/账户）
- [ ] SEO 内容生产
- [ ] 移动端响应式

### Phase 3 (1-3 月) — AI 差异化
- [ ] 自动化预测 pipeline
- [ ] 跟单服务
- [ ] 移动端 App

### Phase 4 (3-6 月) — 规模化
- [ ] iOS / Android App
- [ ] 国际化（英文/西班牙文）
- [ ] 企业 API
- [ ] 投资引入

## 📞 联系

- 副业小试水套餐：每日 1 注 2串1 200元
- 模型版本：v3.0 Micro+ 200
- 数据样本：22 场
- 主动放弃率：33% → 目标 65%

---

⚠️ **Disclaimer**: 投注有风险，请理性看待。本平台仅作分析工具，不构成任何投注建议。

<!-- last-verified: 2026-06-04 23:42 -->
