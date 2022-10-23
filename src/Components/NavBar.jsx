import React from 'react'

export default function NavBar({getallPeople}) {
    return (
        <div className='bg-secondary'>
            <nav class="navbar container">
                <div >
                    <span class="navbar-brand  h1 ">Navbar</span>
                </div>
                <div>
                    <button
                        onClick={getallPeople}
                        className='btn btn-danger border-2 border-dark '>Get All Users</button>
                </div>
            </nav>
        </div>
    )
}
