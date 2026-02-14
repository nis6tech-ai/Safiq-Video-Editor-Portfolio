import { motion } from 'framer-motion';
import { skills, tools, languages } from '../data';

const Skills = () => {
    return (
        <section id="skills" className="section-padding relative z-10">
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
                        Technical <span className="text-gradient">Proficiency</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                    {/* Tools */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-accent-cyan" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent-cyan)' }}>Software & Tools</h3>
                        <div className="flex flex-wrap gap-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            {tools.map((tool, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 242, 234, 0.3)' }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
                                    style={{
                                        padding: '0.75rem 1.5rem',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '999px',
                                        backdropFilter: 'blur(5px)',
                                        cursor: 'default',
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    {tool}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Skills */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-accent-purple" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent-purple)' }}>Core Skills</h3>
                        <div className="space-y-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-center gap-3"
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                                >
                                    <div style={{ width: '8px', height: '8px', background: 'var(--accent-purple)', borderRadius: '50%' }}></div>
                                    <span className="text-lg">{skill}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Languages */}
                <div className="mt-16 text-center" style={{ marginTop: '4rem' }}>
                    <h3 className="text-2xl font-bold mb-6 text-gray-300" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#ccc' }}>Languages</h3>
                    <div className="flex justify-center gap-8 flex-wrap" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        {languages.map((lang, index) => (
                            <div key={index} className="text-center">
                                <div className="font-bold text-xl mb-2">{lang.name}</div>
                                <div className="flex gap-1 justify-center" style={{ display: 'flex', gap: '0.25rem' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                width: '10px',
                                                height: '10px',
                                                borderRadius: '50%',
                                                background: i < lang.level ? 'white' : 'rgba(255,255,255,0.2)'
                                            }}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
