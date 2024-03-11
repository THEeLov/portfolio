

const Contact = () => {
  return (
    <div className="contact">
        <h4 className="contact__headline">
            Contact Me
        </h4>
        <div className="contact__form">
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <textarea className="contact__form--message" placeholder="Message"/>
        </div>
        <button className="contact__button">Send</button>
    </div>
  )
}

export default Contact