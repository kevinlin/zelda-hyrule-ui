import { AimingReticle } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 48,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 44,
  background: '#0a1628',
}

// Sweep the variant axis: bow (tan crosshair) vs. Sheikah ability (blue glow + diagonals).
export const Variants = () => (
  <div style={stage}>
    <AimingReticle variant="bow" size={96} />
    <AimingReticle variant="sheikahAbility" size={96} />
  </div>
)

export const Sizes = () => (
  <div style={stage}>
    <AimingReticle variant="bow" size={48} />
    <AimingReticle variant="bow" size={80} />
    <AimingReticle variant="bow" size={120} />
  </div>
)
