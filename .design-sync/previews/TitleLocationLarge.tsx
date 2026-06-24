import { TitleLocationLarge } from 'zelda-hyrule-ui'

// Large region-entry title in the brand font on the navy backdrop.
const stage = {
  display: 'flex',
  justifyContent: 'center',
  padding: '56px 32px',
  background: '#0a1628',
}

export const GreatPlateau = () => (
  <div style={stage}>
    <TitleLocationLarge name="Great Plateau" />
  </div>
)

export const HyruleField = () => (
  <div style={stage}>
    <TitleLocationLarge name="Hyrule Field" />
  </div>
)
