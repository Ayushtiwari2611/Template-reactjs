import React from 'react'
import { Link } from 'react-router-dom'
import Processdata from '../Components/Processdata'

function Processapplication() {
    return (
        <>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Process Application</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active">Process Application</li>
                        </ol>
                    </nav>
                </div>
            </main>

            <Processdata/>
        </>
    )
}

export default Processapplication