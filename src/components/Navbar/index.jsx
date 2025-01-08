import React, { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import Searchbar from '../Searchbar'
import ProfileInfo from '../Cards/ProfileInfo'

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("")

    const navigate = useNavigate()

    const handleSearch = () => { }

    const onClearSearch = () => {
        setSearchQuery("")
    }

    const onLogout = async () => {
        navigate("/login")
    }



    return (
        <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
            <Link to={"/"}>
                <h2 className="text-xl font-medium text-black py-2">
                    <span className="text-slate-500">My</span>
                    <span className="text-slate-900">Notes</span>
                </h2>
            </Link>
            <Searchbar
                value={searchQuery}
                onChange={({ target }) => setSearchQuery(target.value)}
                handleSearch={handleSearch}
                onClearSearch={onClearSearch}
            />

            <ProfileInfo
                onLogout={onLogout}
            />
        </div>
    )
}

export default Navbar