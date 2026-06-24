import { LoadingIcon } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 32,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 32,
  background: '#0a1628',
}

export const Icons = () => (
  <div style={stage}>
    <LoadingIcon icon="rupee" />
    <LoadingIcon icon="shrine" />
    <LoadingIcon icon="orb" />
    <LoadingIcon icon="korok" />
    <LoadingIcon icon="stamina" />
  </div>
)

export const WithQuantity = () => (
  <div style={stage}>
    <LoadingIcon icon="korok" showQuantity quantity={42} />
    <LoadingIcon icon="shrine" showQuantity quantity={120} />
  </div>
)
