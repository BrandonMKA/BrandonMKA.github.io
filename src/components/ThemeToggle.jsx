import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="themeToggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className="themeToggleIcon" aria-hidden="true">
        {isDark ? "☀" : "☾"}
      </span>
      <span className="themeToggleLabel">
        {isDark ? "Light" : "Dark"}
      </span>
    </button>
  );
}
