export default function About() {
  return (
    <div className="container py-5 d-flex justify-content-center align-items-center" style={{minHeight: '100vh'}}>
      <div className="card shadow p-4 w-100" style={{maxWidth: 900}}>
        <div className="row g-0 align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src="https://ui-avatars.com/api/?name=Nikesh+Jain&background=0D8ABC&color=fff&size=128"
              alt="Nikesh Jain Avatar"
              className="rounded-circle border border-3 border-primary"
              width={110}
              height={110}
            />
            <h1 className="h4 fw-bold mt-3 mb-1 text-primary">Nikesh Jain</h1>
            <span className="text-secondary mb-2 d-block">Web Developer</span>
            <div className="d-flex flex-column align-items-center mt-2">
              <span className="small"><i className="bi bi-geo-alt-fill text-primary me-1"></i> Bharuch</span>
              <span className="small"><i className="bi bi-envelope-fill text-primary me-1"></i> jnikesh050@gmail.com</span>
              <span className="small"><i className="bi bi-github text-primary me-1"></i> <a href="https://github.com/nikeshjain73" target="_blank" rel="noopener noreferrer">nikeshjain73</a></span>
            </div>
          </div>
          <div className="col-md-8">
            <section className="mb-4">
              <h2 className="h5 fw-bold mb-3 text-primary">About Me</h2>
              <p className="mb-0">
                I am Nikesh Jain, a passionate Web Developer with one year of hands-on experience in building dynamic and scalable web applications. I specialize in Laravel, Next.js, and full-stack development, with a strong foundation in JavaScript, PHP, Python, and Java.
              </p>
            </section>
            <section className="mb-4">
              <h2 className="h6 fw-bold mb-2 text-primary">Expertise</h2>
              <ul className="mb-0 ps-3">
                <li>Developing RESTful APIs and integrating them with modern frontends</li>
                <li>Building scalable systems with robust database structures (MySQL, MongoDB)</li>
                <li>Implementing role-based access control, payment workflows, and real-time data tracking</li>
                <li>Leading teams to deliver projects on time and mentoring team members</li>
              </ul>
            </section>
            <section>
              <h2 className="h6 fw-bold mb-2 text-primary">Passion</h2>
              <p className="mb-0">
                I am deeply passionate about solving real-world problems through technology and continuously improving my skills by exploring new tools and frameworks. My goal is to contribute to impactful projects that enhance user experience and business efficiency.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
