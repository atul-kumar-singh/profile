import React from 'react';
import logo from './logo.svg';
//import './assets/fonts/fontStyle.css';
import './App.css';
import githubLogo from './assets/images/github.png' ;
import linkedinLogo from './assets/images/linkedin.png';
import linkedinProfileImage from './assets/images/linkedinProfileImage.png';
import kendriyaVidyalaya from './assets/images/kendriya_vidyalaya.png';
import RGPV from './assets/images/RGPV.png';
import mayank from './assets/images/mayank.jpeg';
import akki from './assets/images/akki.jpeg';
import nishant from './assets/images/nishant.jpeg';
import soumya from './assets/images/soumya.jpeg';

const EasyPieChart = require('easy-pie-chart');

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      sendMailHref : ""
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  //this.myMapCallback = this.myMapCallback.bind(this);
  //  this.handleScroll = this.handleScroll.bind(this);
  }

  handleFormSubmit(e){
    e.preventDefault();
    let myForm = document.getElementById('contactForm');
    let formData = new FormData(myForm);
    let name = "" , email = "" , comment = "" , href ="" ;
    name = formData.get("name");
    email = formData.get("email");
    comment = formData.get("comments");
    href  = `mailto:${email}?subject=Introductory Mail from ${name}&body=${comment}` ;
    this.setState({
      sendMailHref : href
    }, ()=>{
      this.sendMail.click();
    })
  }

  // myMapCallback() {
  //   var myCenter = new google.maps.LatLng(-37.813278, 144.951827);
  //   var mapProp = {center:myCenter, zoom:12, scrollwheel:false, draggable:false, mapTypeId:google.maps.MapTypeId.ROADMAP};
  //   var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  //   var marker = new google.maps.Marker({position:myCenter});
  //   marker.setMap(map);
  // }

  // handleScroll(){
  //    const element = document.querySelectorAll('.slideanim');
  //    console.log("scrool is getting called");
  //    for(let j=0; j<element.lenth; j++){
  //
  //      var pos = element[j].offset().top;
  //      var winTop = window.scrollTop();
  //       if (pos < winTop + 600) {
  //         element[j].addClass("slide");
  //       }
  //    }
  // }

  componentDidMount(){
    const element = document.querySelectorAll('.chart');

    for(let i=0; i<element.length ; i++){
      new EasyPieChart(element[i], {
        easing: 'easeOut',
        delay: 3000,
        barColor:'#ff784e',
        trackColor:'rgba(128,128,128,0.77)',
        scaleColor: false,
        lineWidth: 8,
        size: 140,
        animate: 2000,
        onStep: function(from, to, percent) {
          this.el.children[0].innerHTML = Math.round(percent);
        }
     });
    }
    //this.myMapCallback();

  //  window.addEventListener('scroll', this.handleScroll);

  }

  render(){
    const { sendMailHref } = this.state ;

  return (
    <div className="App" id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
      <header className="App-header">

      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#skills">SKILLS</a></li>
              <li><a href="#education">EDUCATION</a></li>
              <li><a href="#recommendations">RECOMMENDATIONS</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>
        </div>
        </nav>

      </header>


      <main>
      <div className="jumbotron text-center background-jumbo img-responsive">
          <h1 className="threeD">Atul Kumar Singh</h1>
          <p className="threeD-small">Full Stack Web Developer</p>
            <div>
                <a href="https://github.com/atul-kumar-singh" target="_blank" className="cursor"><img src={githubLogo} className="github-logo" /></a>
                <a href="https://www.linkedin.com/in/atul-singh-3905b762/" target="_blank" className="cursor"><img src={linkedinLogo} className="linkedin-logo" /></a>
            </div>
          <div className="ft-20 threeD">click me</div>
          <a href="#about" className="cursor"><span className="glyphicon glyphicon-download glyphiconDownStyle"></span></a>
          </div>

          <div id="about" className="container">
          <div className="row">
            <div className="col-sm-8">
              <h2>About Me</h2><br/>
              <ul>
                <li>Front End Developer with 4 years of professional experiences in User Interface Development using recent Web Technologies and frameworks.</li>
                <li>Web standards, accessibility expert</li>
                <li>Strong developing experience with HTML5, CSS3, ReactJS , Redux, and AngularJS.</li>
                <li>Experienced in JavaScript frameworks and libraries like JQUERY, Reactjs, Redux, redux-form, Angular.js, Datatables, Highcharts etc.</li>
                <li>Experienced in designing of responsive website and optimizing websites for mobile display with Bootstrap and CSS3 / JS Media Queries</li>
                <li>Experienced in Web Tooling & Automation using Webpack, Bower, Grunt, esLint and Gulp etc.</li>
                <li>Expertise in using JSON and AJAX to link with back-end applications.</li>
                <li>Expertise in debugging and troubleshooting existing code using Firebug and Developer Tools.</li>
                <li>Experienced in Agile and Waterfall SDLC.</li>
                <li>Experienced in Unit testing using Jasmine, karma, Jest and enzyme</li>
                <li>Worked with backend engineers and QA to see projects through, from conception to completion</li>
                <li>Created clean, precise browser-compatible code</li>
                <li>Built reusable code for future use</li>
                <li>Experienced in Progressive web development </li>
            </ul>
            </div>
            <div className="col-sm-4">
              <div className="introBox">
                <div><img src={linkedinProfileImage}/></div>
                <ul>
                    <li><strong>Name:&nbsp;</strong>Atul Kumar Singh</li>
                    <li><strong>Date of birth:&nbsp;</strong>17 Mar 1992 </li>
                    <li><strong>Address:&nbsp;</strong>HSR Sector2, Bangalore </li>
                    <li><strong>Nationality:&nbsp;</strong>Indian </li>
                    <li><strong>Phone:&nbsp;</strong> +91-8123043716 </li>
                    <li><strong>Email:&nbsp;</strong>at.kumar114@gmail.com </li>
                </ul>
             </div>
            </div>
          </div>
          </div>

          <div id="skills" className="container-fluid bg-grey">
            <div className="row skillsBox">
                <div className="col-sm-6">
                    <h2>Skills</h2>
                    <ul>
                        <li><strong>Core web technologies :</strong>HTML5 , CSS3, Javascript(ES5/ES6)</li>
                        <li><strong>Javascript libraries:</strong>jQuery, Reactjs, Redux, Redux-from, Lodash, Datatables, Highcharts</li>
                        <li><strong>Javascript Framework:</strong>Angularjs 1.x</li>
                        <li><strong>CSS preprocessor/js:</strong>LESS, SASS and styled components</li>
                        <li><strong>Web automation and Tooling:</strong>Gulp, Grunt and Webpack</li>
                        <li><strong>Package Manager:</strong>NPM, Yarn and Bower</li>
                        <li><strong>Testing framework and Task Runner:</strong>Jasmine, Karma, Jest and Enzyme</li>
                        <li><strong>Version Control:</strong>GIT, SVN</li>
                        <li><strong>Devops:</strong>Docker,CI/CD(basic)</li>
                    </ul>
                </div>
                <div className="col-sm-6">
                        <h2>Learning</h2>
                        <ul>
                            <li><strong>Blockchain </strong></li>
                            <li><strong>AWS</strong></li>
                        </ul>
                    </div>
            </div>
          <div className="row">
            <h2>Primary Skills</h2>
            <div className="col-sm-12">
             <div className="row more-skill text-center">
                    <div className="col-xs-6 col-sm-4 col-md-2">
                        <div className="chart" data-percent="94" data-color="e74c3c">
                              <span className="percent"></span>
                              <div className="chart-text">
                                <span>HTML5</span>
                              </div>
                          </div>
                      </div>
                      <div className="col-xs-6 col-sm-4 col-md-2">
                        <div className="chart" data-percent="78" data-color="2ecc71">
                              <span className="percent"></span>
                              <div className="chart-text">
                                <span>CSS/CSS3</span>
                              </div>
                          </div>
                      </div>
                      <div className="col-xs-6 col-sm-4 col-md-2">
                        <div className="chart" data-percent="85" data-color="3498db">
                              <span className="percent"></span>
                              <div className="chart-text">
                                <span>Bootstrap</span>
                              </div>
                          </div>
                      </div>
                      <div className="col-xs-6 col-sm-4 col-md-2">
                        <div className="chart" data-percent="90" data-color="3498db">
                              <span className="percent"></span>
                              <div className="chart-text">
                                <span>JavaScript</span>
                              </div>
                          </div>
                      </div>
                      <div className="col-xs-6 col-sm-4 col-md-2">
                        <div className="chart" data-percent="80" data-color="3498db">
                              <span className="percent"></span>
                              <div className="chart-text">
                                <span>JQuery</span>
                              </div>
                          </div>
                      </div>
                      <div className="col-xs-6 col-sm-4 col-md-2">
                        <div className="chart" data-percent="65" data-color="3498db">
                              <span className="percent"></span>
                              <div className="chart-text">
                                <span>Angular 1.X</span>
                              </div>
                          </div>
                      </div>
                  </div>
            </div>
            <div className="col-sm-12">
                  <div className="row more-skill text-center">
                      <div className="col-xs-6 col-sm-4 col-md-2">
                          <div className="chart" data-percent="88" data-color="e74c3c">
                              <span className="percent"></span>
                              <div className="chart-text">
                                  <span>Reactjs</span>
                              </div>
                          </div>
                      </div>
                      <div className="col-xs-6 col-sm-4 col-md-2">
                          <div className="chart" data-percent="85" data-color="2ecc71">
                              <span className="percent"></span>
                              <div className="chart-text">
                                  <span>Redux</span>
                              </div>
                          </div>
                      </div>
                      <div className="col-xs-6 col-sm-4 col-md-2">
                          <div className="chart" data-percent="80" data-color="3498db">
                              <span className="percent"></span>
                              <div className="chart-text">
                                  <span>ES6</span>
                              </div>
                          </div>
                      </div>
                      <div className="col-xs-6 col-sm-4 col-md-2">
                          <div className="chart" data-percent="80" data-color="3498db">
                              <span className="percent"></span>
                              <div className="chart-text">
                                  <span>Web automation</span>
                              </div>
                          </div>
                      </div>
                      <div className="col-xs-6 col-sm-4 col-md-2">
                          <div className="chart" data-percent="80" data-color="3498db">
                              <span className="percent"></span>
                              <div className="chart-text">
                                  <span>Accessibility</span>
                              </div>
                          </div>
                      </div>
                      <div className="col-xs-6 col-sm-4 col-md-2">
                          <div className="chart" data-percent="60" data-color="3498db">
                              <span className="percent"></span>
                              <div className="chart-text">
                                  <span>AWS</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          </div>

          <div id="education" className="container-fluid text-center">
          <h2>Educational Details</h2>
          <br/>
          <div className="row slideanim">
            <div className="col-sm-4 col-xs-12">
              <h4> Secondary School Certificate</h4>
              <span><img src={kendriyaVidyalaya} height="100px"/></span>
              <p>Secondary School Certificate from Kendriya Vidyalaya Aruvankadu.</p>
            </div>
            <div className="col-sm-4 col-xs-12">
              <h4>Higher Secondary Education</h4>
              <span><img src={kendriyaVidyalaya} height="100px"/></span>
              <p>Higher Secondary Education from Kendriya Vidyalaya Aruvankadu.</p>
            </div>
            <div className="col-sm-4 col-xs-12">
                <h4>Graduation</h4>
                <span><img src={RGPV} height="100px"/></span>
                <p>Graduation in Electronics and Communication Engineering from Rajiv Gandhi Prodyogiki Vishwavidyala, Bhopal.</p>
            </div>
          </div>
          <br/>
          </div>

          <div id="recommendations" className="container-fluid text-center bg-grey">
          <h2>Recommendations</h2>
          <div id="myCarousel" className="carousel text-center slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>

            <div className="carousel-inner" role="listbox">

              <div className="item active">
                <h4>
                    <div className="row">
                        <div className="col-sm-2 col-xs-12">
                                <a href="https://www.linkedin.com/in/nishant-jichkar-35988871/" target="_blank">
                                    <img className="borderRadius50 img-responsive" src={nishant} alt="nishant image"/>
                                </a>
                            </div>
                        <div className="col-sm-10 col-xs-12">
                            <blockquote>
                                    <p>I am working with Atul from last 1+ year, even though having less experience he has shown really good technical skills in full stack development.  Atul is really good team member to work with, he will understand the problem in detail before coming to any conclusion. He has shown exceptional skills in UI and Javascript in all projects i work with him. He is very enthusiastic and open to learn and teach methodology. Atul is one of the few member who is focused and dedicated for his work, and He as always shown his keen interest in improving the business value through the technology.I recommend Atul as senior full stack developer for all fast track projects. </p>
                                    <a href="https://www.linkedin.com/in/nishant-jichkar-35988871/">
                                        <footer>Nishant Jichkar (Lead Full Stack Engineer at athenahealth)</footer>
                                    </a>
                            </blockquote>
                        </div>
                    </div>
                </h4>
              </div>
                <div className="item">
                    <h4>
                        <div className="row">
                            <div className="col-sm-2 col-xs-12">
                                <a href="https://www.linkedin.com/in/vivek-akki-24953932/" target="_blank">
                                    <img className="borderRadius50 img-responsive"src={akki} alt="Akki"/>
                                </a>
                            </div>
                            <div className="col-sm-10 col-xs-12">
                                <blockquote>
                                    <p>I had the privilege of working with Atul Singh for more than 1 year at Athenahealth. He is proactive, result oriented, responsible, quick learner, deliver things quickly and technically sound employee and he is always ready to put all his energy and time to get the job done. He has an exceptional troubleshooting and analytical skill in Web Technologies. He is really great asset to any company.</p>
                                    <a href="https://www.linkedin.com/in/vivek-akki-24953932/">
                                        <footer>Vivek Akki (Marketing Automation Lead | Eloqua | Marketo | SFMC Certified)</footer>
                                    </a>
                                </blockquote>
                            </div>
                        </div>
                    </h4>
                </div>
              <div className="item">
                    <h4>
                        <div className="row">
                            <div className="col-sm-2 col-xs-12">
                                    <a href="https://www.linkedin.com/in/mayank-khare-30280258/">
                                        <img className="borderRadius50 img-responsive"src={mayank} alt="ramkumar"/>
                                    </a>
                                </div>
                            <div className="col-sm-10 col-xs-12">
                                <blockquote>
                                        <p>Atul is enthusiastic , passionate and committed individual with strong knowledge on the recent web technologies like React/Redux , Angular etc. I was privileged to be associated with him. The maturity with which he handles technical issues, is noteworthy. His inquisitiveness to learn new things makes him stand out in the crowd. His in depth knowledge in the web development field and vast experience makes him an asset to any organisation. Best Of Luck!!!</p>
                                        <a href="https://www.linkedin.com/in/mayank-khare-30280258/">
                                            <footer>Mayank Khare (Principal Technical Architect (Products) at Bahwan CyberTek (BFSI))</footer>
                                        </a>
                                </blockquote>
                            </div>
                        </div>
                        </h4>
                  </div>
              <div className="item">
                    <h4>
                        <div className="row">
                            <div className="col-sm-2 col-xs-12">
                                    <a href="https://www.linkedin.com/in/soumyarmohanty/">
                                        <img className="borderRadius50 img-responsive"src={soumya} alt="siva"/>
                                    </a>
                                </div>
                            <div className="col-sm-10 col-xs-12">
                                <blockquote>
                                        <p>Atul worked with me in few project and POC. He is always interested to create and learn new things. He is having good problem solving skills. He is good team player and his coordination is great.</p>
                                        <a href="https://www.linkedin.com/in/soumyarmohanty/">
                                            <footer>Soumya Ranjan Mohanty (Lead Member of Technical Staff at Athenahealth Technology)</footer>
                                        </a>
                                </blockquote>
                            </div>
                        </div>
                    </h4>
              </div>
            </div>

            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          </div>

          <div id="contact" className="container-fluid bg-grey">
          <h2 className="text-center">Contact</h2>
          <div className="row">
            <div className="col-sm-5">
              <p>Contact me and I will get back to you within 24 hours.</p>
              <p><span className="glyphicon glyphicon-map-marker"></span> Bangalore, Karnataka, India</p>
              <p><span className="glyphicon glyphicon-phone"></span> +91-8123043716</p>
              <p><span className="glyphicon glyphicon-envelope"></span> at.kumar114@gmail.com</p>
            </div>
            <a href={sendMailHref} ref={a => this.sendMail = a} />
            <form onSubmit={this.handleFormSubmit} id="contactForm">
            <div className="col-sm-7 slideanim">
              <div className="row">
                <div className="col-sm-6 form-group">
                  <input className="form-control" id="name" name="name" placeholder="Name" type="text" required/>
                </div>
                <div className="col-sm-6 form-group">
                  <input className="form-control" id="email" name="email" placeholder="Email" type="email" required/>
                </div>
              </div>
              <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br/>
              <div className="row">
                <div className="col-sm-12 form-group">
                  <button className="btn btn-default pull-right" type="submit">Send</button>
                </div>
              </div>
            </div>
          </form>
          </div>
          </div>

          <div id="googleMap" className="google-map"></div>
      </main>

    <footer className="text-center colorWhite pagefooter">
      <a href="#myPage" className="colorWhite" title="To Top">
        <span className="glyphicon glyphicon-chevron-up colorWhite"></span>
      </a>
      <p>Developed By <a className="colorWhite" href="https://www.linkedin.com/in/atul-singh-3905b762/" title="Atul Singh">Atul Singh</a></p>
    </footer>
    </div>
  );
  }
}

export default App;
