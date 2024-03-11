import MyPhoto from '../images/my_photo_nt.jpeg'

const Main = () => {
  return (
    <header className="header">
        <div className="header__photo-container">
            <img className="header__photo"src={MyPhoto} alt="My photo" />
        </div>

        <div className="header__text">
            HI, My name is Filip
        </div>
    </header>
  )
}

export default Main