import React from 'react'

function UserSettings() {
    return (
        <div class="d-flex flex-column bd-highlight mb-3">
            <h2>User Settings</h2>
            <div class="d-flex flex-row bd-highlight mb-3">
                <i class="bi bi-person-fill-gear" style={{ fontSize: "1050%" }}></i>
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