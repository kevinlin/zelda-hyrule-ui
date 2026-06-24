import { LoadingHeart } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 12,
  alignItems: 'center',
  padding: 36,
  background: '#0a1628',
}

export const Shown = () => (
  <div style={stage}>
    <LoadingHeart shown />
  </div>
)

export const LoadingSequence = () => (
  <div style={stage}>
    <LoadingHeart shown />
    <LoadingHeart shown />
    <LoadingHeart shown />
    <LoadingHeart shown={false} />
    <LoadingHeart shown={false} />
  </div>
)
