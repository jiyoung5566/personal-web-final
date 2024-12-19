const HomeSection = () => {
  return (
    <section
      id="home"
      style={{
        height: '100vh',
        backgroundImage: 'url("/black.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1 style={{ fontSize: '60px', fontWeight: 'bold', color: 'white' }}>
        안지영
      </h1>
      <h2 className="text-orange-600 font-bold"> 정보보호학과 92313415</h2>
    </section>
  )
}

export default HomeSection
