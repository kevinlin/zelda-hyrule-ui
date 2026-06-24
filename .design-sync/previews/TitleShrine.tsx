import { TitleShrine } from 'zelda-hyrule-ui'

// Title text uses the brand font (Hylia Serif) on a dark game backdrop.
const stage = {
  display: 'flex',
  justifyContent: 'center',
  padding: '48px 32px',
  background: '#0a1628',
}

export const WithSubtitle = () => (
  <div style={stage}>
    <TitleShrine name="Oman Au Shrine" subtitle="Magnesis Trial" />
  </div>
)

export const NameOnly = () => (
  <div style={stage}>
    <TitleShrine name="Shee Vaneer Shrine" />
  </div>
)
