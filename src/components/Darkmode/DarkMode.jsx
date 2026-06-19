import React, { useEffect, useState } from 'react'
import LightButton from "./../../assets/website/light-mode-button.png"
import DarkButton from "./../../assets/website/dark-mode-button.png"
const DarkMode = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")

    const element = document.documentElement

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            element.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    })

    return (
        <div className='relative'>
            <img
                src={LightButton}
                alt=''
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className={`w-12 cursor-pointer transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
            />
            <img
                src={DarkButton}
                alt=''
                className={`w-12 cursor-pointer transition-all duration-300`}
            />
        </div>
    )
}

export default DarkMode
