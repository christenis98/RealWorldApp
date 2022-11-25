import React from 'react'

function UserSettings() {
    return (
        <div className="d-flex flex-column bd-highlight ml-4 mb-3 ">
            <div className="d-flex flex-row bd-highlight mx-auto ">
                <h2>User Settings</h2>
            </div>
            
            <div className="d-flex flex-row bd-highlight mb-3">
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