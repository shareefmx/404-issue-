import { useEffect, useState } from 'react'
import shareefSignature from './assets/shareef.png'
import './index.css'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      position: 'relative',
      padding: '2rem',
      overflow: 'hidden'
    }}>
      {/* Dynamic Background */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%) translate(${mousePosition.x * -2}px, ${mousePosition.y * -2}px)`,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '30%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(112,0,255,0.15) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(40px)',
          animation: 'float 8s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '25%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255,0,128,0.1) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(40px)',
          animation: 'float 6s ease-in-out infinite reverse'
        }} />
      </div>

      <main style={{
        textAlign: 'center',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem'
      }}>
        

        <h1
          className="animate-slide-up delay-100"
          style={{
            fontSize: 'clamp(5rem, 15vw, 12rem)',
            lineHeight: 0.9,
            marginBottom: '0',
            background: 'linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.4) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.05em',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          404
        </h1>

        <div className="animate-slide-up delay-200">
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 400,
            marginBottom: '1rem'
          }}>
            Temporarily <span style={{ color: '#ff4d4d' }}>Shutdown</span>
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            The page you are looking for is currently unavailable due to scheduled maintenance. We'll be back online shortly.
          </p>
        </div>

        <div
          className="animate-slide-up delay-300"
          style={{
            marginTop: '3rem',
            perspective: '1000px'
          }}
        >
          <img
            src={shareefSignature}
            alt="Signature"
            style={{
              height: '80px',
              width: 'auto',
              opacity: 0.9,
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.2))'
            }}
          />
        </div>
      </main>
    </div>
  )
}

export default App
