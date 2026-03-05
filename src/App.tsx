import { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

// Layout Component holding Top Nav
const BaseLayout = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMenu = () => {
        setIsMobileMenuOpen(false)
    }

    const navLinks = [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Saved', path: '/saved' },
        { name: 'Digest', path: '/digest' },
        { name: 'Settings', path: '/settings' },
        { name: 'Proof', path: '/proof' },
    ]

    return (
        <div className="layout-container">
            <header className="top-bar">
                <div className="top-bar-left">
                    <NavLink to="/" className="top-bar-title" onClick={closeMenu}>
                        V's Job-Portal
                    </NavLink>
                </div>

                {/* Desktop Navigation */}
                <nav className="top-nav">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile Hamburger Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <nav className="mobile-nav open">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>
                )}
            </header>

            {/* Main Content Area populated by Routes */}
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    )
}

// Reusable Placeholder Page Component
const PlaceholderPage = ({ title }: { title: string }) => {
    return (
        <div className="placeholder-page">
            <h1 className="placeholder-heading">{title}</h1>
            <p className="placeholder-subtext">This section will be built in the next step.</p>
        </div>
    )
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BaseLayout />}>
                    <Route index element={<PlaceholderPage title="Home" />} />
                    <Route path="dashboard" element={<PlaceholderPage title="Dashboard" />} />
                    <Route path="saved" element={<PlaceholderPage title="Saved Jobs" />} />
                    <Route path="digest" element={<PlaceholderPage title="Daily Digest" />} />
                    <Route path="settings" element={<PlaceholderPage title="Settings" />} />
                    <Route path="proof" element={<PlaceholderPage title="System Proof" />} />
                    {/* Catch-all for unmatched routes */}
                    <Route path="*" element={<PlaceholderPage title="404 - Not Found" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
