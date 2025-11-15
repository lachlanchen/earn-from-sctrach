# Investment PDF Build Notes

Each dossier folder (e.g. `high-growth-stocks`, `financial_freedom`, `financial_freedom_zh`) ships with a `build/` subdirectory. Run XeLaTeX so every artifact (`.aux`, `.log`, `.out`, `.pdf`) lands inside that folder, then copy the finished PDF back to the folder root (and into `docs/investment_pdfs/...` for GitHub Pages).

```bash
cd investment_pdfs/high-growth-stocks
mkdir -p build
xelatex -output-directory=build high-growth-stocks.tex
cp build/high-growth-stocks.pdf ./high-growth-stocks.pdf
cp build/high-growth-stocks.pdf ../../docs/investment_pdfs/high-growth-stocks/high-growth-stocks.pdf
```

The root `.gitignore` already ignores the contents of every `build/` folder plus the usual LaTeX scratch files, so you no longer have to manually delete them before committing.
