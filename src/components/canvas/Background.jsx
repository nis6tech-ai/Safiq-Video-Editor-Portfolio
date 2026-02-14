import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, Stars } from '@react-three/drei';

const VideoIcons = () => {
    // Generate random positions for icons
    const count = 40;
    const items = useMemo(() => {
        return new Array(count).fill(0).map(() => ({
            position: [
                (Math.random() - 0.5) * 30, // x spread
                (Math.random() - 0.5) * 30, // y spread
                (Math.random() - 0.5) * 15  // z depth
            ],
            rotation: [
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            ],
            scale: Math.random() * 0.5 + 0.5,
            type: Math.floor(Math.random() * 3) // 0: Play, 1: Record, 2: Timeline
        }));
    }, []);

    return (
        <group>
            {items.map((item, i) => (
                <Float key={i} speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
                    <group position={item.position} rotation={item.rotation} scale={item.scale}>
                        {/* Play Button - Cone (Triangle base) */}
                        {item.type === 0 && (
                            <mesh>
                                <coneGeometry args={[0.5, 0.8, 3]} />
                                <meshStandardMaterial
                                    color="#00f2ea"
                                    emissive="#00f2ea"
                                    emissiveIntensity={0.5}
                                    roughness={0.2}
                                    metalness={0.8}
                                    wireframe={true}
                                />
                            </mesh>
                        )}
                        {/* Record - Sphere */}
                        {item.type === 1 && (
                            <mesh>
                                <sphereGeometry args={[0.4, 16, 16]} />
                                <meshStandardMaterial
                                    color="#ff0055"
                                    emissive="#ff0055"
                                    emissiveIntensity={0.5}
                                    roughness={0.2}
                                    metalness={0.8}
                                    wireframe={true}
                                />
                            </mesh>
                        )}
                        {/* Timeline Block - Box */}
                        {item.type === 2 && (
                            <mesh>
                                <boxGeometry args={[2, 0.5, 0.2]} />
                                <meshStandardMaterial
                                    color="#4361ee"
                                    roughness={0.1}
                                    metalness={0.9}
                                    transparent
                                    opacity={0.4}
                                />
                            </mesh>
                        )}
                    </group>
                </Float>
            ))}
        </group>
    );
}

const Background = () => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: '#050505' }}>
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 15]} />
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00f2ea" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#ff0055" />

                <VideoIcons />

                {/* Subtle grid for timeline feel */}
                <gridHelper args={[60, 60, 0x222222, 0x111111]} position={[0, -5, 0]} rotation={[0.2, 0, 0]} />

                {/* Far background stars for depth */}
                <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />

                <Environment preset="night" />
                <fog attach="fog" args={['#050505', 10, 40]} />
            </Canvas>
        </div>
    );
};

export default Background;
