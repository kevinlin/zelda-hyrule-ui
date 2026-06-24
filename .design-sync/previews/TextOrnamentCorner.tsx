import { TextOrnamentCorner } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 36,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 40,
  background: '#0a1628',
}

// All four corner positions (the orientation axis), sized up to read clearly.
export const Positions = () => (
  <div style={stage}>
    <TextOrnamentCorner position="topLeft" size={64} />
    <TextOrnamentCorner position="topRight" size={64} />
    <TextOrnamentCorner position="bottomRight" size={64} />
    <TextOrnamentCorner position="bottomLeft" size={64} />
  </div>
)

// With and without the Triforce mark.
export const Triforce = () => (
  <div style={stage}>
    <TextOrnamentCorner position="bottomRight" size={72} showTriforce={false} />
    <TextOrnamentCorner position="bottomRight" size={72} showTriforce />
  </div>
)
