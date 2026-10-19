/** Manchas de cor suaves usadas como fundo decorativo. */

const blob = 'absolute aspect-square rounded-full'

export function PageGlow({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-60 ${className}`}>
      <div
        className={blob}
        style={{
          right: '-14%',
          top: '18%',
          width: 'min(52vw, 720px)',
          background: 'radial-gradient(circle at 50% 50%, rgba(227,168,145,.55) 0%, rgba(227,168,145,0) 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className={blob}
        style={{
          left: '-16%',
          top: '34%',
          width: 'min(48vw, 660px)',
          background: 'radial-gradient(circle at 50% 50%, rgba(239,225,220,.95) 0%, rgba(239,225,220,0) 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className={blob}
        style={{
          right: '-10%',
          top: '50%',
          width: 'min(44vw, 600px)',
          background: 'radial-gradient(circle at 50% 50%, rgba(227,168,145,.45) 0%, rgba(227,168,145,0) 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className={blob}
        style={{
          left: '-12%',
          top: '66%',
          width: 'min(50vw, 680px)',
          background: 'radial-gradient(circle at 50% 50%, rgba(227,168,145,.4) 0%, rgba(227,168,145,0) 70%)',
          filter: 'blur(90px)',
        }}
      />
      <div
        className={blob}
        style={{
          right: '8%',
          top: '76%',
          width: 'min(36vw, 480px)',
          background: 'radial-gradient(circle at 50% 50%, rgba(239,225,220,.9) 0%, rgba(239,225,220,0) 70%)',
          filter: 'blur(70px)',
        }}
      />
    </div>
  )
}

export function HeroGlow({ compact = false }: { compact?: boolean }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-45">
      <div
        className={blob}
        style={{
          right: '-12%',
          top: compact ? '-24%' : '-18%',
          width: 'min(62vw, 860px)',
          background:
            'radial-gradient(circle at 50% 50%, #e3a891 0%, rgba(227,168,145,.55) 38%, rgba(227,168,145,0) 70%)',
          filter: 'blur(60px)',
        }}
      />
      {!compact && (
        <div
          className={blob}
          style={{
            right: '18%',
            bottom: '-30%',
            width: 'min(44vw, 600px)',
            background: 'radial-gradient(circle at 50% 50%, #efe1dc 0%, rgba(239,225,220,0) 70%)',
            filter: 'blur(50px)',
          }}
        />
      )}
      <div
        className={blob}
        style={{
          left: '-16%',
          top: '30%',
          width: 'min(40vw, 520px)',
          background: 'radial-gradient(circle at 50% 50%, rgba(239,225,220,.9) 0%, rgba(239,225,220,0) 70%)',
          filter: 'blur(60px)',
        }}
      />
    </div>
  )
}
