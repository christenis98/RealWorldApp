import React from 'react'

function UserSettings() {
    return (
        <div className="container d-flex flex-column bd-highlight">
            <div className="d-flex flex-row bd-highlight mx-left mt-4">
                <h2>User Settings</h2>
            </div>
            
            <div className="d-flex flex-row bd-highlight mx-right">
                <i className="bi bi-person-fill-gear" style={{ fontSize: "1050%" }}></i>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </div>
            </div>
        </div>
    )
}


export default UserSettings;