import { ActionSet } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 32,
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  padding: 40,
  background: '#0a1628',
}

// A typical HUD prompt row: label + button glyph per action.
export const DialogPrompts = () => (
  <div style={stage}>
    <ActionSet
      actions={[
        { button: 'A', label: 'Talk' },
        { button: 'B', label: 'Cancel' },
      ]}
    />
  </div>
)

// A fuller control hint set, as seen on the field screen.
export const FieldControls = () => (
  <div style={stage}>
    <ActionSet
      actions={[
        { button: 'A', label: 'Interact' },
        { button: 'X', label: 'Jump' },
        { button: 'Y', label: 'Attack' },
        { button: 'ZL', label: 'Target' },
        { button: '+', label: 'Menu' },
      ]}
    />
  </div>
)
