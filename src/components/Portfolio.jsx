import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolio } from '../data';
import { FaYoutube, FaInstagram, FaPlay } from 'react-icons/fa';

const Portfolio = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section id="portfolio" className="section-padding bg-bg-secondary relative" ref={containerRef}>
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        A selection of my best work in video editing, motion graphics, and content creation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {portfolio.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-card overflow-hidden group relative"
                            style={{ borderRadius: '16px', overflow: 'hidden', height: '400px', display: 'flex', flexDirection: 'column', position: 'relative' }}
                        >
                            {/* Thumbnail Container */}
                            <div style={{ height: '70%', background: '#202020', position: 'relative', overflow: 'hidden' }}>
                                {project.thumbnail ? (
                                    <img
                                        src={project.url.includes('youtube.com/shorts/')
                                            ? `https://img.youtube.com/vi/${project.url.split('/shorts/')[1].split('?')[0]}/hqdefault.jpg`
                                            : project.thumbnail}
                                        alt={project.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                        className="group-hover:scale-110"
                                        onMouseEnter={e => e.target.style.transform = 'scale(1.1)'}
                                        onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                                    />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(45deg, #333, #111)' }}>
                                        <FaInstagram style={{ fontSize: '3rem', color: '#E1306C' }} />
                                    </div>
                                )}

                                {/* Overlay with Play Button */}
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        background: 'rgba(0,0,0,0.4)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        opacity: 0,
                                        transition: 'opacity 0.3s'
                                    }}
                                    className="group-hover:opacity-100 hover:opacity-100"
                                    onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                                    onMouseLeave={e => e.currentTarget.style.opacity = '0'}
                                >
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%',
                                        background: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'black',
                                        fontSize: '1.5rem'
                                    }}>
                                        <FaPlay style={{ marginLeft: '4px' }} />
                                    </div>
                                </a>
                            </div>

                            {/* Content */}
                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'rgba(255, 255, 255, 0.03)' }}>
                                <div>
                                    <span style={{
                                        fontSize: '0.85rem',
                                        fontWeight: '600',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        color: 'var(--accent-cyan)',
                                        marginBottom: '0.5rem',
                                        display: 'block'
                                    }}>
                                        {project.category}
                                    </span>
                                    <h3 className="text-xl font-bold mb-2" style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'white' }}>{project.title}</h3>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                                    <a href={project.url} target="_blank" rel="noopener noreferrer"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'var(--text-secondary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontSize: '0.9rem',
                                            transition: 'color 0.3s'
                                        }}
                                        onMouseOver={e => e.target.style.color = 'white'}
                                        onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
                                        Watch Video {project.url.includes('youtube') ? <FaYoutube style={{ color: '#FF0000' }} /> : <FaInstagram style={{ color: '#E1306C' }} />}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
