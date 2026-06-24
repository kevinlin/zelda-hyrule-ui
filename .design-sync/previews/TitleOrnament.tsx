import { TitleOrnament } from 'zelda-hyrule-ui'

// Small cream-colored SVG flourish; scale up so it reads on the navy backdrop.
const stage = {
  display: 'flex',
  gap: 32,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 40,
  background: '#0a1628',
}

export const Sides = () => (
  <div style={stage}>
    <TitleOrnament side="left" scale={2.5} />
    <TitleOrnament side="right" scale={2.5} />
  </div>
)

export const Scales = () => (
  <div style={stage}>
    <TitleOrnament side="left" scale={1.5} />
    <TitleOrnament side="left" scale={2.5} />
    <TitleOrnament side="left" scale={3.5} />
  </div>
)
