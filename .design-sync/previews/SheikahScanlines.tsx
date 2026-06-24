import { SheikahScanlines } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 24,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 28,
  background: '#0a1628',
}

const frame = {
  position: 'relative' as const,
  width: 320,
  height: 200,
  background: '#10243a',
  overflow: 'hidden' as const,
}

const label = {
  position: 'relative' as const,
  padding: 20,
  color: '#3CD3FC',
  fontSize: 14,
}

export const Subtle = () => (
  <div style={stage}>
    <div style={frame}>
      <SheikahScanlines opacity={0.15} />
      <p style={label}>Scanline overlay</p>
    </div>
  </div>
)

export const Strong = () => (
  <div style={stage}>
    <div style={frame}>
      <SheikahScanlines opacity={0.4} animated />
      <p style={label}>Animated, opacity 0.4</p>
    </div>
  </div>
)
