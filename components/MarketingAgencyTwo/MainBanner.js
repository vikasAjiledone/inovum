import React, { Component } from "react";
import Link from "next/link";
import VisibilitySensor from "react-visibility-sensor";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});
// import Particles from "react-particles-js";

const options = {
  loop: true,
  nav: true,
  dots: true,
  autoplayHoverPause: true,
  autoplay: false,
  items: 1,
  navText: [
    "<i class='pe-7s-angle-left'></i>",
    "<i class='pe-7s-angle-right'></i>",
  ],
};

const particleOpt = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: false,
      },
    },
    size: {
      value: 10,
      random: true,
    },
    move: {
      direction: "bottom",
      out_mode: "out",
      speed: 2,
    },
    line_linked: {
      enable: false,
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
};

class MainBanner extends Component {
  _isMounted = false;
  state = {
    display: false,
  };
  componentDidMount() {
    this._isMounted = true;
    this.setState({ display: true });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <>
        {this.state.display ? (
          <div>
            <div className="hero-banner overly-6 hero-bg5">
              <div id="particles-js">
                {/* <Particles params={{ ...particleOpt }} /> */}
              </div>

              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <VisibilitySensor>
                      {({ isVisible }) => (
                        <div className="main-banner-content text-center" style={{paddingTop:"10%",paddingBottom:"15%"}} >
                          <h2
                            style={{color:"#fff",textAlign:"left"}}
                          >
                            Digital Agency For Your New Beginnings.
                          </h2>

                          <p
                            className={
                              isVisible
                                ? "animated fadeInUp opacityOne"
                                : "opacityZero"
                            }
                            style={{textAlign:"left"}}
                          >
                            Are you thinking about how to use digital media
                            marketing to grow your business? You are at the
                            right place !!  Inovum has a team with all new
                            strategies and creative ideas to establish your
                            business presence and to expand reach on Digital
                            media.
                          </p>
                          <h3 style={{ color: "#fff" ,textAlign:"left"}}>
                            How can we help you?
                          </h3>
                          <p
                            className={
                              isVisible
                                ? "animated fadeInUp opacityOne"
                                : "opacityZero"
                            }
                            style={{textAlign:"left"}}
                          >
                            We understand your needs and give you the best
                            Digital Marketing Services.
                          </p>
                          <div
                            className={
                              isVisible
                                ? "animated fadeInUp opacityOne"
                                : "opacityZero"
                            }
                            style={{textAlign:"left"}}
                          >
                            <Link href="/contact">
                              {/* <Link href="/contact"> */}
                              <a className="btn btn-primary">Contact Us</a>
                            </Link>

                            <Link href="https://www.youtube.com/embed/8uNQbNIcFbA">
                              {/* <Link href="/#play-video"> */}
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  this.openModal();
                                }}
                                className="btn btn-secondary"
                              >
                                <i className="icofont-ui-play"></i> How it works
                              </button>
                            </Link>
                          </div>
                        </div>
                      )}
                    </VisibilitySensor>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* If you want to change the video need to update below videoID */}
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="8uNQbNIcFbA"
          onClose={() => this.setState({ isOpen: false })}
        />
      </>
    );
  }
}

export default MainBanner;
