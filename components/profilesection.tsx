const ProfileSection = () => {
  return (
    <section
      id="profile"
      style={{
        height: '100vh',
        padding: '20px', // changed padding
        borderBottom: '1px solid #ddd',
      }}
    >
      <br />
      <br />
      <h2 className="text-6xl font-bold">#About Me</h2>
      <br />
      <p>정보보호학과 92313415 안지영입니다.</p>
      <br />
      <p>취미는 음악 듣기와 영화 보기입니다.</p>
      <br />
      <p>계획은 자격증 취득과 웹 서버 프로그래밍 공부입니다.</p>
    </section>
  )
}

export default ProfileSection
