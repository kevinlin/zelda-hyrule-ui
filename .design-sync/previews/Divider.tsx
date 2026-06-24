import { Divider } from 'zelda-hyrule-ui'

// Divider is width:100% — give it a constrained container so it reads as a rule.
const stage = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: 32,
  background: '#0a1628',
  width: 420,
}

const label = { color: '#e9e1d1', fontSize: 13, opacity: 0.85 }

export const Variants = () => (
  <div style={stage}>
    <span style={label}>Sheikah</span>
    <Divider variant="sheikah" />
    <span style={label}>Golden</span>
    <Divider variant="golden" />
    <span style={label}>Subtle</span>
    <Divider variant="subtle" />
    <span style={label}>Ornament</span>
    <Divider variant="ornament" />
  </div>
)

export const InContext = () => (
  <div style={stage}>
    <h3 style={{ color: '#e9e1d1', margin: 0, fontSize: 18 }}>Inventory</h3>
    <Divider variant="golden" />
    <p style={{ ...label, margin: 0 }}>Weapons · Bows · Shields · Materials</p>
  </div>
)
