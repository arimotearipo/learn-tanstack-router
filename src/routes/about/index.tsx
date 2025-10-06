import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/about/')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()

  return (
    <div className="max-w-xl mx-auto mt-12 p-8 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-4 text-blue-700 text-center">About This App</h1>
      <p className="mb-4 text-gray-700 text-center">
        This is a dummy app built to test the capabilities of <span className="font-semibold">TanStack Router</span> in a fully client-side environment.
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-600">
        <li>Built with <span className="font-medium">Vite</span>, <span className="font-medium">React</span>, and <span className="font-medium">TypeScript</span></li>
        <li>Uses <span className="font-medium">TanStack Router</span> for file-based routing</li>
        <li>Designed to be converted into a <span className="font-medium">Progressive Web App (PWA)</span> using Capacitor</li>
        <li>100% client-side — no server-side code</li>
      </ul>
      <button
        type="button"
        onClick={() => navigate({ to: '/' })}
        className="mt-6 w-full py-2 px-4 bg-gray-200 text-blue-700 rounded hover:bg-gray-300 transition"
      >
        &larr; Back
      </button>
      <div className="text-center text-sm text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} Dummy TanStack Router App
      </div>
    </div>
  )
}
