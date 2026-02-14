import { motion } from 'framer-motion';
import { experience, education } from '../data';
import { FaLaptopCode, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
    return (
        <section id="about" className="section-padding container relative z-10">

            {/* Introduction */}
            <div className="mb-20 text-center max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-8 font-heading"
                >
                    About <span className="text-gradient">Me</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-text-secondary text-lg leading-relaxed"
                >
                    I'm a dedicated video editor with hands-on experience editing high-engagement YouTube videos and promotional brand content. I focus on pacing, clarity, and audience retention, handling the complete editing workflow from cutting and B-roll placement to sound design and final delivery.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                {/* Work Experience */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3" style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', color: 'var(--accent-cyan)' }}>
                        <FaLaptopCode /> Experience
                    </h3>
                    <div className="space-y-8" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {experience.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8 border-l-2 border-accent-blue/30"
                                style={{ paddingLeft: '2rem', borderLeft: '2px solid rgba(67, 97, 238, 0.3)', position: 'relative' }}
                            >
                                <div style={{ position: 'absolute', left: '-9px', top: '0', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--accent-blue)' }}></div>
                                <h4 className="text-xl font-bold text-white mb-1" style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{job.role}</h4>
                                <div className="text-accent-blue font-medium mb-2" style={{ color: 'var(--accent-blue)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>{job.company} | {job.period}</div>
                                <p className="text-text-secondary" style={{ color: 'var(--text-secondary)' }}>{job.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3" style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', color: 'var(--accent-purple)' }}>
                        <FaGraduationCap /> Education
                    </h3>
                    <div className="space-y-8" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8 border-l-2 border-accent-purple/30"
                                style={{ paddingLeft: '2rem', borderLeft: '2px solid rgba(255, 0, 85, 0.3)', position: 'relative' }}
                            >
                                <div style={{ position: 'absolute', left: '-9px', top: '0', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--accent-purple)' }}></div>
                                <h4 className="text-xl font-bold text-white mb-1" style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{edu.degree}</h4>
                                <div className="text-accent-purple font-medium mb-2" style={{ color: 'var(--accent-purple)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>{edu.institution}</div>
                                <p className="text-text-secondary" style={{ color: 'var(--text-secondary)' }}>{edu.period}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
