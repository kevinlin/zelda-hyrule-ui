import { MapCursor } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  justifyContent: 'center',
  padding: '64px 56px',
  background: '#0a1628',
  minWidth: 360,
}

export const WithAction = () => (
  <div style={stage}>
    <MapCursor locationName="Rito Village" action />
  </div>
)

export const RightSide = () => (
  <div style={stage}>
    <MapCursor locationName="Kakariko Village" rightSide action />
  </div>
)

export const NoAction = () => (
  <div style={stage}>
    <MapCursor locationName="Lurelin Village" />
  </div>
)
