import React from 'react';
import {Link} from "react-router-dom"

function Admin() {
    return (
        <div className="admin_page">
        <Link className="m-4 link_title"  to='/blogs'>Create or edit blogs</Link>
        <Link className="m-4 link_title"  to='/projects'>Create or edit projects</Link>
        </div>
    )
}

export default Admin
