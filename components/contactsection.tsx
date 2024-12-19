const ContactSection = () => {
  return (
    <section
      id="contact"
      style={{
        height: '100vh',
        padding: '20px',
        borderBottom: '1px solid #ddd',
      }}
    >
      <br />
      <br />
      <h2 className="text-6xl font-bold">#Contact Me</h2>
      <br />
      <p className="text-orange-600 font-bold">EMAIL</p>
      <a href="mailto:mbmtms@naver.com">mbmtms@naver.com</a>
      <br />
      <br />
      <p className="text-orange-600 font-bold">PHONE</p>
      <p>123-4567-8910</p>
      <br />
      <p className="text-orange-600 font-bold">BLOG</p>
      <p>https://blog.naver.com</p>
      <br />
      <p className="text-orange-600 font-bold">GITHUB</p>
      <a
        href="https://github.com/jiyoung5566"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://github.com/jiyoung5566
      </a>
    </section>
  )
}

export default ContactSection
