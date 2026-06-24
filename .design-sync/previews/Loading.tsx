import { Loading } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 48,
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  padding: 40,
  background: '#0a1628',
}

export const Sizes = () => (
  <div style={stage}>
    <Loading size="small" />
    <Loading size="middle" />
    <Loading size="large" />
  </div>
)

export const WithTip = () => (
  <div style={stage}>
    <Loading size="large" tip="Entering the Shrine of Resurrection…" />
  </div>
)
