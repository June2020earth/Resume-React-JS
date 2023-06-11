import './App.css'
import personalImage from './personal.JPG' 


function App() {
  return (
    <div className="App">
      <div class="AppBody">
        <div class="Introduction">
          <div class = "Row">
            <img alt="personalImage" src={personalImage} id="personalImage"></img>
            <div>
              <p class="font-large main-title bold">Tai Wen Jun</p>
              <p class="font-medium secondary-title">Software Engineering</p>
            </div>
          </div>
          <div class="Row Self-description">
            <p class="font-small">wenjuntai201312@gmail.com</p>
            <p class="font-small">|</p>
            <p class="font-small">+60-11 2665 2440</p>
            <p class="font-small">|</p>
            <p class="font-small">https://www.linkedin.com/in/wen-jun-tai/</p>
          </div>
          <p class="font-small align-justify"></p>
        </div>
        <div style={{ width: 100 + '%', marginBottom: 15+'px', border: 1 + 'px solid black' }}></div>
        <div class="Education Section">
          <p class="font-medium-small bold">Education</p>
          <div class="Row">
            <p class="font-small title">
              University Technology Malaysia | Software Engineering
            </p>
            <p class="font-small date">Sep 2019 - Sep 2023</p>
          </div>
          <div class="Description">
            <div id="circle"></div>
            <p class="font-small">
              Current CGPA: 3.99 / 4.00, Dean's List Award
            </p>
          </div>
        </div>
        <div class="Work-Experience Section">
          <p class="font-medium-small bold">Work Experience</p>
          <div class="section-point">
            <div class="Row">
              <p class="font-small title">Freelancer, PowerBI Developer</p>
              <p class="font-small date">Since November 2022</p>
            </div>
            <div class="Description">
              <div id="circle"></div>
              <p class="font-small">
                Providing data analysis and data transformation solution for
                manufacturing industry
              </p>
            </div>
            <div class="Description">
              <div id="circle"></div>
              <p class="font-small">
                Providing data insight and advice on data warehouse in client's
                D365
              </p>
            </div>
          </div>
          <div class="section-point">
            <div class="Row">
              <p class="font-small title">Internship, Network Technology Developer</p>
              <p class="font-small date">Aug 2022 - Feb 2023</p>
            </div>
            <p class="font-small">Huawei Technology, Kuala Lumpur Malaysia</p>
            <div class="Description">
              <div id="circle"></div>
              <p class="font-small">
                Building web apps, dashboard, data analysis, tools for internal
                company using Python, <br />
                Javascript, Web Technology, Flask SQL, PHP, TQL RESTFUL API
              </p>
            </div>
          </div>
          <div class="section-point">
            <div class="Row">
              <p class="font-small title">
                Internship, Business Intelligence Developer
              </p>
              <p class="font-small date">Mar 2022 - Aug 2022</p>
            </div>
            <p class="font-small">SRKK, Johor Malaysia</p>
            <div class="Description">
              <div id="circle"></div>
              <p class="font-small">
                Develop dashboard, data analysis and data cleaning counsultancy
                service for <br /> manufacturnig industry using PowerBI
              </p>
            </div>
          </div>
          <div class="section-point">
            <div class="Row">
              <p class="font-small title">Internship, Product Intern</p>
              <p class="font-small date">July 2021 - Dec 2021</p>
            </div>
            <p class="font-small">LakuEmas, Jakarta Indonesia</p>
            <div class="Description">
              <div id="circle"></div>
              <p class="font-small">
                Involve in documenting and designing of 5 features:
                TargestSaver, LakuCicil, <br />
                Straits, PointSystem, Gamification with multi-national team
              </p>
            </div>
          </div>
          <div class="section-point">
            <div class="Row">
              <p class="font-small title">Reseach Assistant</p>
              <p class="font-small date">November 2018</p>
            </div>
            <p class="font-small">UTM, Pulau Langkawi</p>
          </div>
        </div>
        <div class="Certificate Section">
          <p class="font-medium-small bold">Certificate</p>
          <div class="section-point">
            <div class="Row">
              <p class="font-small title">Champion | WIBA Blockchain Hackathon</p>
              <p class="font-small date">November 2022</p>
            </div>
            <div class="Description">
              <div id="circle"></div>
              <p class="font-small">
                Competed against 50 teams, won price USD 3500 with blockchain
                web application <br /> using react, REACH and algo coin
                technology
              </p>
            </div>
          </div>

          <div class="section-point">
            <div class="Row">
              <p class="font-small title">AWS Certificate | Cloud Practitioner</p>
              <p class="font-small date">February 2022</p>
            </div>
            <div class="Description">
              <div id="circle"></div>
              <p class="font-small">
                Pass with 761 / 1000, expired in Feb, 2025
              </p>
            </div>
          </div>

          <div class="section-point">
            <div class="Row">
              <p class="font-small title">Top 10 winner, Hong Leong Bank Hackathon</p>
              <p class="font-small date">September 2021</p>
            </div>
            <div class="Description">
              <div id="circle"></div>
              <p class="font-small">
                Develop a web application of carbon footprint monitoring app
                using flask, python
              </p>
            </div>
            <div class="Description">
              <div id="circle"></div>
              <p class="font-small">
                Outstand from 150 participants and won price of USD 300
              </p>
            </div>
          </div>
          <div class="section-point">
            <div class="Row">
              <p class="font-small title">
                Malaysia Representative, JAXA Kibo Programming Challenge
              </p>
              <p class="font-small date">June 2021</p>
            </div>
            <div class="Description">
              <div id="circle"></div>
              <p class="font-small">
                Program robot to function in space including 3D motion,
                lasering, reporting using Java
              </p>
            </div>
            <div class="Description">
              <div id="circle"></div>
              <p class="font-small">
                Won Malaysia level preliminary round and represented Malaysia to
                compete in international level
              </p>
            </div>
          </div>
          <div class="section-point">
            <div class="Row">
              <p class="font-small title">2 Paper Publication, International Level</p>
              <p class="font-small date">January 2021</p>
            </div>
            <div class="Description">
              <div id="circle"></div>
              <p class="font-small">
                Publish paper in IRJMETS and international Journal of Computer
                Networks and Applications
              </p>
            </div>
          </div>
        </div>
        <div class="Project Section">
          <p class="font-medium-small bold">Project</p>
          <div class="section-point">
            <div class="Row">
              <p class="font-small title">2D Game</p>
              <p class="font-small date">January 2021 - May 2022</p>
            </div>
            <div class="Description">
              <div id="circle"></div>
              <p class="font-small">
                Publish paper in IRJMETS and international Journal of Computer
                Networks and Applications
              </p>
            </div>
          </div>
          <div class="section-point">
            <div class="Row">
              <p class="font-small title">React Native Mobile Application</p>
              <p class="font-small date">February 2022</p>
            </div>
            <div class="Description">
              <div id="circle"></div>
              <p class="font-small">
                Create react native app connect with graphQL DB, support account
                authentication
              </p>
            </div>
          </div>
          <div class="section-point">
            <div class="Row">
              <p class="font-small title">Ruby on Rails Web Appliation</p>
              <p class="font-small date">May 2021</p>
            </div>
            <div class="Description">
              <div id="circle"></div>
              <p class="font-small">
                Create instagram clone app using Ruby on Rails and Javascript
              </p>
            </div>
          </div>
        </div>
        <div class="Row Section">
          <div class="Skill Subsection">
            <p class="font-medium-small bold">Skill</p>
            <div class="Row-start">
              <div class="Skill-section">
                <div class="Description">
                  <div id="circle"></div>
                  <p class="font-small">Product design</p>
                </div>
                <div class="Description">
                  <div id="circle"></div>
                  <p class="font-small">Flask</p>
                </div>
                <div class="Description">
                  <div id="circle"></div>
                  <p class="font-small">React Native</p>
                </div>
                <div class="Description">
                  <div id="circle"></div>
                  <p class="font-small">.net</p>
                </div>
                <div class="Description">
                  <div id="circle"></div>
                  <p class="font-small">SQL</p>
                </div>
              </div>
              <div class="Skill-section">
                <div class="Description">
                  <div id="circle"></div>
                  <p class="font-small">Spring</p>
                </div>
                <div class="Description">
                  <div id="circle"></div>
                  <p class="font-small">JAVA</p>
                </div>
                <div class="Description">
                  <div id="circle"></div>
                  <p class="font-small">JSP & Servlet</p>
                </div>
                <div class="Description">
                  <div id="circle"></div>
                  <p class="font-small">HTML & CSS</p>
                </div>
                <div class="Description">
                  <div id="circle"></div>
                  <p class="font-small">PHP</p>
                </div>
              </div>
            </div>
          </div>
          <div class="Language Subsection">
            <p class="font-medium-small bold">Language</p>
            <div class="Description">
              <div id="circle"></div>
              <p class="font-small">English</p>
            </div>
            <div class="Description">
              <div id="circle"></div>
              <p class="font-small">Chinese</p>
            </div>
            <div class="Description">
              <div id="circle"></div>
              <p class="font-small">Malay</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
/* <div style={{height: 5+'vh'}}></div>
      <center><h1>Self Introduction - By Tai Wen Jun</h1></center>
      <center><p style={{width: 80+'%', textAlign: 'justify'}}>I am a easy-going and eager-leaner person with a passionate heart to learn new knowledge and improve myself. I had build some application include mobile application, game engine and website out of interest during my leisure time and just perfectly fit for the position required. Although I had achieved an outstanding academic results, yet I believe my strongest strength is the ability to deliver a workable product.  After excelling in academic and won a few competitions, I had realized the best way to test and improve myself is through working experience, thus I had half-working half studying throughout my campus life and gain myself the golden experience for deliver valuable product to company, community and industry. 
</p></center>
      <div style={{height: 20+'vh'}}></div>
      <iframe
        src={fileResume}
        style={{height: 100+'vh', width:70+'%', }} 
        frameborder="0"
      ></iframe> */
