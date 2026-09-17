import { fireEvent, render, screen, within } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import Header from './Header'

function renderHeader() {
  return render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  )
}

describe('Header', () => {
  it('renders the Eumedical brand and primary navigation', () => {
    renderHeader()

    expect(screen.getByRole('img', { name: 'Eumedical' })).toBeInTheDocument()
    expect(
      screen.getByRole('navigation', { name: 'Navegación principal' }),
    ).toBeInTheDocument()
  })

  it('opens the mobile navigation menu', () => {
    renderHeader()

    fireEvent.click(screen.getByRole('button', { name: 'Abrir menú' }))

    const mobileNavigation = screen.getByRole('navigation', {
      name: 'Navegación móvil',
    })

    expect(mobileNavigation).toBeInTheDocument()
    expect(
      within(mobileNavigation).getByRole('link', { name: 'Área paciente' }),
    ).toBeInTheDocument()
  })
})
