import "./about.css";

export default function About() {
  return (
    <div className="about">
      <div className="row g-0">
        <div className="col-12 col-md-5">
          <img src="images/about-face.png" className="img-fluid" alt="" />
        </div>
        <div className="col-12 col-md-6 position-relative">
          <p className="about__content__thought">
              <span>“</span>
            When a new character appears in your tale, you must describe his
            looks and clothes in some detail. If you don’t, your reader may
            imagine certain things on his own, which will probably not fit
            whatever you say later on.
            <p>- Satyajit Ray</p>
          </p>
        </div>
        <div className="col-12 col-md-6 ps-5 pt-3 mt-3 about__content__text">
            <h2 className="text-uppercase">ABOUT RAY</h2>
            <p className="text-secondary">Satyajit Ray Org has a mission of promoting discussion and study of Satyajit Ray’s films and filmmaking. Satyajit Ray (1921-1992), an Indian filmmaker and among the dozen or so great masters of world cinema, is known for his humanistic approach to cinema. He made his films in Bengali, a language spoken in West Bengal, the eastern state of India, and Bangladesh. In 1992, Satyajit Ray received the honorary Academy Award ©A.M.P.A.S. ® – Lifetime Achievement.</p>
            <button type="button" className="btn border mt-3 py-2 px-3 text-uppercase border-dark">know more</button>
        </div>
      </div>
    </div>
  );
}
