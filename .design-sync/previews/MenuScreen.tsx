import { MenuScreen } from 'zelda-hyrule-ui'

// Full-screen item-menu composition. It paints its own dark background, fills
// its container at 16/9, and exposes a `children` overlay (its layout slots —
// section nav, item grid, description panel — render as empty chrome on their
// own). Inject realistic BotW inventory content through the overlay so the
// card reads as a populated menu (weapon tabs, item grid, item detail) rather
// than an empty wireframe.
const stage = { background: '#0a1628', padding: 0 }

const overlay: React.CSSProperties = {
  position: 'absolute',
  inset: 3,
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'inherit',
  color: '#e9e4d4',
  pointerEvents: 'none',
}

const tabRow: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 28,
  height: 78,
  fontSize: 15,
  letterSpacing: 1,
}

const tab = (active: boolean): React.CSSProperties => ({
  color: active ? '#f4c63b' : '#8a8a82',
  borderBottom: active ? '2px solid #f4c63b' : '2px solid transparent',
  paddingBottom: 6,
})

const slot = (filled: boolean): React.CSSProperties => ({
  aspectRatio: '1 / 1',
  border: `1px solid ${filled ? '#4ec3d6' : 'rgba(120,130,135,0.35)'}`,
  borderRadius: 4,
  background: filled ? 'rgba(78,195,214,0.12)' : 'rgba(255,255,255,0.02)',
})

export const Default = () => (
  <div style={stage}>
    <MenuScreen>
      <div style={overlay}>
        <div style={tabRow}>
          <span style={tab(true)}>Weapons</span>
          <span style={tab(false)}>Bows</span>
          <span style={tab(false)}>Shields</span>
          <span style={tab(false)}>Materials</span>
        </div>
        <div style={{ display: 'flex', flex: 1, padding: 28, gap: 28, overflow: 'hidden' }}>
          <div
            style={{
              flex: 1,
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: 10,
              alignContent: 'start',
            }}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} style={slot(i < 7)} />
            ))}
          </div>
          <div
            style={{
              width: 320,
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              padding: 20,
              background: 'rgba(20,28,38,0.85)',
              border: '1px solid rgba(120,130,135,0.4)',
              borderRadius: 6,
            }}
          >
            <div style={{ fontSize: 22, color: '#f4ecd6' }}>Royal Broadsword</div>
            <div style={{ fontStyle: 'italic', fontSize: 14, color: '#9aa0a6', lineHeight: 1.5 }}>
              A sword bearing the royal crest of Hyrule. Forged for knights of the castle guard.
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
              <span style={{ color: '#8a8a82' }}>Attack</span>
              <span style={{ color: '#f4c63b' }}>36</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
              <span style={{ color: '#8a8a82' }}>Durability</span>
              <span style={{ color: '#4ec3d6' }}>27</span>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 28px',
            minHeight: 48,
            fontSize: 13,
            color: '#8a8a82',
          }}
        >
          <span>Sort</span>
          <span>Hold to Drop</span>
        </div>
      </div>
    </MenuScreen>
  </div>
)
