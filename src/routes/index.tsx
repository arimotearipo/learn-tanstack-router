import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-lg shadow p-8 max-w-lg w-full mt-16">
        <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">TanStack Router Demo</h1>
        <p className="text-gray-700 mb-6 text-center">
          Welcome to the dummy app for testing <span className="font-semibold">TanStack Router</span>!
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Fully client-side (no server code)</li>
          <li>Built with <span className="font-medium">Vite</span>, <span className="font-medium">React</span>, <span className="font-medium">TypeScript</span></li>
          <li>File-based routing powered by <span className="font-medium">TanStack Router</span></li>
          <li>Ready to be converted into a <span className="font-medium">PWA</span> using Capacitor</li>
        </ul>
        <div className="flex justify-center gap-4">
          <a
            href="/about"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            About
          </a>
          <a
            href="/contact-us"
            className="px-4 py-2 bg-gray-200 text-blue-700 rounded hover:bg-gray-300 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
      <footer className="mt-8 text-gray-400 text-sm text-center">
        &copy; {new Date().getFullYear()} Dummy TanStack Router App
      </footer>
    </div>
  )
}
