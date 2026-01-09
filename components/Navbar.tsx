export default function Navbar() {
  return (
    <nav className="w-screen px-10 py-5 fixed top-0 left-0 h-16 z-50">
        <div className="flex flex-row justify-between align-center">
            <div className="flex flex-row justify-baseline align-center">
                <div className="w-1/2">Luke Gronert</div>
                <div className="flex flex-row justify-around align-center w-1/2">
                    <p className="mx-1">LinkedIn</p>
                    <p className="mx-1">Github</p>
                    <p className="mx-1">Link</p>
                </div>
            </div>
            <div className="flex flex-row justify-around align-center w-1/3">
                <p className="mx-1">About</p>
                <p>|</p>
                <p className="mx-1">Projects</p>
                <p>|</p>
                <p className="mx-1">Skills</p>
                <p>|</p>
                <p className="mx-1">Contact</p>
            </div>
        </div>
    </nav>
  )
}
