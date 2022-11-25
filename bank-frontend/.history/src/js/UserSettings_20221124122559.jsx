import React from 'react'

function UserSettings() {
    return (
        <div className="d-flex flex-column bd-highlight mb-3 padding-x">
            <h2>User Settings</h2>
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