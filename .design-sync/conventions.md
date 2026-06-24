# Building with Zelda Hyrule UI

Fan-made *Breath of the Wild* game-UI: HUD meters, menus, dialogs, map markers, Sheikah-slate
pieces, quest cards, full game screens. The library ships its own compiled CSS and brand font —
you do **not** write component CSS.

## Setup
- **No provider or wrapper.** Import a component and render it directly.
- **Load `styles.css` once at the app root.** It `@import`s the brand font ("Hylia Serif") and every
  component style (`_ds_bundle.css`). Nothing is styled without it.
- **These are DARK game-UI components** — light/cream text, cyan and translucent panels, gold accents.
  They are built to sit on a dark surface (deep navy / near-black, or a game-screenshot backdrop).
  On a white or light background, the light-text pieces (titles, the `ghost` button, Sheikah
  components) are effectively invisible. **Always place them on a dark container**, e.g.
  `background: '#0a1628'`. This is the single most common mistake to avoid.

## Styling idiom: props, not classes
There are **no utility classes** and **no exposed CSS tokens** (`var(--*)`). You never add a `className`
to restyle these — each component is fully styled internally, and you choose its look through **enum
props**. The vocabulary is the props themselves:

| Component | Key props |
|---|---|
| `Button` | `variant: "primary" \| "sheikah" \| "ghost" \| "danger"`, `size: "small" \| "middle" \| "large"`, `loading`, `disabled`, `block` |
| `Dialog` | `type: "speech" \| "sheikah" \| "written"`, `speaker`, `showContinue` |
| `QuestListItem` | `questType: "main" \| "side" \| "shrine" \| "memory"`, `state: "default" \| "marked" \| "completed" \| "unmarked"` |
| `TitleQuest` | `questType: "main" \| "side" \| "shrine"`, `complete` |
| icon/art pieces (`MapIcon`, `SheikahRune`, `WeatherIcon`, `Temperature`, `DivineBeast`, …) | a `type`/value enum that selects which art renders |

For **your own layout** (rows, grids, spacing, and the required dark backdrop) use plain CSS or inline
styles — the library provides components, not a layout/utility system.

## Where the truth is
- `styles.css` (and its `@import`s) — the real shipped styles + `@font-face`.
- Per component: `components/<group>/<Name>/<Name>.prompt.md` (usage + variants) and `<Name>.d.ts` (the
  exact prop contract). **Read these before composing a component** — the props above are illustrative,
  not exhaustive, and each component has its own enums.

## Example
```tsx
// Dark game-UI surface; components are styled through props, layout glue is your own.
<div style={{ background: '#0a1628', padding: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
  <TitleShrine name="Oman Au Shrine" subtitle="Magnesis Trial" />
  <QuestListItem title="Destroy Ganon" location="Hyrule Castle" questType="main" state="marked" />
  <Dialog type="speech" speaker="Old Man">It is cold here. Find warm clothes.</Dialog>
  <div style={{ display: 'flex', gap: 12 }}>
    <Button variant="primary">Continue</Button>
    <Button variant="ghost">Back</Button>
  </div>
</div>
```
