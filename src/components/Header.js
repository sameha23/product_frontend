import React from 'react'
import { Link } from 'react-router-dom'
const Header = ({setKeywords, keywords, cartTotal}) => {
  return (
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           <div className='container'>
                     <Link className="navbar-brand" to="/">
                        Product Listing
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                Home <span className="sr-only"></span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">
                                 Cart ({cartTotal})
                            </Link>
                        </li>

   
                   
                        </ul>

                        <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search by product"
                            aria-label="Search"
                            value={keywords}
                            onChange={(e) => {setKeywords(e.target.value)}}
                        />
                   
                        </form>
                    
                    </div>
           </div>
         </nav>

  )
}

export default Header