import { MapGrid } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 24,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 32,
  background: '#0a1628',
}

const frame = {
  position: 'relative' as const,
  width: 220,
  height: 160,
  background: 'rgba(10,20,40,0.6)',
  color: '#3CD3FC',
  borderRadius: 4,
  overflow: 'hidden' as const,
}

export const Small = () => (
  <div style={stage}>
    <div style={frame}>
      <MapGrid variant="small" columns={8} rows={6} />
    </div>
  </div>
)

export const Large = () => (
  <div style={stage}>
    <div style={frame}>
      <MapGrid variant="large" columns={4} rows={3} />
    </div>
  </div>
)
