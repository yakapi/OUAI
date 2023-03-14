
export default function ServicesBoard({viewChoice}){
  return(
    <div className="services_genre_board">
      <p onClick={viewChoice} className="services_genre_choice selected_genre_choice">femme</p>
        <p onClick={viewChoice} className="services_genre_choice">homme</p>
          <p onClick={viewChoice} className="services_genre_choice">enfant</p>
    </div>
  )
}
