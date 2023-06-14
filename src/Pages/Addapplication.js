import React from 'react';
import { Link } from 'react-router-dom';
import Tablist from '../Components/Tablist';
import Tabcontent from '../Components/Tabcontent';

function Addapplication() {
    const tabsName = {
        tab1: "Application Details",
        tab2: "Personal Details",
        tab3: "Supplementary Details"
    }

    return (
        <>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Add Application</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active">Add Application</li>
                        </ol>
                    </nav>
                </div>

                <Tablist tabs={tabsName} />

                <Tabcontent />

            </main>
        </>
    )
}

export default Addapplication