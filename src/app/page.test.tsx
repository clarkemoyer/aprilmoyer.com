import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('coming soon page', () => {
  it('renders the site identity', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /April Moyer/i })).toBeInTheDocument()
    expect(screen.getByText('aprilmoyer.com')).toBeInTheDocument()
  })
})
