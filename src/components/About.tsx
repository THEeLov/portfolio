import Aboutpic from "../images/about.jpg";
import useInViewAnimation from "@/hooks/useAnimations";

const About = () => {
  const { isInView: isTextInView, elementRef: textRef } = useInViewAnimation();

  return (
    <article className="about">
      <div className="about__image-container">
        <div className="about__image">
          <img src={Aboutpic} alt="pic" />
        </div>
      </div>
      <div className="about__text-container">
        <div className="about__text">
          <h3>About me</h3>
          <p
            className={`${isTextInView ? "motion-preset-blur-right" : ""}`}
            ref={textRef}
          >
            I'm a Computer Science student with a passion for turning
            theoretical knowledge into practical solutions. My university
            coursework has given me a solid foundation in algorithms and data
            structures. I'm actively seeking opportunities to learn from
            experienced developers, expand my practical coding experience, and
            contribute my knowledge to projects that have a tangible impact.
          </p>
        </div>
      </div>
    </article>
  );
};

export default About;
