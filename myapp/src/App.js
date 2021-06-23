import React from 'react'
import Profile from './Profil/profile'

const App = () => {
    return (
        <div>
            <Profile FullName="moatez boazizi" age="20" Profession="student">
            <img src='profile-icon.png' alt="pic"/>
            </Profile>
        </div>
    )
}

export default App
