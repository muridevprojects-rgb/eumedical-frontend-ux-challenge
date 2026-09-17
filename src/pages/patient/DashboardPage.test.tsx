import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import DashboardPage from './DashboardPage'

describe('DashboardPage', () => {
  it('shows the patient summary and next appointment', () => {
    render(
      <BrowserRouter>
        <DashboardPage />
      </BrowserRouter>,
    )

    expect(
      screen.getByRole('heading', { name: 'Hola, Ana' }),
    ).toBeInTheDocument()
    expect(screen.getByText('20 Sep 2026 · 16:30')).toBeInTheDocument()
    expect(screen.getByText('Dra. Laura Martínez · Medicina general')).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /preparar teleconsulta/i }),
    ).toBeInTheDocument()
  })
})
