import { Link, Outlet } from "react-router-dom"
import {Fragment} from 'react'

const Navigation = () => {
  return (
    <Fragment>
      <div className="h-20 flex justify-between mb-6">
        <Link className="w-20 ml-4" to={'/'}>
          <img src="./src/assets/Logo.png" alt="Logo" className="h-full w-full" />
        </Link>
        <div className="w-1/2 flex items-center justify-end">
          <Link className="px-4 py-2 cursor-pointer text-2xl" to={'/shop'}>
            SHOP
          </Link>
          <Link className="px-4 py-2 cursor-pointer text-2xl" to={'/sign-in'}>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}
export default Navigation