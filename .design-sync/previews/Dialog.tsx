import { Dialog } from 'zelda-hyrule-ui'

// Dialog draws its own translucent black capsule; the navy stage gives surrounding contrast.
const stage = {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  padding: 36,
  background: '#0a1628',
  width: 720,
}

export const Speech = () => (
  <div style={stage}>
    <Dialog type="speech" speaker="Old Man">
      It is cold here. You should find warm clothes before climbing the mountain.
    </Dialog>
  </div>
)

export const Sheikah = () => (
  <div style={stage}>
    <Dialog type="sheikah" speaker="Sheikah Slate" showContinue={false}>
      Scope confirmed. Travel gate registered. Marker set on the map.
    </Dialog>
  </div>
)

export const Written = () => (
  <div style={stage}>
    <Dialog type="written" speaker="Zelda's Diary" showContinue={false}>
      Today I finally unlocked the secret of the Sheikah Slate. There is still so much I do not understand.
    </Dialog>
  </div>
)

export const NoSpeaker = () => (
  <div style={stage}>
    <Dialog type="speech">
      Press the button to open the treasure chest.
    </Dialog>
  </div>
)
