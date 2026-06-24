import { Card } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 20,
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  padding: 28,
  background: '#0a1628',
}

const body = { width: 240 }

export const Variants = () => (
  <div style={stage}>
    <Card variant="default" title="Traveler's Sword" style={body}>
      A common blade found across Hyrule. Attack 5. Durable enough for early bokoblins.
    </Card>
    <Card variant="sheikah" title="Sheikah Slate" style={body}>
      Ancient device of the Sheikah. Holds runes, the map of Hyrule, and your sealed memories.
    </Card>
    <Card variant="golden" title="Master Sword" style={body}>
      The legendary blade that seals the darkness. Attack 30, rising to 60 near Ganon.
    </Card>
  </div>
)

export const ItemVariant = () => (
  <div style={stage}>
    <Card variant="item" title="Hylian Shield" style={body}>
      The most durable shield in Hyrule. Guard 90. A relic of the royal family.
    </Card>
  </div>
)

export const Selected = () => (
  <div style={stage}>
    <Card variant="sheikah" title="Magnesis" selected style={body}>
      Move and manipulate metallic objects with the power of the Sheikah Slate.
    </Card>
  </div>
)
