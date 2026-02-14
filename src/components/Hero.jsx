import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="section-padding flex-center min-h-screen relative overflow-hidden" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>

            {/* Overlay gradient for depth */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 50% 50%, rgba(0, 242, 234, 0.05), transparent 60%)',
                zIndex: 0
            }}></div>

            <div className="container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl text-accent-cyan font-medium mb-4 tracking-wider" style={{ color: 'var(--accent-cyan)', letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>
                        Hello, I am
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
                        style={{
                            fontSize: 'clamp(3rem, 8vw, 6rem)',
                            fontWeight: '800',
                            lineHeight: '1.1',
                            marginBottom: '1.5rem',
                            backgroundImage: 'linear-gradient(to right, #fff, #a0a0a0)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                    >
                        Mohammed Safiq Nishar
                    </h1>

                    <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-2xl md:text-4xl text-white font-light mb-8"
                        style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'white', marginBottom: '2rem', fontWeight: '300' }}
                    >
                        <span style={{ color: 'var(--accent-purple)', fontWeight: '600' }}>Professional</span> Video Editor
                    </motion.h3>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed"
                        style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.125rem' }}
                    >
                        Crafting cinematic stories & engaging content for YouTube & Brands.
                        Specialized in retention editing, motion graphics, and sound design.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
                    >
                        <a href="#portfolio" className="btn-primary" style={{
                            background: 'var(--gradient-1)',
                            color: 'black',
                            padding: '1rem 2.5rem',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '1rem',
                            boxShadow: '0 4px 15px rgba(0, 242, 234, 0.3)',
                            transition: 'transform 0.3s'
                        }} onMouseEnter={e => e.target.style.transform = 'translateY(-3px)'} onMouseLeave={e => e.target.style.transform = 'translateY(0)'}>
                            View My Work
                        </a>
                        <a href="#contact" className="btn-secondary" style={{
                            background: 'transparent',
                            color: 'white',
                            border: '2px solid rgba(255, 255, 255, 0.2)',
                            padding: '1rem 2.5rem',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '1rem',
                            transition: 'all 0.3s'
                        }} onMouseEnter={e => {
                            e.target.style.transform = 'translateY(-3px)';
                            e.target.style.borderColor = 'white';
                        }} onMouseLeave={e => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        }}>
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative floating elements */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    right: '10%',
                    width: '60px',
                    height: '60px',
                    border: '2px solid var(--accent-cyan)',
                    borderRadius: '12px',
                    transform: 'rotate(15deg)',
                    opacity: 0.3,
                    zIndex: 0
                }}
            />

            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    bottom: '15%',
                    left: '5%',
                    width: '80px',
                    height: '80px',
                    border: '2px solid var(--accent-purple)',
                    borderRadius: '50%',
                    opacity: 0.3,
                    zIndex: 0
                }}
            />

        </section>
    );
};

export default Hero;
