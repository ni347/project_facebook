import "./style.css";
import "./owl.theme.default.css";
// import "./owl.carousel.min.css";
import facebook from "../../images/icons/facebook.svg"
import home from "../../images/icons/home.svg";
import hero from "../../images/avatar/hero.png";
import flag from "../../images/icons/flag.svg";
import tv from "../../images/icons/tv.svg";
import users from "../../images/icons/users.svg";
import calendar from "../../images/icons/calendar.svg";
import plus from "../../images/icons/plus.svg";
import messenger from "../../images/icons/messenger.svg";
import bell from "../../images/icons/bell.svg";
import arrow from "../../images/icons/arrow.svg";
import shield from "../../images/icons/shield.svg";
import coloredpeople from "../../images/icons/colored-people.svg";
import coloredmessenger from "../../images/icons/colored-messenger.svg";
import coloredflag from "../../images/icons/colored-flag.svg";
import arrowdown from "../../images/icons/arrow-down.svg";
import st1 from "../../images/stories/st-1.jpeg";
import st2 from "../../images/stories/st-2.jpeg";
import page1 from "../../images/stories/page-1.jpg";
import st3 from "../../images/stories/st-3.jpeg";
import page2 from "../../images/stories/page-2.jpg";
import page3 from "../../images/stories/page-3.jpeg";

function Home() {
  return (
    <div>
      <nav>
        <div className="left-side">
          <div className="logo">
            {/* <img src="../../images/icons/facebook.svg" alt="hello" /> */}
            <img src={facebook} alt="hello" />
          </div>

          <div className="search">
            <input type="text" placeholder="Search Facebook" name="" id="" />
          </div>
        </div>

        <div className="tabs">
          <div className="tab-icon active">
            <div className="icon">
              <img src={home} alt="" />
            </div>
          </div>

          <div className="tab-icon">
            <div className="icon has-notification">
              <img src={flag} alt="" />
            </div>
          </div>

          <div className="tab-icon">
            <div className="icon">
              <img src={tv} alt="" />
            </div>
          </div>

          <div className="tab-icon">
            <div className="icon">
              <img src={users} alt="" />
            </div>
          </div>

          <div className="tab-icon">
            <div className="icon has-notification">
              <img src={calendar} alt="" />
            </div>
          </div>
        </div>

        <div className="right-side">
          <div className="user">
            <div className="profile">
              <img src={hero} alt="" />
            </div>
            <h4>Anne</h4>
          </div>

          <div className="user-icons">
            <div className="icon">
              <img src={plus} alt="" />
            </div>

            <div className="icon has-notification">
              <img src={messenger} alt="" />
            </div>

            <div className="icon">
              <img src={bell} alt="" />
            </div>

            <div className="icon">
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </nav>

      <div className="wrapper">
        <div className="shortcuts">
          <div className="first-col">
            <div className="menu-item">
              <div className="user">
                <div className="profile">
                  <img src={hero} alt="" />
                </div>
                <h4>Anne</h4>
              </div>
            </div>

            <div className="menu-item">
              <div className="item-row">
                <div className="icon">
                  <img src={shield} alt="" />
                </div>
                <h4>COVID-19 Infromation Center </h4>
              </div>
            </div>

            <div className="menu-item">
              <div className="item-row">
                <div className="icon">
                  <img src={coloredpeople} alt="" />
                </div>
                <h4>Friends </h4>
              </div>
            </div>

            <div className="menu-item">
              <div className="item-row">
                <div className="icon">
                  <img src={coloredmessenger} alt="" />
                </div>
                <h4>Messenger </h4>
              </div>
            </div>

            <div className="menu-item">
              <div className="item-row">
                <div className="icon">
                  <img src={coloredflag} alt="" />
                </div>
                <h4>Pages </h4>
              </div>
            </div>

            <div className="menu-item">
              <div className="item-row  border">
                <div className="icon more">
                  <img src={arrowdown} alt="" />
                </div>
                <h4>see more </h4>
              </div>
            </div>
          </div>
          <div className="second-col">
            <h6 className="title">your shortcuts</h6>
            <div className="menu-item">
              <div className="item-row">
                <div className="icon">
                  <img src={st1} alt="" />
                </div>
                <h4>Designers house </h4>
              </div>
            </div>

            <div className="menu-item">
              <div className="item-row">
                <div className="icon">
                  <img src={st2} alt="" />
                </div>
                <h4>Script house </h4>
              </div>
              <div className="menu-item">
                <div className="item-row">
                  <div className="icon">
                    <img src={page1} alt="" />
                  </div>
                  <h4>ui ux Designers workshop </h4>
                </div>
              </div>

              <div className="menu-item">
                <div className="item-row">
                  <div className="icon">
                    <img src={st3} alt="" />
                  </div>
                  <h4>netflix movies recommends </h4>
                </div>
              </div>

              <div className="menu-item">
                <div className="item-row">
                  <div className="icon">
                    <img src={page2} alt="" />
                  </div>
                  <h4>the futur </h4>
                </div>
              </div>

              <div className="menu-item">
                <div className="item-row">
                  <div className="icon">
                    <img src={page3} alt="" />
                  </div>
                  <h4>aj smart </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="posts">
           
            <div className="stories">
                <div className="owl-controls">
                    <div className="owl-nav">
                        <div className="controllers nxtBtn">
                            <img src="img/icons/arrow-right.svg" alt="">
                        </div>
                    </div>
                </div>
                <div className="owl-carousel owl-theme slider">
                    <div className="item">
                        <div className="overlay first">
                            <div className="create">
                                <div className="icon">
                                    <img src="img/icons/plus.svg" alt="">
                                </div>
                                <span>Create a Story</span>
                            </div>
                        </div>
                        <div className="story-image">
                            <img src="img/avatar/hero.png" alt="">
                        </div>
                    </div>
                   

                    <div className="item">
                        <div className="overlay">
                            <div className="person">
                                <div className="profile">
                                    <img src="img/avatar/2.jpg" alt="">
                                </div>
                            </div>
                            <h4> samantha john</h4>
                        </div>
                        <div className="story-image">
                            <img src="img/stories/st-2.jpeg" alt="">
                        </div>
                    </div>
                    

                    <div className="item">
                        <div className="overlay">
                            <div className="person">
                                <div className="profile">
                                    <img src="img/avatar/3.jpg" alt="">
                                </div>
                            </div>
                            <h4>Omar yassir</h4>
                        </div>
                        <div className="story-image">
                            <img src="img/stories/st-3.jpeg" alt="">
                        </div>
                    </div>
                  

                    <div className="item">
                        <div className="overlay">
                            <div className="person">
                                <div className="profile">
                                    <img src="img/avatar/4.jpg" alt="">
                                </div>
                            </div>
                            <h4>amanda cerny</h4>
                        </div>
                        <div className="story-image">
                            <img src="img/stories/st-4.jpg" alt="">
                        </div>
                    </div>
                  

                    <div className="item">
                        <div className="overlay">
                            <div className="person">
                                <div className="profile">
                                    <img src="img/avatar/5.jpg" alt="">
                                </div>
                            </div>
                            <h4>stacy lopez </h4>
                        </div>
                        <div className="story-image">
                            <img src="img/stories/st-1.jpeg" alt="">
                        </div>
                    </div>
               

                    <div className="item">
                        <div className="overlay">
                            <div className="person">
                                <div className="profile">
                                    <img src="img/avatar/6.jpg" alt="">
                                </div>
                            </div>
                            <h4>joshua simon</h4>
                        </div>
                        <div className="story-image">
                            <img src="img/stories/st-1.jpeg" alt="">
                        </div>
                    </div>
                
                </div>
            </div>
            <div className="timeline">
                <div className="view create-post">
                    <div className="input">
                        <div className="user">
                            <div className="profile">
                                <img src="img/avatar/hero.png" alt="">
                            </div>
                        </div>
                        <input type="text" placeholder="What on your mind, Anne?" name="" id="">
                    </div>
                    <div className="media">
                        <div className="category">
                            <div className="option">
                                <div className="icon">
                                    <img src="img/icons/video-live.svg" alt="">
                                </div>
                                <span>Live video</span>
                            </div>

                            <div className="option">
                                <div className="icon">
                                    <img src="img/icons/photos.svg" alt="">
                                </div>
                                <span>photo/video</span>
                            </div>

                            <div className="option">
                                <div className="icon">
                                    <img src="img/icons/smile.svg" alt="">
                                </div>
                                <span>feeling/activity</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="create-post view smaller-margin">
                    <div className="upper">
                        <div className="title">
                            <div className="icon">
                                <img src="img/icons/video-room.svg" alt="">
                            </div>
                            <span>Rooms</span>
                        </div>
                        <a href="">
                            create
                        </a>
                    </div>

                    <div className="owl-carousel owl-theme rooms">
                        <div className="item">
                            <div className="user">
                                <div className="profile">
                                    <img src="img/avatar/hero.png" alt="">
                                </div>
                            </div>
                        </div>
                       

                        <div className="item">
                            <div className="user">
                                <div className="profile">
                                    <img src="img/avatar/1.jpg" alt="">
                                </div>
                            </div>
                        </div>
                       
                        <div className="item">
                            <div className="user">
                                <div className="profile">
                                    <img src="img/avatar/3.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    
                        <div className="item">
                            <div className="user">
                                <div className="profile">
                                    <img src="img/avatar/4.jpg" alt="">
                                </div>
                            </div>
                        </div>
                 

                        <div className="item">
                            <div className="user">
                                <div className="profile">
                                    <img src="img/avatar/2.jpg" alt="">
                                </div>
                            </div>
                        </div>
       

                        <div className="item">
                            <div className="user">
                                <div className="profile">
                                    <img src="img/avatar/4.jpg" alt="">
                                </div>
                            </div>
                        </div>
                 

                        <div className="item">
                            <div className="user">
                                <div className="profile">
                                    <img src="img/avatar/5.jpg" alt="">
                                </div>
                            </div>
                        </div>
                  
                    </div>
                </div>

                <div className="view view-post-container smaller-margin">
                    <div className="view-post">
                        <div className="upper">
                            <div className="d-flex">
                                <div className="user">
                                    <div className="profile">
                                        <img src="img/avatar/5.jpg" alt="">
                                    </div>
                                </div>

                                <div className="info">
                                    <h6 className="name">
                                        diana barry
                                    </h6>
                                    <span className="time">1 hour ago</span>
                                </div>
                            </div>

                            <div className="dots">
                                <div className="dot"></div>
                            </div>
                        </div>

                        <div className="desc">
                            <p>Travellimg to the future 🌟 , it's alraedy 2020 🙋‍♂🌈🌴</p>
                        </div>

                        <div className="post-img">
                            <img src="img/posts/1.jpg" alt="">
                        </div>

                        <div className="actions-container">
                            <div className="action">
                                <div className="icon">
                                    <img src="img/icons/thumbs-up.svg" alt="">
                                </div>
                                <span>
                                    like
                                </span>
                            </div>

                            <div className="action">
                                <div className="icon">
                                    <img src="img/icons/comment.svg" alt="">
                                </div>
                                <span>
                                    comment
                                </span>
                            </div>

                            <div className="action">
                                <div className="icon">
                                    <img src="img/icons/share.svg" alt="">
                                </div>
                                <span>
                                    share
                                </span>
                            </div>
                        </div>

                        <div className="write-comment">
                            <div className="user">
                                <div className="profile">
                                    <img src="img/avatar/hero.png" alt="">
                                </div>
                            </div>
                            <div className="input">
                                <input type="text" placeholder="Write a comment" name="" id="">
                                <div className="media">
                                    <div className="icon">
                                        <img src="img/icons/camera.svg" alt="">
                                    </div>

                                    <div className="icon">
                                        <img src="img/icons/image.svg" alt="">
                                    </div>

                                    <div className="icon">
                                        <img src="img/icons/smile-2.svg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
              
                <div className="view friends smaller-margin">
                    <div className="upper">
                        <h6>people you may know</h6>
                        <div className="dots">
                            <div className="dot"></div>
                        </div>
                    </div>

                    <div className="owl-carousel owl-theme people">
                        <div className="item">
                            <div className="person-img">
                                <div className="icon">
                                    &times;
                                </div>
                                <img src="img/avatar/1.jpg" alt="">
                            </div>

                            <div className="info">
                                <h4>
                                    rosie pie
                                </h4>
                                <span>4 mutual friend</span>
                                <button>
                                    add friend
                                </button>
                            </div>
                        </div>
                       

                        <div className="item">
                            <div className="person-img">
                                <div className="icon">
                                    &times;
                                </div>
                                <img src="img/avatar/4.jpg" alt="">
                            </div>

                            <div className="info">
                                <h4>
                                    sarah jones
                                </h4>
                                <span>4 mutual friend</span>
                                <button>
                                    add friend
                                </button>
                            </div>
                        </div>
          

                        <div className="item">
                            <div className="person-img">
                                <div className="icon">
                                    &times;
                                </div>
                                <img src="img/avatar/3.jpg" alt="">
                            </div>

                            <div className="info">
                                <h4>
                                    chris doe
                                </h4>
                                <span>4 mutual friend</span>
                                <button>
                                    add friend
                                </button>
                            </div>
                        </div>
                 

                        <div className="item">
                            <div className="person-img">
                                <div className="icon">
                                    &times;
                                </div>
                                <img src="img/avatar/2.jpg" alt="">
                            </div>

                            <div className="info">
                                <h4>
                                    katie adam
                                </h4>
                                <span>4 mutual friend</span>
                                <button>
                                    add friend
                                </button>
                            </div>
                        </div>
            
                    </div>
                </div>
            </div>
        </div>


        <div className="shortcuts shortcuts-2">
            <div className="second-col first-col">
                <div className="menu-item">
                    <div className="upper">
                        <h6>Your pages</h6>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="item-row">
                        <div className="icon">
                            <img src="img/stories/st-2.jpeg" alt="">
                        </div>
                        <h4>Script house </h4>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="item-row">
                        <div className="icon">
                            <img src="img/stories/st-1.jpeg" alt="">
                        </div>
                        <h4>omar ui design </h4>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="item-row  border">
                        <div className="icon more">
                            <img src="img/icons/arrow-down.svg" alt="">
                        </div>
                        <h4>see more </h4>
                    </div>
                </div>
            </div>
            <div className="second-col">

                <h6 className="title">
                    birthdays
                </h6>
                <div className="menu-item">
                    <div className="item-row">
                        <div className="icon not-rounded">
                            <img src="img/icons/gift.svg" alt="">
                        </div>
                        <h4>it's diana berry's birthday </h4>
                    </div>
                </div>
                <div className="online">
                    <h6 className="title">
                        contact
                    </h6>

                    <div className="user">
                        <div className="profile">
                            <img src="img/avatar/1.jpg" alt="">
                        </div>
                        <h4>diana berry</h4>
                    </div>

                    <div className="user">
                        <div className="profile">
                            <img src="img/avatar/4.jpg" alt="">
                        </div>
                        <h4>rosie pie</h4>
                    </div>

                    <div className="user">
                        <div className="profile">
                            <img src="img/avatar/2.jpg" alt="">
                        </div>
                        <h4>samantha jones</h4>
                    </div>

                    <div className="user">
                        <div className="profile">
                            <img src="img/avatar/3.jpg" alt="">
                        </div>
                        <h4>john doe</h4>
                    </div>

                    <div className="user">
                        <div className="profile">
                            <img src="img/avatar/4.jpg" alt="">
                        </div>
                        <h4>stacy jr.</h4>
                    </div>

                    <div className="user">
                        <div className="profile">
                            <img src="img/avatar/5.jpg" alt="">
                        </div>
                        <h4>christin sam</h4>
                    </div>

                    <div className="user">
                        <div className="profile">
                            <img src="img/avatar/6.jpg" alt="">
                        </div>
                        <h4>kate simon</h4>
                    </div>

                    <div className="user">
                        <div className="profile">
                            <img src="img/avatar/1.jpg" alt="">
                        </div>
                        <h4>diana berry</h4>
                    </div>

                    <div className="user">
                        <div className="profile">
                            <img src="img/avatar/2.jpg" alt="">
                        </div>
                        <h4>sarah cerny</h4>
                    </div>

                    <div className="user">
                        <div className="profile">
                            <img src="img/avatar/3.jpg" alt="">
                        </div>
                        <h4>josh doe</h4>
                    </div>

                </div>
            </div>
        </div> */}
      </div>

      {/* <script src="js/jquery.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/index.js"></script> */}
    </div>
  );
}

export default Home;
