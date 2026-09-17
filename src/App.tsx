import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PatientLayout from './features/patient/components/PatientLayout'
import HomePage from './pages/HomePage'
import AppointmentsPage from './pages/patient/AppointmentsPage'
import DashboardPage from './pages/patient/DashboardPage'
import DocumentsPage from './pages/patient/DocumentsPage'
import HistoryPage from './pages/patient/HistoryPage'
import PrescriptionsPage from './pages/patient/PrescriptionsPage'
import ProfilePage from './pages/patient/ProfilePage'
import SupportPage from './pages/patient/SupportPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/patient" element={<PatientLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="appointments" element={<AppointmentsPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="documents" element={<DocumentsPage />} />
          <Route path="prescriptions" element={<PrescriptionsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="support" element={<SupportPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
