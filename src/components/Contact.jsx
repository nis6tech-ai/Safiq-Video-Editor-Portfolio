import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { profile } from '../data';

const Contact = () => {

    return (
        <section id="contact" className="section-padding bg-black relative z-10" style={{ background: 'black' }}>
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' }}>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-text-secondary">
                        Ready to elevate your content? Let's collaborate.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-white">Contact Info</h3>
                            <div className="space-y-4" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue"
                                        style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: 'rgba(67, 97, 238, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-blue)', fontSize: '1.2rem' }}>
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400">Email</div>
                                        <a href={`mailto:${profile.email}`} className="text-lg font-medium text-white hover:text-accent-blue transition-colors" style={{ textDecoration: 'none' }}>{profile.email}</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div className="w-12 h-12 rounded-full bg-accent-purple/10 flex items-center justify-center text-accent-purple"
                                        style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: 'rgba(255, 0, 85, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)', fontSize: '1.2rem' }}>
                                        <FaPhone />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400">Phone</div>
                                        <div className="text-lg font-medium text-white">{profile.phone}</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div className="w-12 h-12 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan"
                                        style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: 'rgba(0, 242, 234, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)', fontSize: '1.2rem' }}>
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400">Location</div>
                                        <div className="text-lg font-medium text-white">{profile.location}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-4 text-white">Follow Me</h3>
                            <div className="flex gap-4" style={{ display: 'flex', gap: '1rem' }}>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-all text-white"
                                    style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                                    <FaLinkedin />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-all text-white"
                                    style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                                    <FaInstagram />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-all text-white"
                                    style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8"
                        style={{ padding: '2rem' }}
                    >
                        <form className="space-y-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent-cyan outline-none transition-colors" placeholder="John Doe"
                                        style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', color: 'white' }} />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent-cyan outline-none transition-colors" placeholder="john@example.com"
                                        style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', color: 'white' }} />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent-cyan outline-none transition-colors" placeholder="Tell me about your project..."
                                    style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', color: 'white', resize: 'vertical' }}></textarea>
                            </div>
                            <button className="w-full btn-primary flex justify-center items-center gap-2"
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    background: 'var(--gradient-1)',
                                    color: 'black',
                                    fontWeight: 'bold',
                                    borderRadius: '0.5rem',
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    transition: 'opacity 0.3s'
                                }}>
                                Send Message <FaPaperPlane />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
