const ProfileSection = () => {
  return (
    <section
      id="profile"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '40px',
        height: '100vh',
      }}
    >
      <div>
        <video
          className="mt-2"
          autoPlay={false}
          controls={true}
          muted={true}
          loop={true}
          width={500}
          src="/video/introduction.mp4"
        />
      </div>
      <div style={{ flex: 1, textAlign: 'left' }}>
        <h2>About Me</h2>
        <p>
          Add a detailed description here about yourself, your background, and
          any other information you'd like to share.
        </p>
      </div>
    </section>
  )
}

export default ProfileSection
