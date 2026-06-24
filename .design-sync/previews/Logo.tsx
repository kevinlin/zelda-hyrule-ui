import { Logo } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 40,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 44,
  background: '#0a1628',
}

// Sweep the variant axis: full wordmark vs. compact Triforce mark.
export const Variants = () => (
  <div style={stage}>
    <Logo variant="full" width={220} />
    <Logo variant="mark" width={56} />
  </div>
)

export const MarkSizes = () => (
  <div style={stage}>
    <Logo variant="mark" width={40} />
    <Logo variant="mark" width={64} />
    <Logo variant="mark" width={96} />
  </div>
)
