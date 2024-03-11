import Aboutpic from '../images/about.jpg'

const About = () => {
  return (
    <article className="about">
      <div className="about__image-container">
        <img src={Aboutpic} alt="pic" />
      </div>
      <div>
        <h3>About me</h3>
      </div>
      <p>I'm a motivated Computer Science student with a passion for turning theoretical knowledge into practical solutions. My university coursework has given me a solid foundation in algorithms and data structures. I'm actively seeking opportunities to learn from experienced developers, expand my practical coding experience, and contribute my knowledge to projects that have a tangible impact.</p>
    </article>
  )
}

export default About