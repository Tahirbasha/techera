import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import Loader from '../Loader'

class Home extends Component {
  state = {courses: {}, isLoading: true, fetchFailed: false}

  componentDidMount() {
    this.getCourse()
  }

  getCourse = async () => {
    const url = 'https://apis.ccbp.in/te/courses'
    const options = {method: 'GET'}
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.courses.map(each => ({
        id: each.id,
        name: each.name,
        image: each.logo_url,
      }))
      this.setState({courses: updatedData, isLoading: false})
    } else {
      this.setState({fetchFailed: true})
    }
  }

  renderCourses = () => {
    const {courses, fetchFailed} = this.state
    return (
      <div>
        {fetchFailed ? (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
              alt="failure view"
            />
            <h1>Oops! Something Went Wrong</h1>
            <p>We cannot seen to find the page you are looking for.</p>
            <button type="button" onClick={this.getCourse}>
              Retry
            </button>
          </div>
        ) : (
          <ul>
            {courses.map(each => (
              <Link to="/courses/:id">
                <li key={each.id}>
                  <img src={each.image} alt={each.name} />
                  <h3>{each.name}</h3>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="main_container">
        <Header />
        {isLoading ? <Loader /> : this.renderCourses()}
      </div>
    )
  }
}

export default Home
