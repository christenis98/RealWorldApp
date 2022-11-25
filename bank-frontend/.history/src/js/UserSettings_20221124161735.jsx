import React from 'react'

function UserSettings() {
    return (
        <div className="container d-flex flex-column bd-highlight">
            <div className="d-flex flex-row bd-highlight mx-left mt-4">
                <h2>User Settings</h2>
            </div>

            <div className="d-flex flex-row bd-highlight">
                <div className='d-flex flex-column'>
                    <i className="bi bi-person-fill-gear" style={{ fontSize: "1500%" }}></i>
                </div>

                <div className='d-flex flex-column'>
                    <div className="mx-right">
                        <input type="text" defaultValue={"name"} name="name" />
                    </div>
                    <div className="">
                        <input type="text" name="name" />
                    </div>
                    <div className="">
                        <input type="text" name="name" />
                    </div>
                    <div className="">
                        <input type="text" name="name" />
                    </div>
                    <div className=''>
                        <input type="submit" value="Submit" />
                    </div>
                </div>

            </div>
        </div>
    )
}


export default UserSettings;