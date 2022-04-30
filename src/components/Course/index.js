import './index.css'
import {Component} from 'react'
import Loader from '../Loader'

class Course extends Component {
  state = {courseData: {}, isLoading: true}

  componentDidMount() {
    this.getDetailedCourse()
  }

  getDetailedCourse = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/te/courses/${id}`
    const options = {method: 'GET'}

    const response = await fetch(url, options)
    const data = await response.json()
    const updatedData = data.course_details.map(each => ({
      id: each.id,
      name: each.name,
      image: each.image_url,
      description: each.description,
    }))
    this.setState({courseData: updatedData, isLoading: false})
  }

  renderDetails = () => {
    const {courseData} = this.state
    const {id, name, image, description} = courseData
    return (
      <div key={id}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return <div>{isLoading ? <Loader /> : this.renderDetails()}</div>
  }
}

export default Course
