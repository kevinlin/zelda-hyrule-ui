import { SheikahBackground } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 24,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 28,
  background: '#0a1628',
}

const frame = {
  position: 'relative' as const,
  width: 320,
  height: 200,
}

const label = {
  position: 'relative' as const,
  padding: 20,
  color: '#E9E1D1',
  fontSize: 14,
}

export const DarkBlue = () => (
  <div style={stage}>
    <div style={frame}>
      <SheikahBackground color="darkBlue">
        <p style={label}>Sheikah Slate</p>
      </SheikahBackground>
    </div>
  </div>
)

export const BlueGrey = () => (
  <div style={stage}>
    <div style={frame}>
      <SheikahBackground color="blueGrey">
        <p style={label}>Compendium</p>
      </SheikahBackground>
    </div>
  </div>
)
