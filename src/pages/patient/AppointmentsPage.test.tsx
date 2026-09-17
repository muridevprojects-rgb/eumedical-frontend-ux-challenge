import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import AppointmentsPage from './AppointmentsPage'

describe('AppointmentsPage', () => {
  it('reveals the teleconsultation preparation state', () => {
    render(<AppointmentsPage />)

    fireEvent.click(
      screen.getByRole('button', { name: 'Preparar teleconsulta' }),
    )

    expect(
      screen.getByRole('heading', {
        name: 'Todo listo para tu teleconsulta',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText('Cámara')).toBeInTheDocument()
    expect(screen.getByText('Micrófono')).toBeInTheDocument()
    expect(screen.getByText('Conexión')).toBeInTheDocument()
  })
})
