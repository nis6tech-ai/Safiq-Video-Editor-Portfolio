const Footer = () => {
    return (
        <footer style={{ padding: '2rem 1rem', background: '#050505', borderTop: '1px solid #111', textAlign: 'center', color: '#666' }}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Mohammed Safiq Nishar. All rights reserved.</p>
                <div style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                    Designed with <span style={{ color: 'var(--accent-purple)' }}>♥</span> for Video Editors
                </div>
            </div>
        </footer>
    );
};

export default Footer;
