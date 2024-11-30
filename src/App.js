import logo from './logo.svg';
import './App.css';
import myphoto3 from './images/myphoto3.jpeg';
import flapppy from './images/flapppy.png';
import games from './images/games.jpg';
import holidays from './images/holidays.jpg';
import home from './images/home.png';
import painting from './images/painting.jpg';
import weatherlogo from './images/weatherlogo.png';



function MenuBar() {
  return (
    <div>
          <ul id="main-menu">
            <li id="main-menu1">
              <a href="resume" data-id="resume">Resume</a>
            </li>
            <li id="main-menu2">
              <a href="projects" data-id="projects">Projects</a>
            </li>
            <li id="main-menu3">
              <a href="contact" data-id="contact">Contact</a>
            </li>
          </ul>
    </div>
  )
}
function TopBar() {
  return (<div className="header">
        <ul className="socialicons">
          <li>
            <a
              href="https://www.linkedin.com/in/jimmy-tran1023/"
              target="_blank"
              className="transition"
              >&#xeac9;</a>
          </li>
          <li>
            <a
              href="https://github.com/jimbucktwo"
              target="_blank"
              className="transition"
              >&#xeab0;</a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jimothytran/"
              target="_blank"
              className="transition"
              >&#xea92;</a>
          </li>
          <li>
            <a
              href="https://replit.com/@JimmyTran26"
              target="_blank"
              className="transition"
              >&#xeaa7;</a>
          </li>
        </ul>
        <h1 id="main-title">My Personal Website</h1>
        <a href="home" id="home-button">&#xe900;</a>
      </div>)
}

export function Home() {

  return(
    <div className="home-with-header">
      <TopBar/>

      <div className="home-page">
        <div className="description">
          <ul className="introduction">
            <li><span className="first-word">Name:</span> Jimmy Tran</li>
            <li>
              <span className="first-word">Email:</span> jimmytraann@gmail.com
            </li>
            <li><span className="first-word">Phone:</span> (714)-951-1350</li>
            <li><span className="first-word">Grad Date:</span> May 2025</li>
          </ul>
          <div className="photo">
            <img className="myphoto" src={myphoto3} />
          </div>
        </div>

        <div className="page-display">
          <section>
            <h2>Cover Letter</h2>
            <p className="cover-letter">
              Hi, I am currently enrolled at California State University, Long
              Beach and am in the midst of pursuing my Bachelors in Computer
              Science. My goals are to develop my web skills with emphasis on
              front-end aspects. Throughout my college degree, I have taken
              relevant courses such as:
            </p>
            <ul id="courses">
              <li>Data Structures and Algorithms</li>
              <li>Databases (Relational and NoSQL)</li>
              <li>Mobile App Development in Android</li>
              <li>Web Development</li>
            </ul>

            <p className="cover-letter-2">
              I also have experience working with various different software and frameworks,
              such as ReactJS, NodeJS, Android Studio, MongoDB, and GitHub to
              name a few. I am also curious to learn new technologies since I
              have a knack at picking things up quick. Click below to explore
              more about me!
            </p>
          </section>
        </div>
      </div>
      <section>
        <MenuBar/>
      </section>
    </div>
  )

}

export function Resume() {
  return (
  <div className="home-with-header">
    <TopBar/>
    <MenuBar/>
  <section id="resume">
      <div className="timeline-section">
        
        <h3 className="main-heading">Employment</h3>
        <ul className="timeline">
          <li>
            <div className="timelineUnit">
              <h4>
                Boiling Point<span className="timelineDate"
                  >Nov 2022 - Aug 2024</span>
              </h4>
              <h5>Supervisor</h5>
              <p>Interacted and served ~30 customers simultaneously</p>
              <p>
                Ensured guest happiness by initiating conversation and tending
                to needs
              </p>
              <p>Cleaned and organized various front and back of house areas</p>
            </div>
          </li>
          <li>
            <div className="timelineUnit">
              <h4>
                Schoolhouse.world<span className="timelineDate"
                  >Sep 2020 - March 2021</span>
              </h4>
              <h5>Online Tutor</h5>
              <p>Hosted tutoring sessions online for students</p>
              <p>
                Explained complex math concepts such as algebra and geometry
              </p>
              <p>Encouraged group discussion between students</p>
            </div>
          </li>
          <div className="clear"></div>
        </ul>
        
        <h3 className="main-heading">Education</h3>
        <ul className="timeline">
          <li>
            <div className="timelineUnit">
              <h4>
                California State University, Long Beach<span
                  className="timelineDate"
                  >2021 - present</span>
              </h4>
              <h5>School Of Engineering</h5>
              <p>Major: Computer Science, GPA of 3.9</p>
            </div>
          </li>
          <div className="clear"></div>
        </ul>
        
        <h3 className="main-heading">Extracurriculars</h3>
        <ul className="timeline">
          <li>
            <div className="timelineUnit">
              <h4>
                Student Assistant<span className="timelineDate">2021 - 2023</span>
              </h4>
              <h5>Blooming Music Academy</h5>
              <p>
                With piano as one of my passions, I taught students how to play
                the piano and basic piano theory
              </p>
            </div>
          </li>
          <div className="clear"></div>
        </ul>
        
      </div>
      <div className="skills-section">
        
        <h3 className="main-heading">Some Skills I Know</h3>
        <ul className="skills">
          <li>
            <h4>Python</h4>
            <div className="rating" data-rat="6"></div>
          </li>
          <li>
            <h4>SQL</h4>
            <div className="rating" data-rat="3"></div>
          </li>
          <li>
            <h4>HTML/CSS</h4>
            <div className="rating" data-rat="7"></div>
          </li>
          <li>
            <h4>Javascript</h4>
            <div className="rating" data-rat="7"></div>
          </li>
          <li>
            <h4>C++</h4>
            <div className="rating" data-rat="4"></div>
          </li>
        </ul>

        <h3 className="main-heading">Software Skills</h3>
        <ul className="skills">
          <li>
            <h4>VSCode</h4>
            <div className="rating" data-rat="7"></div>
          </li>
          <li>
            <h4>MongoDB</h4>
            <div className="rating" data-rat="4"></div>
          </li>
          <li>
            <h4>GitHub</h4>
            <div className="rating" data-rat="6"></div>
          </li>
          <li>
            <h4>GCP</h4>
            <div className="rating" data-rat="3"></div>
          </li>
        </ul>

        <h3 className="main-heading">Course Skills</h3>
        <ul className="skills">
          <li>
            <h4>Object-Oriented Programming</h4>
            <div className="rating" data-rat="6"></div>
          </li>
          <li>
            <h4>Data Structures/Algorithms</h4>
            <div className="rating" data-rat="5"></div>
          </li>
          <li>
            <h4>Databases (Sql and NoSql)</h4>
            <div className="rating" data-rat="4"></div>
          </li>
        </ul>
        
      </div>
      <div className="clear"></div>
      <a href="#" className="button transition">Download PDF Resume File</a>
    </section>
    
    </div>)
}
export function Projects() {
  return (
    <div className="home-with-header">
      <TopBar/>
      <MenuBar/>
    <section id="projects">
      <div className="extra-text">
        <h2>I've worked on some cool things... take a look!</h2>
      </div>
      <ul id="portfolio-list">
        <li className="project">
          <a href="https://github.com/jimbucktwo/HolidayTracker" target="_blank"><img src={holidays} alt="holiday image"/></a>
          <h3>International Holiday Tracker</h3>
          <p>Practices fetch request with Web API to display the holidays of certain countries.</p>
          
        </li>

        <li className="project">
          <a href="https://github.com/jimbucktwo/FlappyBird" target="_blank"><img src={flapppy} alt="Flappy Bird"/></a>
          <h3>Flappy Bird</h3>
          <p>Flappy Bird replicate, simple web app game that practices DOM manipulation and event handlers.</p>
        </li>
        <li className="project">
          <a href="https://github.com/jimbucktwo/PaintingGallery" target="_blank"><img src={painting} alt="painting image"/></a>
          <h3>Paintings Gallery</h3>
          <p>Gallery of classic paintings, practices event handlers and parsing data.</p>
        </li>
        <li className="project">
          <a href="https://github.com/jimbucktwo/WeatherApp" target="_blank"><img src={weatherlogo} alt="weather image"/></a>
          <h3>WeatherApp</h3>
          <p>Simple Weather App, consumes OpenWeatherApp API and displays weather for various cities.</p>
        </li>
        
        <li className="project" >
          <a href="#"><img src={games} alt="game image"/></a>
          <h3>Project Title</h3>
          <p>Project Description</p>
        </li>
        <li className="project">
          <a href="#"><img src={games} alt="game image"/></a>
          <h3>Project Title</h3>
          <p>Project Description</p>
        </li>
        <li className="project">
          <a href="#"><img src={games} alt="game image"/></a>
          <h3>Project Title</h3>
          <p>Project Description</p>
        </li>
        <li className="project">
          <a href="#"><img src={games} alt="game image"/></a>
          <h3>Project Title</h3>
          <p>Project Description</p>
        </li>
      </ul>
    </section>
    
    </div>
  )
}

export function Contact(){
  return (
    <div className="home-with-header">
      <TopBar/>
      <MenuBar/>
      <section id="contact">
      
      <h2>Contact Me</h2>
      <form action="submit_form.php" method="POST">
        <div class="contact-form">
          <div class="name">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required/>
          </div>
          <div class="email">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required/>
          </div>
          <div class="subject">
              <label for="subject">Subject</label>
              <input type="text" id="subject" name="subject" required/>
          </div>
          <div class="message">
              <label for="message">Message</label>
              <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" class="submit-btn">Send Message</button>
      </div>
      </form>
  </section>
  
    </div>
  )

}

export function App() {
  return (
    <div>
      <Home/>
    </div>
  );
}


