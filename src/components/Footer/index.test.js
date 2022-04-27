import Footer from '.'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

describe('Footer', () => {
  it('should render', async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    )
  })

  it('Change theme', async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    )
    const button = screen.getByRole('button')

    expect(button.textContent).toContain('☀️')
    fireEvent.click(button)
    expect(button.textContent).toContain('🌙')
  })
})
