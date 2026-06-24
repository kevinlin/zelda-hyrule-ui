import { Illustration } from 'zelda-hyrule-ui'

// The component fills its parent (position:absolute; width/height 100%) and uses
// mix-blend-mode:screen, so it needs an EXPLICITLY sized box to show at all.
const stage = {
  display: 'flex',
  gap: 28,
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  padding: 40,
  background: '#0a1628',
}

// A sized frame per illustration. A slightly lighter panel lets the
// screen-blend artwork register against the navy.
const frame = {
  position: 'relative',
  width: 150,
  height: 210,
  background: '#162a44',
  border: '1px solid rgba(120,170,210,0.25)',
}

// Sweep the illustration type axis: Master Sword, Rupee, Sheikah Slate, Memories.
export const Types = () => (
  <div style={stage}>
    <div style={frame}><Illustration illustration="sword" opacity={1} /></div>
    <div style={frame}><Illustration illustration="rupee" opacity={1} /></div>
    <div style={frame}><Illustration illustration="slate" opacity={1} /></div>
    <div style={frame}><Illustration illustration="memories" opacity={1} /></div>
  </div>
)

// As a faint full-bleed background accent behind content (its intended use).
export const FaintBackground = () => (
  <div style={{ position: 'relative', height: 200, padding: 48, background: '#0a1628', overflow: 'hidden' }}>
    <Illustration
      illustration="slate"
      opacity={0.5}
      style={{ position: 'absolute', inset: 0 }}
    />
    <div style={{ position: 'relative', color: '#E2DED3', fontSize: 22, textAlign: 'center' }}>
      Hateno Village
    </div>
  </div>
)
