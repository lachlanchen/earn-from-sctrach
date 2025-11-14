# LazyEarn — Earn From Scratch + Lazy Money Lab

Earn.lazying.art is a cinematic GitHub Pages experience that mixes the **Earn From Scratch** playbook with the **Lazy Earn / Lazy Money** philosophy. This repo hosts the static site that lets visitors explore lazy income concepts, idea generators, and a newsletter-style CTA without touching a backend.

> _“Build less. Live more.”_ — LazyEarn ethos

---

## ✨ Highlights

- **Hero narrative** that introduces Lazy Money, Lazy Earn, and Earn From Scratch through a luxe neon aesthetic.
- **Modular sections** (glass cards, idea grid, CTA ritual) backed by `docs/index.html`, `docs/styles.css`, and `docs/script.js`.
- **Interactive extras**: animated stats, parallax drifts, lazy idea generator, smooth scrolling, reveal-on-scroll effects.
- **GitHub Pages ready**: everything lives under `docs/`, so `main /docs` can be published with a single toggle.

---

## 🚀 Quick start

```bash
git clone git@github.com:lachlanchen/LazyEarn.git
cd LazyEarn
open docs/index.html   # macOS (or use your browser of choice)
```

No build step needed—plain HTML, CSS, and vanilla JS.

---

## 🧬 Project structure

```
docs/
├── index.html   # Page content + sections
├── styles.css   # Cosmic glass aesthetic, responsive layout, animations
└── script.js    # Idea generator, smooth scrolling, parallax, CTA helper
```

Everything else (assets/fonts) is loaded from public CDNs, so deployments stay lightweight.

## 📈 Investment Research Vault

- `investment/high-growth-stocks.md` — full Markdown brief on nine high-growth U.S. equities across AI, biotech, semiconductors, clean energy, and cloud software.
- `investment_pdfs/high-growth-stocks/high-growth-stocks.pdf` — beautifully typeset PDF (authored as **LazyingArt**) generated via Pandoc → LaTeX (XeLaTeX). Recompile with:

  ```bash
  pandoc investment/high-growth-stocks.md \
    -s -V author="LazyingArt" -V title="High-Growth U.S. Stocks" \
    -o investment_pdfs/high-growth-stocks/high-growth-stocks.tex
  cd investment_pdfs/high-growth-stocks && xelatex high-growth-stocks.tex
  ```

Feel free to use the PDF as a downloadable handout or embed it in other LazyingArt properties.

---

## 🌐 Deploy to GitHub Pages

1. Push to `main`.
2. In the repo → **Settings → Pages**, pick `Branch: main /docs`.
3. (Optional) Add `earn.lazying.art` as the custom domain and point your DNS CNAME to `lachlanchen.github.io`.
4. Wait ~2 minutes for the build, then enjoy the lazy glow.

---

## 🧠 Remix ideas

LazyEarn is intentionally copy-friendly:

- Swap out copy in `#earn-from-scratch`, `#lazy-earn`, or `#lazy-money` sections to spotlight new experiments.
- Extend the generator by editing the `ideas` array in `docs/script.js`.
- Adjust colors or type ramps via CSS variables at the top of `docs/styles.css`.

---

## 🤝 Contributing

Feel free to fork, remix, or PR improvements—visual polish, new lazy-money experiments, accessibility tweaks, or translation layers are all welcome.  
Open an issue if you’d like to coordinate on larger creative directions.

---

## ❤️ Support the Lazy Lab

Maintaining open, beautifully-crafted experiments takes time, design, and hosting. If this project sparked ideas or helped you tell your story, consider supporting the broader Lazying ecosystem.

<div align="center">
<table style="margin:0 auto; text-align:center; border-collapse:collapse;">
  <tr>
    <td style="text-align:center; vertical-align:middle; padding:6px 12px;">
      <a href="https://chat.lazying.art/donate">https://chat.lazying.art/donate</a>
    </td>
    <td style="text-align:center; vertical-align:middle; padding:6px 12px;">
      <a href="https://chat.lazying.art/donate"><img src="https://raw.githubusercontent.com/lachlanchen/lachlanchen/main/figs/donate_button.svg" alt="Donate" height="44"></a>
    </td>
  </tr>
  <tr>
    <td style="text-align:center; vertical-align:middle; padding:6px 12px;">
      <a href="https://paypal.me/RongzhouChen">
        <img src="https://img.shields.io/badge/PayPal-Donate-003087?logo=paypal&logoColor=white" alt="Donate with PayPal">
      </a>
    </td>
    <td style="text-align:center; vertical-align:middle; padding:6px 12px;">
      <a href="https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400">
        <img src="https://img.shields.io/badge/Stripe-Donate-635bff?logo=stripe&logoColor=white" alt="Donate with Stripe">
      </a>
    </td>
  </tr>
  <tr>
    <td style="text-align:center; vertical-align:middle; padding:6px 12px;"><strong>WeChat</strong></td>
    <td style="text-align:center; vertical-align:middle; padding:6px 12px;"><strong>Alipay</strong></td>
  </tr>
  <tr>
    <td style="text-align:center; vertical-align:middle; padding:6px 12px;"><img alt="WeChat QR" src="https://raw.githubusercontent.com/lachlanchen/lachlanchen/main/figs/donate_wechat.png" width="240"/></td>
    <td style="text-align:center; vertical-align:middle; padding:6px 12px;"><img alt="Alipay QR" src="https://raw.githubusercontent.com/lachlanchen/lachlanchen/main/figs/donate_alipay.png" width="240"/></td>
  </tr>
</table>
</div>

**支援 / Donate**

- ご支援は研究・開発と運用の継続に役立ち、より多くのオープンなプロジェクトを皆さんに届ける力になります。  
- 你的支持将用于研发与运维，帮助我持续公开分享更多项目与改进。  
- Your support sustains my research, development, and ops so I can keep sharing more open projects and improvements.

---

Questions, collabs, or fun lazy-money ideas? DM @lachlanchen or email `lach@lazying.art`.
