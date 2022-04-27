import { fireEvent, render, screen } from '@testing-library/react'
import Card from '.'
import { ThemeProvider } from '../../utils/context/index'
describe('Card component test suite', () => {
  it('should render', () => {
    const card = render(
      <ThemeProvider>
        <Card />
      </ThemeProvider>
    )
    expect(card).toBeDefined()
  })

  it('should display passed prop title', () => {
    render(
      <ThemeProvider>
        <Card title={'test title'} />
      </ThemeProvider>
    )
    expect(screen.getByText('test title')).toBeDefined()
  })

  it('should use picture prop', () => {
    render(
      <ThemeProvider>
        <Card picture={'testpicture.png'} />
      </ThemeProvider>
    )
    let img = screen.getByRole('img')

    expect(img.src).toContain('testpicture.png')
  })

  it('should change title when click ', () => {
    render(
      <ThemeProvider>
        <Card title={'test title'} />
      </ThemeProvider>
    )
    const title = screen.getByText('test title')
    const nodeToClick = title.closest('div')
    fireEvent.click(nodeToClick)

    expect(title.textContent).toContain('⭐️')
  })
})
