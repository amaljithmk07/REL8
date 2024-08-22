import React, { useEffect, useRef, useState } from "react";
import style from "@/styles/Home.module.css";
import "@fontsource/metropolis"; // Defaults to weight 400
import "@fontsource/metropolis/400.css"; // Specify weight
import "@fontsource/metropolis/400-italic.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Autoplay, Scrollbar } from "swiper/modules";
import Link from "next/link";

//https://www.figma.com/design/dh4zh8M6NPPQtohPO1q8Iy/Untitled?t=n6HVFd8jjuGHEvQ3-0

const Index = () => {
  ////
  useEffect(() => {
    AOS.init({
      delay: "600",
      duration: "1400",
    });
  }, []);

  const [countUp, setCountup] = useState(false);

  // const pagination = {
  //   clickable: true,
  // };

  return (
    <div className={style.main_body}>
      {/* ///// */}
      <div
        className={` ${style.first_page} `}
        style={{
          background: `#e2d8ff url("/images/banner.png") no-repeat center`,
        }}
      >
        <div className={` ${style.first_page_container} container`}>
          <div className={` ${style.first_page_text_wrap}`}>
            <h1>
              Streamlining Human Resource Management <br />
              <span>Using Best HR Software in Dubai</span>
            </h1>
            <h4>
              Creating a Harmonious Workplace While Simplifying HR Management
            </h4>
            <span className={style.first_page_button_sec}>
              <button className={style.first_page_button}>
                <Image src={"/images/play.png"} height={15} width={15} alt="" />{" "}
                WATCH PROMO
              </button>
              <button className={style.first_page_button}>
                REQUEST A DEMO
              </button>
            </span>
          </div>
        </div>
      </div>

      {/* //////////// */}
      <div className={` ${style.second_page} `}>
        <div className={` ${style.second_page_image} container`}>
          <div className={style.second_page_screenshot}>
            <Image
              src={"/images/screenshot.png"}
              height={690}
              width={1600}
              alt=""
            />
            <div className={style.second_page_sick_leave}>
              <Image
                src={"/images/sick-leave.png"}
                height={77}
                width={311}
                alt=""
                data-aos="fade-right"

              />
            </div>
            <div className={style.second_page_annual_leave}>
              <Image
                src={"/images/annual-leave.png"}
                height={77}
                width={311}
                alt=""
                data-aos="fade-left"
              />
            </div>
            <div
              className={` ${style.second_page_phone_image_sec}`}
              data-aos="fade-up"
            >
              <Image
                src={"/images/phone.png"}
                height={660}
                width={350}
                alt=""
                className={style.second_page_phone_image}
                data-aos="fade-up"
              />
              <Image
                src={"/images/location.png"}
                height={104}
                width={93}
                alt=""
                className={style.second_page_image_location}
                data-aos="fade-left"
              />
              <Image
                src={"/images/img-icon.png"}
                height={110}
                width={102}
                alt=""
                className={style.second_page_image_img_icon}
                data-aos="fade-left"
              />
              <Image
                src={"/images/emoji.png"}
                height={63}
                width={64}
                alt=""
                className={style.second_page_image_emoji}
                data-aos="fade-left"
              />
              <Image
                src={"/images/emoji1.png"}
                height={63}
                width={64}
                alt=""
                className={style.second_page_image_emoji1}
                data-aos="fade-right"
              />

              <Image
                src={"/images/emoji2.png"}
                height={63}
                width={64}
                alt=""
                className={style.second_page_image_emoji2}
                data-aos="fade-right"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ////////// */}
      <div className={` ${style.third_page} `}>
        <div
          className={` ${style.third_page_container} container`}
          style={{
            background: `url(/images/gradient_back.png) no-repeat top`,
            // backgroundSize: "cover",
          }}
        >
          <Image
            src={"/images/laptop.png"}
            height={558}
            width={1052}
            alt=""
            data-aos="fade-up"
            data-aos-delay="400"
          />
          <h4>
            An intuitive & Powerful HR software solution for your business
          </h4>
          <ScrollTrigger
            onEnter={() => setCountup(true)}
            onExit={() => setCountup(false)}
            className={style.third_page_counting_sec}
          >
            {/* <div className={style.third_page_counting_sec}> */}
            <div
              className={style.third_page_counting_body}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className={style.third_page_counting_body_gradient}>
                <span>
                  {countUp && (
                    <>
                      <CountUp start={0} end={50} duration={5} />+
                    </>
                  )}
                </span>
              </div>
              Companies Server
            </div>
            <div
              className={style.third_page_counting_body}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className={style.third_page_counting_body_gradient}>
                {/* <span>599+</span> */}
                <span>
                  {countUp && (
                    <>
                      <CountUp start={0} end={599} duration={5} />+
                    </>
                  )}{" "}
                </span>
              </div>
              Daily Active Users
            </div>
            <div
              className={style.third_page_counting_body}
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <div className={style.third_page_counting_body_gradient}>
                {/* <span>20+</span> */}
                <span>
                  {countUp && (
                    <>
                      <CountUp start={0} end={20} duration={5} />+
                    </>
                  )}{" "}
                </span>
              </div>
              Industries Served
            </div>
          </ScrollTrigger>
          <Link href={"/"} className={style.third_page_request_demo_btn}>
            REQUEST A DEMO
          </Link>
        </div>
      </div>
      {/* ////// */}
      <div className={` ${style.fourth_page} `}>
        <div className={` ${style.fourth_page_text} `}>
          <h3>
            The one <br /> solution for <br /> Managing your <br />
            <span>Organization & Employees.</span>
          </h3>
          <p>
            HR Portal is a platform for managing, administering, assessing, and
            accounting for all the operations of the human resources.
          </p>
          <button>REQUEST A DEMO</button>
        </div>
        <div className={` ${style.fourth_page_box_sec} `}>
          <div className={` ${style.fourth_page_box_body} `}>
            <div className={` ${style.fourth_page_box_body_img_sec} `}>
              <Image
                src={"/images/calendar.png"}
                height={151}
                width={143}
                alt=""
                data-aos="fade-up"
              />
            </div>
            <div className={` ${style.fourth_page_box_content} `}>
              <h4>Leave Management</h4>
              <p>
                Managing employee vacation & absence requests doesn’t have to be
                time consuming.
              </p>
            </div>
          </div>
          <div className={` ${style.fourth_page_box_body} bg_white`}>
            <div className={` ${style.fourth_page_box_body_img_sec} `}>
              <Image
                src={"/images/timer.png"}
                height={151}
                width={143}
                alt=""
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </div>
            <div className={` ${style.fourth_page_box_content} `}>
              <h4>Employee Time Clock</h4>
              <p>Track and manage employee work hours on jobs, projects.</p>
            </div>
          </div>
          <div className={` ${style.fourth_page_box_body} bg_white`}>
            <div className={` ${style.fourth_page_box_body_img_sec} `}>
              <Image
                src={"/images/inbox.png"}
                height={151}
                width={143}
                alt=""
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </div>
            <div className={` ${style.fourth_page_box_content} `}>
              <h4>Payroll & Salary</h4>
              <p>
                Streamline and centralize payroll operations, providing the
                tools for quick and easy payments.
              </p>
            </div>
          </div>
          <div className={` ${style.fourth_page_box_body} `}>
            <div className={` ${style.fourth_page_box_body_img_sec} `}>
              <Image
                src={"/images/rocket.png"}
                height={151}
                width={143}
                alt=""
                data-aos="fade-up"
              />
            </div>
            <div className={` ${style.fourth_page_box_content} `}>
              <h4>KPI & Performance</h4>
              <p>
                KPIs provide clarity, direction, and a clear picture of how well
                we are doing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* /// */}

      <div className={` ${style.fifth_page} `}>
        <div className={` ${style.fifth_page_card_1} `}>
          <div className={` ${style.fifth_page_card_1_content} `}>
            <h4>
              <span>Appreciate Your</span> <br />
              Employees On Their <br /> Achievements.
            </h4>
            <p>
              Award employees efforts with badges as a testament of achievements
              Encourage employees to be in sprint.
            </p>
          </div>

          <div className={` ${style.fifth_page_card_1_image_sec} `}>
            <Image
              src={"/images/mobile1.png"}
              height={1085}
              width={536}
              alt=""
              className={` ${style.fifth_page_card_phone_img} `}
              data-aos="fade-up"
            />
            <Image
              src={"/images/mobile_background.png"}
              height={627}
              width={627}
              alt=""
              className={` ${style.fifth_page_card_poppers_img} `}
              data-aos="fade-right"
            />
            <Image
              src={"/images/punctual.png"}
              height={76}
              width={343}
              alt=""
              data-aos="fade-left"
              className={` ${style.fifth_page_card_punctual_img} `}
            />
            <Image
              src={"/images/team-player.png"}
              height={50}
              width={228}
              alt=""
              data-aos="fade-right"
              className={` ${style.fifth_page_card_team_player_img} `}
            />
          </div>
        </div>
        <div className={` ${style.fifth_page_card_2} `}>
          <div className={` ${style.fifth_page_card_2_content} `}>
            <h4>
              <span>An Accurate</span> <br />
              Employees Time
              <br />
              Tracking.
            </h4>
            <p>
              Our accurate time tracking system ensures that every moment
              counts, contributing to a more productive and accountable
              workforce.
            </p>
          </div>

          <div className={` ${style.fifth_page_card_2_image_sec} `}>
            <Image
              src={"/images/mobile2.png"}
              height={1085}
              width={536}
              alt=""
              className={` ${style.fifth_page_card2_phone_img} `}
              data-aos="fade-up"
            />
            <Image
              src={"/images/mobile2-watch.png"}
              height={300}
              width={200}
              alt=""
              className={` ${style.fifth_page_card2_watch} `}
              data-aos="fade-right"
              data-aos-delay="300"
            />
            <Image
              src={"/images/mobile2-timer.png"}
              height={159}
              width={420}
              alt=""
              data-aos="fade-left"
              className={` ${style.fifth_page_card2_timer} `}
            />
          </div>
        </div>
        <div className={` ${style.fifth_page_card_3} `}>
          <div className={` ${style.fifth_page_card_3_content} `}>
            <h4>
              <span>Celebrate Employees</span> <br />
              Birthdays & Other Events
              <br />
              On Our Community{" "}
            </h4>
            <p>
              Join us in creating a workplace where every milestone is valued
              and every achievement is celebrated. With our employee-centric
              software, it &apos; s easy to spread the joy!
            </p>
          </div>

          <div className={` ${style.fifth_page_card_3_image_sec} `}>
            <Image
              src={"/images/mobile3.png"}
              height={847}
              width={418}
              alt=""
              className={` ${style.fifth_page_card3_phone_img} `}
              data-aos="fade-up"
            />
            <Image
              src={"/images/mobile3_bubble.png"}
              height={135}
              width={135}
              alt=""
              className={` ${style.fifth_page_card3_bubble} `}
              data-aos="fade-right"
            />
          </div>
        </div>
      </div>

      {/* /////// */}
      <div className={` ${style.sixth_page} `}>
        <div className={` ${style.sixth_page_container} container`}>
          <div className={` ${style.sixth_page_text_content} `}>
            <h4>
              Elevate Your <br /> HR Experience With <br />{" "}
              <span> Rel8 AI</span>
            </h4>
            <h5>
              Discover the Future of HR with Element8 &apos;s AI-Powered
              Solutions
            </h5>
            <p>
              At Element8, we &apos;re not just keeping up with the times; we
              &apos;re shaping the future of HR. Our innovative software
              leverages the latest in AI technology to revolutionize how you
              manage your workforce.
            </p>
            <button>GET STARTED</button>
          </div>
          <div className={` ${style.sixth_page_card_sec} `}>
            <div className={` ${style.sixth_page_card} `}>
              <div className={` ${style.sixth_page_card_img_sec} `}>
                <Image
                  src={"/images/resume-screening.png"}
                  height={201}
                  width={213}
                  alt=""
                  data-aos="fade-left"
                />
              </div>
              <h3>Resume Screening Made Easy</h3>
              <p>
                Say goodbye to manual resume reviews. Our AI effortlessly scans
                and filters resumes to find the perfect fit for your team.
              </p>
            </div>
            <div className={` ${style.sixth_page_card} `}>
              <div className={` ${style.sixth_page_card_img_sec} `}>
                <Image
                  src={"/images/chatbot.png"}
                  height={201}
                  width={213}
                  alt=""
                  data-aos="fade-left"
                />
              </div>
              <h3>Chatbots for Instant Support</h3>
              <p>
                Have questions? Our friendly HR chatbots are here 24/7, ready to
                assist employees and applicants with lightning-fast responses.
              </p>
            </div>
            <div className={` ${style.sixth_page_card} `}>
              <div className={` ${style.sixth_page_card_img_sec} `}>
                <Image
                  src={"/images/resume-screening.png"}
                  height={201}
                  width={213}
                  alt=""
                  data-aos="fade-left"
                />
              </div>
              <h3>Resume Screening Made Easy</h3>
              <p>
                Say goodbye to manual resume reviews. Our AI effortlessly scans
                and filters resumes to find the perfect fit for your team.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ////////// */}
      <div className={` ${style.seven_page} `}>
        <div className={` ${style.seven_page_container} container`}>
          <div className={` ${style.seven_page_card1_sec} `}>
            <div className={` ${style.seven_page_card1_text_sec} `}>
              <h3>
                Foster a Positive <br />
                <span>
                  {" "}
                  Organizational <br /> Culture
                </span>
              </h3>
              <p>
                HR Portal is a platform for managing, administering, assessing,
                and accounting for all the operations of the human resources.
              </p>
            </div>
            <div className={` ${style.seven_page_card1_img_sec} `}>
              <Image
                src={"/images/mobile7-1.png"}
                width={328}
                height={664}
                alt=""
                className={style.seven_page_card1_img_sec_phone}
                data-aos="fade-up"
              />
              <Image
                src={"/images/team-marketing-room.png"}
                width={350}
                height={150}
                alt=""
                data-aos="fade-right"
                className={style.seven_page_card1_img_sec_team_marketing_room}
              />
              <Image
                src={"/images/face-blur.png"}
                width={164}
                height={164}
                alt=""
                data-aos="fade-left"
                data-aos-delay="1000"
                className={style.seven_page_card1_img_sec_face_blur}
              />
              <Image
                src={"/images/meeting-room.png"}
                width={157}
                height={157}
                alt=""
                data-aos="fade-right"
                className={style.seven_page_card1_img_sec_meeting_room}
              />
              <Image
                src={"/images/icon7-1.png"}
                width={48}
                height={48}
                alt=""
                data-aos="fade-right"
                data-aos-delay="1000"
                className={style.seven_page_card1_img_sec_icon1}
              />
              <Image
                src={"/images/icon7-2.png"}
                width={48}
                height={48}
                alt=""
                data-aos="fade-left"
                data-aos-delay="1000"
                className={style.seven_page_card1_img_sec_icon2}
              />
              <Image
                src={"/images/icon7-3.png"}
                width={48}
                height={48}
                alt=""
                data-aos="fade-up"
                className={style.seven_page_card1_img_sec_icon3}
              />
            </div>
          </div>
          {/* //// */}

          <div className={` ${style.seven_page_card2_sec} `}>
            <Swiper
              pagination={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              // className="mySwiper"
              className={` ${style.seven_page_card2_img_container} mySwiper `}
            >
              <SwiperSlide>
                <div className={` ${style.seven_page_card2_img_sec} `}>
                  <Image
                    src={"/images/leave-and-weakupdate.png"}
                    width={244}
                    height={188}
                    alt=""
                    data-aos="fade-left"
                    className={
                      style.seven_page_card2_img_sec_leave_and_weakupdate
                    }
                  />
                  <Image
                    src={"/images/attendance-graph.png"}
                    width={477}
                    height={236}
                    alt=""
                    data-aos="fade-right"
                    className={style.seven_page_card2_img_sec_attendance_graph}
                  />
                  <Image
                    src={"/images/video7-1.png"}
                    width={267}
                    height={148}
                    alt=""
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    className={style.seven_page_card2_img_sec_video}
                  />
                  <Image
                    src={"/images/face-blur.png"}
                    width={164}
                    height={164}
                    alt=""
                    data-aos="fade-left"
                    className={style.seven_page_card2_img_sec_face_blur}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={` ${style.seven_page_card2_img_sec} `}>
                  <Image
                    src={"/images/leave-and-weakupdate.png"}
                    width={244}
                    height={188}
                    alt=""
                    data-aos="fade-left"
                    className={
                      style.seven_page_card2_img_sec_leave_and_weakupdate
                    }
                  />
                  <Image
                    src={"/images/attendance-graph.png"}
                    width={477}
                    height={236}
                    alt=""
                    data-aos="fade-right"
                    className={style.seven_page_card2_img_sec_attendance_graph}
                  />
                  <Image
                    src={"/images/video7-1.png"}
                    width={267}
                    height={148}
                    alt=""
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    className={style.seven_page_card2_img_sec_video}
                  />
                  <Image
                    src={"/images/face-blur.png"}
                    width={164}
                    height={164}
                    alt=""
                    data-aos="fade-left"
                    className={style.seven_page_card2_img_sec_face_blur}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
            <div className={` ${style.seven_page_card2_text_sec} `}>
              <h3>
                Transform Your <br />
                <span>Organization</span>
              </h3>
              <p>
                HR Portal is a platform for managing, administering, assessing,
                and accounting for all the operations of the human resources.
              </p>
              <button className={` ${style.seven_page_card2_text_sec_btn} `}>
                REQUEST A DEMO
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* //////////////// */}
      <div
        className={` ${style.eight_page} `}
        style={{
          background:
            "center / cover no-repeat url('/images/phone-images.png')",
        }}
      ></div>

      {/* //////// */}

      <div className={` ${style.nine_page} `}>
        <h3>
          Transform Your Organization <br />
          <span>With Our Feature-Packed Software.</span>
        </h3>

        <div className={` ${style.nine_page_menu_btn_sec} `}>
          <button className={` ${style.nine_page_menu_btn}  `}>
            Dashboard
          </button>
          <button className={` ${style.nine_page_menu_btn}  `}>
            Leave & Attendance
          </button>
          <button className={` ${style.nine_page_menu_btn}  `}>
            Payroll & Salary
          </button>
          <button className={` ${style.nine_page_menu_btn}  `}>
            Performance KPI
          </button>
          <button className={` ${style.nine_page_menu_btn}  `}>Training</button>
        </div>
        <Swiper
          // pagination={pagination}

          modules={[Pagination]}
          className={` ${style.nine_page_slider_sec} mySwiper `}
        >
          <SwiperSlide>
            <Image
              src={"/images/dashboard.png"}
              width={1200}
              height={780}
              alt=""
              data-aos="fade-up"
              className={style.nine_page_slider_sec_img}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/images/dashboard.png"}
              width={1200}
              height={780}
              alt=""
              data-aos="fade-right"
              className={style.nine_page_slider_sec_img}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/images/dashboard.png"}
              width={1200}
              height={780}
              alt=""
              data-aos="fade-right"
              className={style.nine_page_slider_sec_img}
            />
          </SwiperSlide>
        </Swiper>

        <h4>
          Our Dashboard includes many widgets containing information &apos;s
          about the whole organization of yours. it includes quick view of leave
          & work updates, Attendance overview, Attendance Reports, Leaves and
          upcoming events.
        </h4>
      </div>

      {/* ////////// */}

      <div className={` ${style.ten_page} `}>
        <div className={` ${style.ten_page_container} container`}>
          <div className={` ${style.ten_page_text_content}`}>
            <h3>
              Benefits Of A <br />
              <span>Complete HR & Payroll Platform</span>
            </h3>
            <p>
              We ensure your business runs smoothly, while increasing
              productivity and efficiency across the organization.
            </p>
            <Link href={"/"} className={` ${style.ten_page_text_content_btn}`}>
              REQUEST A DEMO
            </Link>
          </div>
          <div className={` ${style.ten_page_card_content}`}>
            <div className={` ${style.ten_page_card1}`}>
              <h3 data-aos="fade-left">Make Better Decisions</h3>
              <p data-aos="fade-left" data-aos-delay="1000">
                Our people data will help you automatically and accurately
                report on the data that matters the most to your organization.
                Enabling managers and stakeholders to make smarter, more timely
                decisions.
              </p>
              <Image
                src={"/images/make-better-decision.png"}
                height={687}
                width={851}
                alt=""
                className={style.ten_page_card1_img}
                data-aos="fade-right"
                data-aos-delay="1000"
              />
            </div>
            <div className={` ${style.ten_page_card2}`}>
              <h3 data-aos="fade-left">Improve Employee Experience</h3>
              <p data-aos="fade-left" data-aos-delay="1000">
                User-friendly, well designed HR software helps transform your
                employees experience. Become a forward-thinking and strategic
                organization.
              </p>
              <Image
                src={"/images/improve-employee-experience.png"}
                height={937}
                width={463}
                alt=""
                className={style.ten_page_card2_img}
                data-aos="fade-up"
                data-aos-delay="1000"
              />
            </div>
            <div className={` ${style.ten_page_card3}`}>
              <h3 data-aos="fade-left">Efficiency and productivity</h3>
              <p data-aos="fade-left" data-aos-delay="1000">
                RPA harnesses advanced cognitive computing and AI to automate
                high-volume transactional tasks, document handling and
                validation.
              </p>
              <Image
                src={"/images/efficiency-and-productivity.png"}
                height={445}
                width={1150}
                alt=""
                className={style.ten_page_card3_img}
                data-aos="fade-up"
                data-aos-delay="1000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ////////////// */}
      <div className={` ${style.p11_page} `}>
        <div className={` ${style.p11_page_container} container`}>
          <h3>
            Integrated With <br />
            <span>Your Favorite Apps</span>
          </h3>

          <div className={` ${style.p11_page_card_sec} `}>
            <div className={` ${style.p11_page_card} `}>
              <Image
                src={"/images/slack-logo.png"}
                height={47}
                width={187}
                alt=""
              />
            </div>
            <div className={` ${style.p11_page_card} `}>
              <Image
                src={"/images/google-sheets-logo.png"}
                height={80}
                width={216}
                alt=""
              />
            </div>
            <div className={` ${style.p11_page_card} `}>
              <Image
                src={"/images/google-sheets-logo.png"}
                height={80}
                width={216}
                alt=""
              />
            </div>
            <div className={` ${style.p11_page_card} `}>
              <Image
                src={"/images/slack-logo.png"}
                height={47}
                width={187}
                alt=""
              />
            </div>
            <div className={` ${style.p11_page_card} `}>
              <Image
                src={"/images/google-sheets-logo.png"}
                height={80}
                width={216}
                alt=""
              />
            </div>
            <div className={` ${style.p11_page_card} `}>
              <Image
                src={"/images/slack-logo.png"}
                height={47}
                width={187}
                alt=""
              />
            </div>
            <div className={` ${style.p11_page_card} `}>
              <Image
                src={"/images/google-sheets-logo.png"}
                height={80}
                width={216}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* //////// */}
      <div className={` ${style.p12_page} `}>
        <Image
          src={"/images/employee-benefits-circle.png"}
          height={853}
          width={985}
          alt=""
          className={style.p12_page_round_image}
        />
        <div className={` ${style.p12_page_text_content} `}>
          <h3>
            Employee <span>Benefits</span>
          </h3>
          <p>
            Rel8hr HRMS Cloud solution enables your team to have exceptional
            access to work, financial, and medical benefits meant to improve
            their well-being, productivity, and commitment, as well as to
            provide and international employee experience.
          </p>
          <ul className={style.p12_page_text_content_list}>
            <li>Claim Reimbursements Online</li>
            <li>Apply for Leave Online</li>
            <li>Documents in 1 Place</li>
            <li>Visa Processing</li>
          </ul>
          <Link href={"/"} className={` ${style.p12_page_text_content_btn} `}>
            REQUEST A DEMO
          </Link>{" "}
        </div>
        <div className={` ${style.p12_page_image_content} `}>
          <Image
            src={"/images/sqr1.png"}
            height={16}
            width={16}
            alt=""
            className={style.p12_page_image_content_square}
            data-aos="fade-right"
          />
          <Image
            src={"/images/sqr2.png"}
            height={30}
            width={30}
            alt=""
            className={style.p12_page_image_content_square}
            data-aos="fade-right"
          />
          <Image
            src={"/images/sqr3.png"}
            height={44}
            width={44}
            alt=""
            className={style.p12_page_image_content_square}
            data-aos="fade-right"
          />
          <Image
            src={"/images/sqr4.png"}
            height={78}
            width={78}
            alt=""
            className={style.p12_page_image_content_square}
            data-aos="fade-right"
          />
          <Image
            src={"/images/sqr5.png"}
            height={32}
            width={32}
            alt=""
            className={style.p12_page_image_content_square}
            data-aos="fade-right"
          />
          <Image
            src={"/images/sqr6.png"}
            height={22}
            width={22}
            alt=""
            className={style.p12_page_image_content_square}
            data-aos="fade-right"
          />
          <Image
            src={"/images/sqr7.png"}
            height={78}
            width={78}
            alt=""
            className={style.p12_page_image_content_square}
            data-aos="fade-right"
          />
          <Image
            src={"/images/sqr8.png"}
            height={50}
            width={50}
            alt=""
            className={style.p12_page_image_content_square}
            data-aos="fade-right"
          />
          <Image
            src={"/images/sqr9.png"}
            height={30}
            width={30}
            alt=""
            className={style.p12_page_image_content_square}
            data-aos="fade-right"
          />
          <Image
            src={"/images/sqr3.png"}
            height={44}
            width={44}
            alt=""
            className={style.p12_page_image_content_square}
            data-aos="fade-right"
          />
          <Image
            src={"/images/sqr1.png"}
            height={16}
            width={16}
            alt=""
            className={style.p12_page_image_content_square}
            data-aos="fade-right"
          />
          {/* ///////////////////////// */}
          <div className={style.p12_page_image_content_person}>
            <Image
              src={"/images/person1.png"}
              height={152}
              width={152}
              alt=""
              data-aos="fade-up"
            />
          </div>
          <div className={style.p12_page_image_content_person}>
            <Image
              src={"/images/person2.png"}
              height={229}
              width={229}
              alt=""
              data-aos="fade-up"
              data-aos-delay="500"
            />
          </div>
          <div className={style.p12_page_image_content_person}>
            <Image
              src={"/images/person3.png"}
              height={292}
              width={292}
              alt=""
              data-aos="fade-up"
              data-aos-delay="1000"
            />
          </div>
          <div className={style.p12_page_image_content_person}>
            <Image
              src={"/images/person4.png"}
              height={229}
              width={229}
              alt=""
              data-aos="fade-up"
              data-aos-delay="1500"
            />
          </div>
          <div className={style.p12_page_image_content_person}>
            <Image
              src={"/images/person5.png"}
              height={175}
              width={175}
              alt=""
              data-aos="fade-up"
              data-aos-delay="300"
            />
          </div>
          <div className={style.p12_page_image_content_person}>
            <Image
              src={"/images/person6.png"}
              height={229}
              width={229}
              alt=""
              data-aos="fade-up"
              data-aos-delay="600"
            />
          </div>
          <div className={style.p12_page_image_content_person}>
            <Image
              src={"/images/person7.png"}
              height={292}
              width={292}
              alt=""
              data-aos="fade-up"
              data-aos-delay="800"
            />
          </div>
        </div>
        {/* /// */}
      </div>

      {/* ////// */}

      <div className={` ${style.p13_page} `}>
        <h3>
          Companies That <b> Trust Us</b>
        </h3>
        <p>Some of the region and the worlds leading brands have chosen us.</p>
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          speed={3000}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className={`mySwiper ${style.p13_card_container} `}
        >
          {" "}
          <SwiperSlide>
            <div className={` ${style.p13_card_body} `}>
              <Image
                src={"/images/company-logo1.png"}
                height={200}
                width={300}
                alt=""
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className={` ${style.p13_card_body} `}>
              <Image
                src={"/images/company-logo2.png"}
                height={200}
                width={300}
                alt=""
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className={` ${style.p13_card_body} `}>
              <Image
                src={"/images/company-logo3.png"}
                height={200}
                width={300}
                alt=""
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className={` ${style.p13_card_body} `}>
              <Image
                src={"/images/company-logo4.png"}
                height={200}
                width={300}
                alt=""
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className={` ${style.p13_card_body} `}>
              <Image
                src={"/images/company-logo5.png"}
                height={200}
                width={300}
                alt=""
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className={` ${style.p13_card_body} `}>
              <Image
                src={"/images/company-logo3.png"}
                height={200}
                width={300}
                alt=""
              />
            </div>
          </SwiperSlide>{" "}
        </Swiper>
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          speed={3000}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className={`mySwiper ${style.p13_card_container} `}
        >
          {" "}
          <SwiperSlide>
            <div className={` ${style.p13_card_body} `}>
              <Image
                src={"/images/company-logo1.png"}
                height={200}
                width={300}
                alt=""
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className={` ${style.p13_card_body} `}>
              <Image
                src={"/images/company-logo2.png"}
                height={200}
                width={300}
                alt=""
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className={` ${style.p13_card_body} `}>
              <Image
                src={"/images/company-logo3.png"}
                height={200}
                width={300}
                alt=""
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className={` ${style.p13_card_body} `}>
              <Image
                src={"/images/company-logo4.png"}
                height={200}
                width={300}
                alt=""
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className={` ${style.p13_card_body} `}>
              <Image
                src={"/images/company-logo5.png"}
                height={200}
                width={300}
                alt=""
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className={` ${style.p13_card_body} `}>
              <Image
                src={"/images/company-logo3.png"}
                height={200}
                width={300}
                alt=""
              />
            </div>
          </SwiperSlide>{" "}
        </Swiper>
        <Link href={"/"} className={` ${style.p13_button} `}>
          REQUEST A DEMO
        </Link>{" "}
      </div>

      {/* ////// */}
      <div
        className={` ${style.p14_page} `}
        style={{
          background: `url(/images/about-us.png) no-repeat center/cover`,
        }}
      >
        <div className={` ${style.p14_page_container} container `}>
          <div className={` ${style.p14_page_head_sec} `}>
            <h3>
              What People Are Saying <br />
              <b>About Us</b>
            </h3>

            <div className={` ${style.p14_page_head_btn_sec} `}>
              <button className={` ${style.p14_page_head_btn} `} id="prev_btn">
                <Image
                  src={"/images/button.png"}
                  height={66}
                  width={66}
                  alt=""
                />
              </button>
              <button
                className={` ${style.p14_page_head_btn} `}
                style={{ transform: `scaleX(-1)` }}
                id="next_btn"
              >
                <Image
                  src={"/images/button.png"}
                  height={66}
                  width={66}
                  alt=""
                />
              </button>
            </div>
          </div>

          {/* ////////// */}
          <div className={` ${style.p14_page_slider_sec}  `}>
            <Swiper
              scrollbar={{
                hide: true,
              }}
              slidesPerView={2}
              navigation={{
                prevEl: "#prev_btn",
                nextEl: "#next_btn",
              }}
              modules={[Scrollbar]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className={` ${style.p14_page_slider_card} `}>
                  <div className={` ${style.p14_page_slider_card_head} `}>
                    <div className={` ${style.p14_page_slider_card_profile} `}>
                      <Image
                        src={"/images/profile.png"}
                        width={64}
                        height={64}
                        alt=""
                      />
                    </div>
                    <div className={` ${style.p14_page_slider_card_name} `}>
                      <h4>Emre Bana</h4>
                      <p>Director of Claims Experience</p>
                    </div>
                    <div className={` ${style.p14_page_slider_card_company} `}>
                      <Image
                        src={"/images/company-logo3.png"}
                        height={100}
                        width={222}
                        alt=""
                      />{" "}
                    </div>
                  </div>
                  <div className={` ${style.p14_page_slider_card_data} `}>
                    <p>
                      “Compared to our old provider, it &apos;s so much easier
                      to manage our calls, messages, and team with their
                      user-friendly interface. Our HRMS was incredible and made
                      onboarding and launching seamless – we&apos;re thrilled
                      with the switch.”
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={` ${style.p14_page_slider_card} `}>
                  <div className={` ${style.p14_page_slider_card_head} `}>
                    <div className={` ${style.p14_page_slider_card_profile} `}>
                      <Image
                        src={"/images/profile.png"}
                        width={64}
                        height={64}
                        alt=""
                      />
                    </div>
                    <div className={` ${style.p14_page_slider_card_name} `}>
                      <h4>Emre Bana</h4>
                      <p>Director of Claims Experience</p>
                    </div>
                    <div className={` ${style.p14_page_slider_card_company} `}>
                      <Image
                        src={"/images/company-logo3.png"}
                        height={100}
                        width={222}
                        alt=""
                      />{" "}
                    </div>
                  </div>
                  <div className={` ${style.p14_page_slider_card_data} `}>
                    <p>
                      “Compared to our old provider, it&apos;s so much easier to
                      manage our calls, messages, and team with their
                      user-friendly interface. Our HRMS was incredible and made
                      onboarding and launching seamless – we&apos;re thrilled
                      with the switch.”
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={` ${style.p14_page_slider_card} `}>
                  <div className={` ${style.p14_page_slider_card_head} `}>
                    <div className={` ${style.p14_page_slider_card_profile} `}>
                      <Image
                        src={"/images/profile.png"}
                        width={64}
                        height={64}
                        alt=""
                      />
                    </div>
                    <div className={` ${style.p14_page_slider_card_name} `}>
                      <h4>Emre Bana</h4>
                      <p>Director of Claims Experience</p>
                    </div>
                    <div className={` ${style.p14_page_slider_card_company} `}>
                      <Image
                        src={"/images/company-logo3.png"}
                        height={100}
                        width={222}
                        alt=""
                      />{" "}
                    </div>
                  </div>
                  <div className={` ${style.p14_page_slider_card_data} `}>
                    <p>
                      “Compared to our old provider, it&apos;s so much easier to
                      manage our calls, messages, and team with their
                      user-friendly interface. Our HRMS was incredible and made
                      onboarding and launching seamless – we&apos;re thrilled
                      with the switch.”
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={` ${style.p14_page_slider_card} `}>
                  <div className={` ${style.p14_page_slider_card_head} `}>
                    <div className={` ${style.p14_page_slider_card_profile} `}>
                      <Image
                        src={"/images/profile.png"}
                        width={64}
                        height={64}
                        alt=""
                      />
                    </div>
                    <div className={` ${style.p14_page_slider_card_name} `}>
                      <h4>Emre Bana</h4>
                      <p>Director of Claims Experience</p>
                    </div>
                    <div className={` ${style.p14_page_slider_card_company} `}>
                      <Image
                        src={"/images/company-logo3.png"}
                        height={100}
                        width={222}
                        alt=""
                      />{" "}
                    </div>
                  </div>
                  <div className={` ${style.p14_page_slider_card_data} `}>
                    <p>
                      “Compared to our old provider, it&apos;s so much easier to
                      manage our calls, messages, and team with their
                      user-friendly interface. Our HRMS was incredible and made
                      onboarding and launching seamless – we&apos;re thrilled
                      with the switch.”
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* ////// */}

      <div className={` ${style.p15_page} `}>
        <div className={` ${style.p15_page_container} container `}>
          <h3>
            What’s Our <b> Customers Experience</b>
          </h3>
          <ScrollTrigger
            onEnter={() => setCountup(true)}
            onExit={() => setCountup(false)}
            className={style.p15_page_container_card_sec}
          >
            <div
              className={` ${style.p15_page_container_card}  `}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>
                {countUp == true ? (
                  <>
                    <CountUp start={0} end={65} duration={3} />%
                  </>
                ) : (
                  "0"
                )}{" "}
              </h3>
              Increased Productivity
            </div>
            <div
              className={` ${style.p15_page_container_card}  `}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3>
                {countUp && (
                  <>
                    <CountUp start={0} end={80} duration={3} />%
                  </>
                )}{" "}
              </h3>
              Reduction of Labour{" "}
            </div>
            <div
              className={` ${style.p15_page_container_card}  `}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h3>
                {countUp && (
                  <>
                    <CountUp start={0} end={70} duration={3} />%
                  </>
                )}{" "}
              </h3>
              Efficiency of Team{" "}
            </div>
            {/* </div> */}
          </ScrollTrigger>
          <div className={` ${style.p15_page_faq_sec} `}>
            <div className={` ${style.p15_page_faq_sec_title} `}>
              <h3>
                Frequently <br />
                <b>Asked Questions</b>
              </h3>
              <p>
                Quick answers to questions you may have. Can’t find answer to
                your questions ?
              </p>
              <Link
                href={"/"}
                className={` ${style.p15_page_faq_sec_title_btn} `}
              >
                CONTACT US
              </Link>
            </div>
            <ul className={style.p15_page_faq_sec_list_sec}>
              <li>
                <span>
                  How does the software help increase productivity?{" "}
                  <button className={style.p15_page_faq_sec_list_btn}>
                    <Image
                      src={"/images/plus.png"}
                      height={24}
                      width={24}
                      alt=""
                    />
                  </button>
                </span>
                <p>
                  Yes, the software provides reporting and analytics
                  capabilities to measure the effectiveness of the employees and
                  identify areas for improvement.
                </p>
              </li>
              <li>
                <span>
                  How does the software help increase productivity?{" "}
                  <button className={style.p15_page_faq_sec_list_btn}>
                    <Image
                      src={"/images/plus.png"}
                      height={24}
                      width={24}
                      alt=""
                    />
                  </button>
                </span>
                <p>
                  Yes, the software provides reporting and analytics
                  capabilities to measure the effectiveness of the employees and
                  identify areas for improvement.
                </p>
              </li>
              <li>
                <span>
                  How does the software help increase productivity?{" "}
                  <button className={style.p15_page_faq_sec_list_btn}>
                    <Image
                      src={"/images/plus.png"}
                      height={24}
                      width={24}
                      alt=""
                    />
                  </button>
                </span>
                <p>
                  Yes, the software provides reporting and analytics
                  capabilities to measure the effectiveness of the employees and
                  identify areas for improvement.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ///////// */}

      <div className={` ${style.p16_page} `}>
        <div className={` ${style.p16_page_container} container `}>
          <div className={` ${style.p16_page_title_sec} `}>
            <h3>
              What’s <br />
              <b>Our Pricing & Plans</b>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
              ultrices neque ornare aenean euismod elementum. Et odio
              pellentesque
            </p>
          </div>
          <div className={` ${style.p16_page_pricing_card_sec} `}>
            <div className={` ${style.p16_page_pricing_card} `}>
              <h3>Starter Plan</h3>
              <p>
                Lorem ipsum dolor sit amet, conse sed do eiusmod tempor incidid.
              </p>
              <span>
                $ 1000
                <h5> / Yearly</h5>
              </span>
              <ul className={` ${style.p16_page_pricing_card_list_sec} `}>
                <li>Fixed fee for upto 5 users</li>
                <li>Ideal for Small Business </li>
                <li>IOS & Android App </li>
                <li>Ai Chat Bot Integration </li>
              </ul>
              <button className={` ${style.p16_page_pricing_card_btn} `}>
                SELECT PLAN
              </button>
            </div>
            <div className={` ${style.p16_page_pricing_card_active} `}>
              <div className={style.p16_page_pricing_card_popular_plan}>
                Popular Plan
              </div>
              <h3>Pro Plan</h3>
              <p>
                Lorem ipsum dolor sit amet, conse sed do eiusmod tempor incidid.
              </p>
              <span>
                $ 2500
                <h5> / Yearly</h5>
              </span>
              <ul className={` ${style.p16_page_pricing_card_list_sec} `}>
                <li>Fixed fee for upto 15 users</li>
                <li>Ideal for Small and medium Business </li>
                <li>Custom designed mobile apps </li>
                <li>Custom Branding & URL</li>
                <li>Additional module development</li>
              </ul>
              <button className={` ${style.p16_page_pricing_card_btn} `}>
                SELECT PLAN
              </button>
            </div>
            <div className={` ${style.p16_page_pricing_card} `}>
              <h3>Enterprice Plan</h3>
              <p>
                Lorem ipsum dolor sit amet, conse sed do eiusmod tempor incidid.
              </p>
              <span>Custom</span>
              <ul className={` ${style.p16_page_pricing_card_list_sec} `}>
                <li>Fixed fee for Unlimited users</li>
                <li>Ideal for large Organisation</li>
                <li>Arabic Language Support</li>
                <li>Integration with other systems</li>
                <li>Dedicated Server Hosting</li>
              </ul>
              <button className={` ${style.p16_page_pricing_card_btn} `}>
                INQUIRE NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ///////// */}

      <div className={` ${style.p17_bolg_and_news_page} `}>
        <div
          className={` ${style.p17_bolg_and_news_page_container} container `}
        >
          <div className={` ${style.p17_bolg_and_news_page_text_sec}  `}>
            <h3>
              Latest <br />
              <b>Blogs & News</b>
            </h3>
            <Link
              href={"/"}
              className={style.p17_bolg_and_news_page_view_all_btn}
            >
              VIEW ALL
            </Link>
          </div>

          <Swiper
            modules={[Pagination]}
            slidesPerView={2}
            spaceBetween={50}
            loop={true}
            className={`mySwiper ${style.p17_bolg_and_news_page_card_container} `}
          >
            <SwiperSlide>
              <div className={` ${style.p17_bolg_and_news_page_card} `}>
                <div className={` ${style.p17_bolg_and_news_page_card_img} `}>
                  <Image
                    src={"/images/news1.png"}
                    height={340}
                    width={585}
                    alt=""
                  />
                </div>{" "}
                <span>Dec 7 ,2023</span>
                <h3>
                  Choosing The Best Payroll Software For Your UAE Businesses
                </h3>
                <p>
                  A coaching culture is vital for businesses in the UAE looking
                  to increase retention.
                </p>
                <Link href={"/"}>
                  READ MORE{" "}
                  <Image
                    src={"/images/right-arrow.png"}
                    height={24}
                    width={24}
                    alt=""
                  />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={` ${style.p17_bolg_and_news_page_card} `}>
                <div className={` ${style.p17_bolg_and_news_page_card_img} `}>
                  <Image
                    src={"/images/news2.png"}
                    height={340}
                    width={585}
                    alt=""
                  />
                </div>{" "}
                <span>Dec 7 ,2023</span>
                <h3>
                  Choosing The Best Payroll Software For Your UAE Businesses
                </h3>
                <p>
                  A coaching culture is vital for businesses in the UAE looking
                  to increase retention.
                </p>
                <Link href={"/"}>
                  READ MORE{" "}
                  <Image
                    src={"/images/right-arrow.png"}
                    height={24}
                    width={24}
                    alt=""
                  />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={` ${style.p17_bolg_and_news_page_card} `}>
                <div className={` ${style.p17_bolg_and_news_page_card_img} `}>
                  <Image
                    src={"/images/news3.png"}
                    height={340}
                    width={585}
                    alt=""
                  />
                </div>{" "}
                <span>Dec 7 ,2023</span>
                <h3>
                  Choosing The Best Payroll Software For Your UAE Businesses
                </h3>
                <p>
                  A coaching culture is vital for businesses in the UAE looking
                  to increase retention.
                </p>
                <Link href={"/"}>
                  READ MORE{" "}
                  <Image
                    src={"/images/right-arrow.png"}
                    height={24}
                    width={24}
                    alt=""
                  />
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* ///////// */}

      <div className={` ${style.p18_hr_portal_page} `}>
        <div className={` ${style.p18_hr_portal_page_container} container `}>
          <div className={` ${style.p18_hr_portal_page_text_content} `}>
            <h3>
              Empower Your
              <br />
              Organizations Productivity
              <br />
              With Our Well Equipped <br />
              <b>HR Portal Software.</b>
            </h3>
            <p>
              Save time, streamline processes, and sky rocket your organization
              probability with our complete HR software. Upgrade today!
            </p>
            <div
              className={` ${style.p18_hr_portal_page_text_content_btn_sec} `}
            >
              <Link
                href={"/"}
                className={` ${style.p18_hr_portal_page_text_content_btn1} `}
              >
                REQUEST A DEMO
              </Link>
              <Link
                href={"/"}
                className={` ${style.p18_hr_portal_page_text_content_btn2} `}
              >
                CONTACT US
              </Link>
            </div>
          </div>
          <div className={` ${style.p18_hr_portal_page_img_content} `}>
            <Image
              src={"/images/hr-portal-circle.png"}
              height={600}
              width={489}
              alt=""
              className={` ${style.p18_hr_portal_page_img_content_circle} `}
            />{" "}
            <div className={` ${style.p18_hr_portal_page_img_lady} `}>
              <Image
                src={"/images/hr-portal-lady.png"}
                height={600}
                width={489}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
