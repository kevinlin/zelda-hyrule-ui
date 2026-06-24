import { DivineBeast } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 28,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 32,
  background: '#0a1628',
}

export const AllBeasts = () => (
  <div style={stage}>
    <DivineBeast beast="ruta" charges={1} />
    <DivineBeast beast="medoh" charges={3} />
    <DivineBeast beast="naboris" charges={2} />
    <DivineBeast beast="rudania" charges={1} />
  </div>
)

export const Recharging = () => (
  <div style={stage}>
    <DivineBeast beast="ruta" recharging charges={0} />
    <DivineBeast beast="rudania" recharging charges={0} />
  </div>
)
