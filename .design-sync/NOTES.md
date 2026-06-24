# design-sync notes — zelda-hyrule-ui

Target Claude Design project: **Zelda Hyrule UI** (`94085206-6450-49e4-8cd3-6e91b06b683b`)

## Repo facts
- Monorepo (npm workspaces). DS package: `packages/react` → `zelda-hyrule-ui` v0.4.0 (React). Vue lib (`packages/vue`) is NOT synced here.
- Build: `npm run build --workspace zelda-hyrule-ui` (vite lib + tsc d.ts emit). dist entry = `dist/es/index.js`, types = `dist/types/index.d.ts`, CSS = `dist/index.css` (cssCodeSplit off, all styles in one file).
- `react`/`react-dom`/`@types/react` resolve at REPO-ROOT `node_modules` (workspace hoisting; `packages/react/node_modules` is sparse). Pass `--node-modules ./node_modules` (repo root), NOT the package's.
- Node pinned v24.15.0.
- Styling idiom: CSS-modules with scoped class names `zelda-[local]-[hash]`, hardcoded color literals (no `var(--*)` tokens). Brand font = "Hylia Serif" (`dist/files/HyliaSerif.*.ttf`, shipped via `@font-face` in dist/index.css). Body font stack falls back to Roboto/system.
- Assets (svg/png/ttf) emitted to `dist/files/` via `@laynezh/vite-plugin-lib-assets` (no inlining).
- 83 exported components across 16 groups. Composition source of truth: `demo/App.tsx` (3088 lines — per-component code examples + category map) and standalone showcase pages in `public/showcase/*.html`.
- No Storybook, no per-component doc files → `.prompt.md` synthesized from `.d.ts` + authored previews.

## Decisions
- Scope: author rich previews for ALL 83 components (user choice, first sync 2026-06-23).
- Upload path: incremental (project created empty this run).

## Known render warns
- `[FONT_MISSING]` for "Cinzel" and "Hiragino Sans GB" is EXPECTED and suppressed via `cfg.runtimeFontPrefixes`. Cinzel is an explicit serif fallback for the shipped brand font "Hylia Serif" (`@font-title: 'Hylia Serif','Cinzel',Georgia,serif`) — it never renders because Hylia Serif ships. Hiragino Sans GB is a macOS system CJK fallback in the body stack (`@font-body: 'Roboto',-apple-system,'PingFang SC','Hiragino Sans GB',sans-serif`). Body text intentionally uses host/system fonts. Brand-critical font (Hylia Serif) DOES ship.
- Default (unauthored) `[RENDER_THIN]`/`[RENDER_BLANK]` warns are expected on the icon/decoration/screen components whose floor card paints little with crash-prevention props — all 83 now have authored previews, so these don't recur once previews exist.
- `[RENDER_THIN] QuickSelector: variants render identically` — BENIGN. The `type` prop ("bow"|"weapons") is a no-op in the component, so both cells are pixel-identical by design. Renders styled + complete.
- `[RENDER_THIN] Sensor: variants render identically` — BENIGN. active/inactive differ only by a subtle glow in a still frame; both render the cyan sensor icon correctly.
- ~21 `[GRID_OVERFLOW]` warns are RESOLVED via `cfg.overrides.<Name> = {cardMode:"column"}` (wide cards) and `{cardMode:"single", primaryStory:...}` for Modal/ModalTutorial (portal/fixed overlays). Column cards can't re-flag by construction; expect these warns to be gone after rebuild.

## Preview authoring playbook (for future authors / re-syncs)
- **Dark backdrop is mandatory.** Card body is white; components are dark game UI (light text, cyan/translucent). Every preview cell wraps content in a div with `background: '#0a1628'` (the demo's navy) + generous padding. Sheikah/scanline/background/map-overlay components need an explicitly SIZED `position: relative` frame (e.g. 320x200) to have area to fill.
- **Source: `demo/App.tsx` `CODE_EXAMPLES`** (lines ~82-914) covers 74/83 components with canonical realistic usage — port it, sweep the variant axis, sanity-check props vs the emitted `.d.ts`. The 9 `*Screen` components are NOT in CODE_EXAMPLES (compose from `.d.ts` — they take only `children?`).
- **Screens** are full-bleed 16:9, paint their own dark bg (except QuickSelectorScreen, which is a translucent overlay needing a dark stage), take only `children?`. `cfg.overrides.<Screen> = {cardMode:single, viewport:1280x720}` is set for all 9. MenuScreen needs realistic inventory injected via `children` (bare it's empty chrome).
- **No-op props (real component behavior, not preview bugs)** — don't try to sweep these as axes: `QuickSelector.type`, `SettingsToggle.type` (real axes: options/value/selected/label; needs container ≥760px or labels ellipsize), `DirectionalArrow.variant` (real axis: direction), `TextOrnamentCorner.showTriforce` (real axis: position).
- **Width/clip gotchas:** `Divider` needs width-constrained container; `DialogFloating` bubble (dialog variant) clips text past ~13 chars (no ellipsis) — keep bubble text short; `Illustration` is absolute+`mix-blend:screen` and collapses to 0 height in a flex row — wrap in a sized box (~150x210) on a slightly lighter panel.
- **Group placement:** HealthBar + StaminaWheel emit under the `general` group (not `hud`).
- Overlay components (Modal, ModalTutorial) render contained in-card when composed open in a `position:relative; overflow:hidden` stage — no cardMode override needed.

## Re-sync risks
- demo/App.tsx is the canonical composition source; previews port its JSX. If the demo diverges from shipped API, ported previews can rot — sanity-check against current `<Name>.d.ts`.
- Only "Hylia Serif" ships. Body/system fonts (Roboto, Hiragino, Cinzel) are host-provided by design — cards render body text in system sans.
- Screens are pinned to `cardMode:single` (one canonical view). If a screen ever gains a real variant axis (more named exports), drop its override so the extra cells show.
- MenuScreen, ItemBG, MenuSections, SheikahCompendiumEntry previews inject emoji / hand-composed children as item-art stand-ins (the DS ships no item-art exports). If the library later ships item icons, re-author those previews to use them.
- 83/83 components have authored previews. All graded `good` on first sync (2026-06-23).
