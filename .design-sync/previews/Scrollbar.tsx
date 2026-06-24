import { Scrollbar } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  padding: 32,
  background: '#0a1628',
}

export const Top = () => (
  <div style={stage}>
    <Scrollbar location={1} maxSections={5} width={360} />
  </div>
)

export const Middle = () => (
  <div style={stage}>
    <Scrollbar location={4} maxSections={8} width={360} />
  </div>
)

export const Bottom = () => (
  <div style={stage}>
    <Scrollbar location={6} maxSections={6} width={360} />
  </div>
)
