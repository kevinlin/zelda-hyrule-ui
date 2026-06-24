import { SheikahAlbumButton } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 16,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 32,
  background: '#0a1628',
}

export const Default = () => (
  <div style={stage}>
    <SheikahAlbumButton label="Album" />
  </div>
)

export const Selected = () => (
  <div style={stage}>
    <SheikahAlbumButton label="Compendium" selected />
  </div>
)

export const Group = () => (
  <div style={stage}>
    <SheikahAlbumButton label="Map" selected />
    <SheikahAlbumButton label="Album" />
    <SheikahAlbumButton label="Compendium" />
  </div>
)
