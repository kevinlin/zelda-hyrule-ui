import { TitlePointOfInterest } from 'zelda-hyrule-ui'

// variant axis: poi (discovery), bossName (large), poiWithHealth (adds a health bar).
const stage = {
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  alignItems: 'center',
  padding: '44px 32px',
  background: '#0a1628',
  width: 560,
}

export const PointOfInterest = () => (
  <div style={stage}>
    <TitlePointOfInterest title="Bokoblin Camp" variant="poi" />
  </div>
)

export const WithSubtitle = () => (
  <div style={stage}>
    <TitlePointOfInterest title="Dueling Peaks Stable" subtitle="Discovered" variant="poi" />
  </div>
)

export const BossName = () => (
  <div style={stage}>
    <TitlePointOfInterest title="Waterblight Ganon" variant="bossName" />
  </div>
)

export const WithHealth = () => (
  <div style={stage}>
    <TitlePointOfInterest title="Stone Talus" subtitle="Luminous" variant="poiWithHealth" healthPercent={65} />
  </div>
)
