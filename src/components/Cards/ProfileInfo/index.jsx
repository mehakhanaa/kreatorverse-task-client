import { getInitials } from "../../../utils/helper"
import React from "react"

const ProfileInfo = ({ onLogout, userInfo }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
        {getInitials("Mehak Khanna")}
      </div>

      <div>
        <p className="text-sm font-medium">Mehak Khanna</p>
      </div>

      <button
        className="text-sm bg-red-500 p-1 rounded-md text-white hover:opacity-80"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  )
}

export default ProfileInfo