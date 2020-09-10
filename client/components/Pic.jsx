import React from "react"

// const Pic = () => {
//     return (
//         <>
//         <article className="tile is-child notification is-info">
//           <div className="content">
//               <p className="title">Pic of the day</p>
//               <div className="content">
//                   <p>-</p>
//                   <p>-</p>
//                   <p>-</p>
//               </div>
//           </div>
//         </article>
//         </>
//     )
// }

class Pic extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="image-container tile is-child notification is-info">
        <img src={this.props.url} className="img" alt={this.props.title} />
      </div>
    )
  }
}

export default Pic
