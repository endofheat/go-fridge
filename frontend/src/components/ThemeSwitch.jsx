import { useMyThemeContext, themes } from "../context/MyThemeContext"

function ThemeSwitcher() {
    const { theme, setTheme } = useMyThemeContext();

    const handleThemeChange = () => {
        setTheme(theme === themes.dark ? themes.light : themes.dark)
}

    return (
        <label><input type="checkbox" onChange={handleThemeChange}/> Dark Mode?</label>
    )
}

export default ThemeSwitcher;