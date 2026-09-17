export type AppointmentStatus = 'Confirmada' | 'Finalizada'

export type Appointment = {
  id: string
  date: string
  time: string
  doctor: string
  specialty: string
  status: AppointmentStatus
  reason: string
}

export type MedicalDocument = {
  id: string
  title: string
  date: string
  type: string
}

export type Prescription = {
  id: string
  medication: string
  instructions: string
  issuedAt: string
  expiresAt: string
  doctor: string
  status: 'Activa' | 'Finalizada'
}

export const patient = {
  name: 'Ana Martínez',
  firstName: 'Ana',
  patientId: 'EU-20481',
  email: 'ana.martinez@example.com',
  phone: '+34 600 123 456',
  language: 'Español',
  location: 'Madrid, España',
}

export const upcomingAppointments: Appointment[] = [
  {
    id: 'apt-001',
    date: '20 Sep 2026',
    time: '16:30',
    doctor: 'Dra. Laura Martínez',
    specialty: 'Medicina general',
    status: 'Confirmada',
    reason: 'Seguimiento de síntomas generales',
  },
]

export const consultationHistory: Appointment[] = [
  {
    id: 'hist-001',
    date: '08 Sep 2026',
    time: '11:00',
    doctor: 'Dr. Daniel Ruiz',
    specialty: 'Medicina general',
    status: 'Finalizada',
    reason: 'Consulta general',
  },
  {
    id: 'hist-002',
    date: '24 Ago 2026',
    time: '18:15',
    doctor: 'Dra. Paula Gómez',
    specialty: 'Dermatología',
    status: 'Finalizada',
    reason: 'Valoración dermatológica',
  },
]

export const medicalDocuments: MedicalDocument[] = [
  {
    id: 'doc-001',
    title: 'Informe de consulta',
    date: '08 Sep 2026',
    type: 'Informe médico',
  },
  {
    id: 'doc-002',
    title: 'Resumen de atención',
    date: '24 Ago 2026',
    type: 'Documento clínico',
  },
]

export const prescriptions: Prescription[] = [
  {
    id: 'rx-001',
    medication: 'Tratamiento demostrativo',
    instructions: 'Indicaciones disponibles en la prescripción médica.',
    issuedAt: '08 Sep 2026',
    expiresAt: '08 Oct 2026',
    doctor: 'Dr. Daniel Ruiz',
    status: 'Activa',
  },
]
