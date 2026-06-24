import { Pagination } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  alignItems: 'center',
  padding: 32,
  background: '#0a1628',
}

export const FirstPage = () => (
  <div style={stage}>
    <Pagination totalPages={4} currentPage={1} />
  </div>
)

export const MiddlePage = () => (
  <div style={stage}>
    <Pagination totalPages={6} currentPage={3} />
  </div>
)

export const LastPage = () => (
  <div style={stage}>
    <Pagination totalPages={5} currentPage={5} />
  </div>
)
