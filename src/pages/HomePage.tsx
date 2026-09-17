import Header from '../components/layout/Header'

function HomePage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-eu-white text-eu-blue">
        <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center justify-center px-6">
          <h1 className="text-4xl font-semibold">Eumedical</h1>
        </div>
      </main>
    </>
  )
}

export default HomePage