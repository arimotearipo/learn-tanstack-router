import { createFileRoute } from '@tanstack/react-router'
import {useParams} from '@tanstack/react-router'

export const Route = createFileRoute('/about/$aboutId')({
  component: RouteComponent,
})

function RouteComponent() {
  const {aboutId} = useParams({from: '/about/$aboutId'})

  return <div>This is about with ID {aboutId}</div>
}
