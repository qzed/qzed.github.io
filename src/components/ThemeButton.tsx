'use client'

import icons from "@/components/icons";

export default function ThemeButton() {
    function toggle() {
        const dark = document.documentElement.classList.toggle('dark')
        const system = window.matchMedia('(prefers-color-scheme: dark)').matches

        // Only store the theme if it differs from the system one, so that
        // switching back resumes following the system.
        try {
            if (dark == system) {
                localStorage.removeItem('theme')
            } else {
                localStorage.setItem('theme', dark ? 'dark' : 'light')
            }
        } catch {
        }
    }

    // Show both icons and let CSS pick, as the theme is unknown during
    // pre-rendering.
    return (
        <button onClick={toggle} aria-label='Toggle dark mode' className='cursor-pointer'>
            <icons.DarkMode className='h-6 dark:hidden hover:text-sky-700' />
            <icons.LightMode className='h-6 hidden dark:block hover:text-sky-500' />
        </button>
    )
}
