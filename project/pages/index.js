import React, { useEffect } from "react";
import style from "@/styles/Home.module.css";
import "@fontsource/metropolis"; // Defaults to weight 400
import "@fontsource/metropolis/400.css"; // Specify weight
import "@fontsource/metropolis/400-italic.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination,Navigation } from "swiper/modules";

//https://www.figma.com/design/dh4zh8M6NPPQtohPO1q8Iy/Untitled?t=n6HVFd8jjuGHEvQ3-0

const Index = () => {
  ////
  useEffect(() => {
    AOS.init({
      delay: "600",
      duration: "1400",
    });
  }, []);

  const pagination = {
    clickable: true,
    // renderBullet: function (index, className) {
    //   return (
    //     '<button class="' + className + '">' + buttons[index] + "</button>"
    //   );
    // },
  };

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
            <div className={style.first_page_sick_leave}>
              <Image
                src={"/images/sick-leave.png"}
                height={77}
                width={311}
                alt=""
              />
            </div>
            <div className={style.first_page_annual_leave}>
              <Image
                src={"/images/annual-leave.png"}
                height={77}
                width={311}
                alt=""
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </div>

      {/* //////////// */}
      <div className={` ${style.second_page} `}>
        <div
          className={` ${style.second_page_image} container`}
          style={{
            background: `url(/images/screenshot.png) no-repeat center`,
            backgroundSize: "cover",
          }}
        >
          <div
            style={{
              background: `url(/images/phone.png) no-repeat center `,
              backgroundSize: "cover",
            }}
            data-aos="fade-up"
          >
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
          <div className={style.third_page_counting_sec}>
            <div
              className={style.third_page_counting_body}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className={style.third_page_counting_body_gradient}>
                <span>50+</span>
              </div>
              Companies Server
            </div>
            <div
              className={style.third_page_counting_body}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className={style.third_page_counting_body_gradient}>
                <span>599+</span>
              </div>
              Daily Active Users
            </div>
            <div
              className={style.third_page_counting_body}
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <div className={style.third_page_counting_body_gradient}>
                <span>20+</span>
              </div>
              Industries Served
            </div>
          </div>
          <button className={style.third_page_request_demo_btn}>
            REQUEST A DEMO
          </button>
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
            <Image
              src={"/images/calendar.png"}
              height={151}
              width={143}
              alt=""
              data-aos="fade-up"
            />
            <div className={` ${style.fourth_page_box_content} `}>
              <h4>Leave Management</h4>
              <p>
                Managing employee vacation & absence requests doesn’t have to be
                time consuming.
              </p>
            </div>
          </div>
          <div className={` ${style.fourth_page_box_body} bg_white`}>
            <Image
              src={"/images/timer.png"}
              height={151}
              width={143}
              alt=""
              data-aos="fade-up"
              data-aos-delay="300"
            />
            <div className={` ${style.fourth_page_box_content} `}>
              <h4>Employee Time Clock</h4>
              <p>Track and manage employee work hours on jobs, projects.</p>
            </div>
          </div>
          <div className={` ${style.fourth_page_box_body} bg_white`}>
            <Image
              src={"/images/inbox.png"}
              height={151}
              width={143}
              alt=""
              data-aos="fade-up"
              data-aos-delay="300"
            />
            <div className={` ${style.fourth_page_box_content} `}>
              <h4>Payroll & Salary</h4>
              <p>
                Streamline and centralize payroll operations, providing the
                tools for quick and easy payments.
              </p>
            </div>
          </div>
          <div className={` ${style.fourth_page_box_body} `}>
            <Image
              src={"/images/rocket.png"}
              height={151}
              width={143}
              alt=""
              data-aos="fade-up"
            />
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
              <Image
                src={"/images/resume-screening.png"}
                height={201}
                width={213}
                alt=""
                data-aos="fade-left"
              />
              <h3>Resume Screening Made Easy</h3>
              <p>
                Say goodbye to manual resume reviews. Our AI effortlessly scans
                and filters resumes to find the perfect fit for your team.
              </p>
            </div>
            <div className={` ${style.sixth_page_card} `}>
              <Image
                src={"/images/chatbot.png"}
                height={201}
                width={213}
                alt=""
                data-aos="fade-left"
              />
              <h3>Chatbots for Instant Support</h3>
              <p>
                Have questions? Our friendly HR chatbots are here 24/7, ready to
                assist employees and applicants with lightning-fast responses.
              </p>
            </div>
            <div className={` ${style.sixth_page_card} `}>
              <Image
                src={"/images/resume-screening.png"}
                height={201}
                width={213}
                alt=""
                data-aos="fade-left"
              />
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
              modules={[Pagination]}
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
            <button className={` ${style.ten_page_text_content_btn}`}>
              REQUEST A DEMO
            </button>
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
              <h3 data-aos="fade-left">Make Better Decisions</h3>
              <p data-aos="fade-left" data-aos-delay="1000">
                Our people data will help you automatically and accurately
                report on the data that matters the most to your organization.
                Enabling managers and stakeholders to make smarter, more timely
                decisions.
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
              <h3 data-aos="fade-left">Make Better Decisions</h3>
              <p data-aos="fade-left" data-aos-delay="1000">
                Our people data will help you automatically and accurately
                report on the data that matters the most to your organization.
                Enabling managers and stakeholders to make smarter, more timely
                decisions.
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
          <button className={style.p12_page_text_content_btn}>
            REQUEST A DEMO
          </button>
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
          <Image
            src={"/images/person1.png"}
            height={152}
            width={152}
            alt=""
            className={style.p12_page_image_content_person}
            data-aos="fade-up"
          />
          <Image
            src={"/images/person2.png"}
            height={229}
            width={229}
            alt=""
            className={style.p12_page_image_content_person}
            data-aos="fade-up"
            data-aos-delay="500"
          />
          <Image
            src={"/images/person3.png"}
            height={292}
            width={292}
            alt=""
            className={style.p12_page_image_content_person}
            data-aos="fade-up"
            data-aos-delay="1000"
          />
          <Image
            src={"/images/person4.png"}
            height={229}
            width={229}
            alt=""
            className={style.p12_page_image_content_person}
            data-aos="fade-up"
            data-aos-delay="1500"
          />
          <Image
            src={"/images/person5.png"}
            height={175}
            width={175}
            alt=""
            className={style.p12_page_image_content_person}
            data-aos="fade-up"
            data-aos-delay="300"
          />
          <Image
            src={"/images/person6.png"}
            height={229}
            width={229}
            alt=""
            className={style.p12_page_image_content_person}
            data-aos="fade-up"
            data-aos-delay="600"
          />
          <Image
            src={"/images/person7.png"}
            height={292}
            width={292}
            alt=""
            className={style.p12_page_image_content_person}
            data-aos="fade-up"
            data-aos-delay="800"
          />
        </div>
        {/* /// */}
      </div>

      {/* ////// */}

      <div className={` ${style.p13_page} `}>
        <h3>
          Companies That <b> Trust Us</b>
        </h3>
        <p>Some of the region and the worlds leading brands have chosen us.</p>

        <div className={` ${style.p13_card_container} `}>

        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>


          <div className={` ${style.p13_card_body} `}></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
