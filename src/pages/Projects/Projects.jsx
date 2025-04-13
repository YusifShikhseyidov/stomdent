import { Outlet } from "react-router-dom"
import './Projects.css'

export default function Projects() {
  return (
    <div className="projects-layout">
      <Outlet/>
    </div>
  )
}