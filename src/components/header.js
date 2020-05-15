import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import '../styles/index.scss'

const  Header = ({menuLinks}) => {
  const [heightHeader, setheightHeader] = useState(0);
  const [urlPath, seturlPath] = useState();

  useEffect(() => {
    seturlPath(window.location.pathname)
  }, [])
  return (
    <header className={heightHeader ? 'active': ''}>
         <div className= 'menu-container'>
           <ul className='topnav'>
             <li className='menu'>
               <span onClick={() => setheightHeader(true)}>Menu</span>
             </li>
             {menuLinks.map(link => (
                   <li
                     className={link.link === urlPath ? urlPath.split('/')[1]: 'inactive'}
                     key={link.name}
                   >
                     <Link to={link.link}>
                       {link.name}
                     </Link>
                   </li>
                 ))}
           </ul>
         </div>
       </header>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
