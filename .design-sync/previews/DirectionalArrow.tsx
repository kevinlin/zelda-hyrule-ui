import { DirectionalArrow } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 36,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 40,
  background: '#0a1628',
}

// Sweep the variant axis (the prop that most changes appearance).
export const Variants = () => (
  <div style={stage}>
    <DirectionalArrow variant="solid" direction="up" size={48} />
    <DirectionalArrow variant="outline" direction="up" size={48} />
    <DirectionalArrow variant="triangle" direction="up" size={48} />
    <DirectionalArrow variant="large" direction="up" size={48} />
  </div>
)

// All four directions of the solid arrow.
export const Directions = () => (
  <div style={stage}>
    <DirectionalArrow direction="up" variant="solid" size={48} />
    <DirectionalArrow direction="right" variant="solid" size={48} />
    <DirectionalArrow direction="down" variant="solid" size={48} />
    <DirectionalArrow direction="left" variant="solid" size={48} />
  </div>
)
