function App() {


    return (
      <h1 className="title is-1"><i className="fab fa-amazon-pay"></i> ¡Hola!</h1>

    )
  }
  

// const hero = (props) => {
//   const {title, dateFrom, dateTo, country, price, rooms} = props

//   return  `<section className="hero is-primary">
//   <div className="hero-body">
//     <div className="container">
//       <h1 className="title">${title}</h1>
//       <h2 className="subtitle">
//         desde el <strong>${dateFrom}</strong> hasta el <strong>${dateTo}</strong>
//       </h2>
//     </div>
//   </div>
// </section>`

// }

// hero('Hotel')



ReactDOM.render(<App />, document.getElementById('app'))