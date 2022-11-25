import React from 'react'

function UserSettings() {
    return (
        <div className="container d-flex flex-column bd-highlight">
            <div className="d-flex flex-row bd-highlight mx-left mt-4">
                <h2>User Settings</h2>
            </div>
            
            <div className="d-flex flex-row bd-highlight">
                <i className="bi bi-person-fill-gear" style={{ fontSize: "1050%" }}></i>
                <div className="">
                    <input type="submit" value="Name" />
                </div>
                <div className="">
                    <input type="submit" value="Surname" />
                </div>
                <div className="">
                    <input type="submit" value="email@email.com" />
                </div>
                <div className="">
                    <input type="submit" value="666666666" />
                </div>
            </div>
        </div>
    )
}


export default UserSettings;