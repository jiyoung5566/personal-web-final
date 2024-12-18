const ProjectSection = () => {
  const projects = [
    {
      title: 'Portfolio(중간)',
      description: 'HTML을 사용한 포트폴리오 웹사이트',
      githubUrl: 'https://github.com/jiyoung5566/personal-web',
      deployUrl: 'https://personal-web-khaki-zeta.vercel.app',
      tech: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'clerk-api',
      description: 'clerk 활용 프로젝트',
      githubUrl: 'https://github.com/yourusername/project2',
      deployUrl: 'https://personal-web-khaki-zeta.vercel.app',
      tech: ['사용한', '기술', '스택'],
    },
    {
      title: 'mongodb-action-crud',
      description: 'MongoDB 활용 프로젝트',
      githubUrl: 'https://github.com/yourusername/project3',
      deployUrl: 'https://mongodb-action-crud-2.vercel.app',
      tech: ['사용한', '기술', '스택'],
    },
    {
      title: 'mongodb-crud',
      description: 'MongoDB 활용 프로젝트',
      githubUrl: 'https://github.com/jiyoung5566/MongoDB',
      deployUrl: 'https://mongo-db-livid.vercel.app',
      tech: ['TypeScript', 'JacaScript', 'CSS'],
    },
    {
      title: 'daiso-shopping',
      description: '쇼핑몰 예제 프로젝트',
      githubUrl: 'https://github.com/jiyoung5566/daiso-shopping',
      deployUrl: 'https://daiso-shopping-olive.vercel.app',
      tech: ['TypeScript', 'CSS', 'JacaScript'],
    },
    {
      title: 'Team-project',
      description: '팀 프로젝트로 진행한 도서 웹 페이지',
      githubUrl: 'https://github.com/jiyoung5566/daiso-shopping',
      deployUrl: 'https://daiso-shopping-olive.vercel.app',
      tech: ['TypeScript', 'CSS', 'JacaScript'],
    },
  ]
  return (
    <section
      id="project"
      style={{
        minHeight: '100vh',
        padding: '40px 20px',
        borderBottom: '1px solid #ddd',
      }}
    >
      <br />
      <h2 className="text-6xl font-bold">#My Projects</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          padding: '20px',
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              backgroundColor: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '10px',
              }}
            >
              {project.title}
            </h3>
            <p style={{ marginBottom: '15px', color: '#666' }}>
              {project.description}
            </p>
            <div
              style={{
                display: 'flex',
                gap: '10px',
                marginTop: '15px',
              }}
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#24292e',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '0.875rem',
                }}
              >
                View on GitHub
              </a>
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#ee6824',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '0.875rem',
                }}
              >
                View on Vercel
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectSection
