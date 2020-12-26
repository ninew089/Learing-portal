import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    console.log(pathname)
    if (search === '' || pathname === '/learning-portal/course' ||pathname === '/learning-portal/curriculum') {
      window.scrollTo(0, 0)
    }
  }, [pathname, search])

  return null
}
