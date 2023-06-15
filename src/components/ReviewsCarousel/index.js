import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {active: 0}

  leftButtonClick = () => {
    this.setState(prevState =>
      prevState.active > 0
        ? {active: prevState.active - 1}
        : {active: prevState.active},
    )
  }

  rightButtonClick = () => {
    this.setState(prevState =>
      prevState.active < 3
        ? {active: prevState.active + 1}
        : {active: prevState.active},
    )
  }

  render() {
    const {active} = this.state

    const {reviewsList} = this.props
    const activeItem = reviewsList[`${active}`]
    const {imgUrl, username, companyName, description} = activeItem

    return (
      <div className="bg">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="image" />
        <div className="buttonsism">
          <button
            type="button"
            className="button"
            onClick={this.leftButtonClick}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrow"
              alt="left arrow"
            />
          </button>
          <p className="para">{username}</p>
          <button
            type="button"
            className="button"
            onClick={this.rightButtonClick}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrow"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="para2">{companyName}</p>
        <p className="para3">{description}</p>
      </div>
    )
  }
}
export default ReviewsCarousel
