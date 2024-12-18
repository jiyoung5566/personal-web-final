const HomeSection = () => {
  return (
    <section
      id="home"
      style={{
        height: '100vh',
        backgroundImage: 'url("/per.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
      }}
    >
      <h1 style={{ fontSize: '60px', fontWeight: 'bold', color: 'black' }}>
        안지영
      </h1>
    </section>
  )
}

export default HomeSection
