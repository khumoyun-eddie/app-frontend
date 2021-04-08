import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "./PolyBackground.scss";
import background from "./img/polybackground.jpg";
import Particles from "react-tsparticles";
const cx = classNames.bind(styles);

class PolyBackground extends Component {
  state = {
    loaded: false,
  };

  componentWillMount() {
    const image = new Image();
    image.src = background;

    const cached = image.complete || image.width + image.height > 0;
    if (cached) {
      this.setState({
        loaded: true,
      });
      return;
    }

    image.onload = () => {
      this.setState({
        loaded: true,
      });
    };
  }
  componentDidMount(){
    
  }
  render() {
    const { loaded } = this.state;
    const {children} = this.props;
    
    return (
      <div className={cx("poly-background")}>
        <div className={cx("image", { blur: !loaded })}>
          <Particles
          id="tsparticles"
          init={this.particlesInit}
          loaded={this.particlesLoaded}
          options={ "tsparticles", {
          fpsLimit: 60,
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: "#f00",
                animation: {
                  enable: true,
                  speed: 20,
                  sync: true
                }
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 8
                },
                image: {
                  src: "https://cdn.matteobruni.it/images/particles/github.svg",
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 20,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 100,
                color: "random",
                opacity: 0.4,
                width: 1,
                triangles: {
                  enable: true,
                  color: "#ffffff",
                  opacity: 0.1
                }
              },
              move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                },
                onclick: {
                  enable: true,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 600,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 0.8,
                  speed: 3
                },
                repulse: {
                  distance: 200
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true,
            background: {
              color: "#000000",
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover"
            }
          }}/> 
        </div>
        <div className={cx('inner')}>
          {children}
        </div>
      </div>
    );
  }
}

export default PolyBackground;
