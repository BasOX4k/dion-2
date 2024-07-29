"use client"
import "./views.css"
export default function Views() {
    return(
        <div className="views">
            
            <div className="image">
            
            </div>
            <div className="title"> About the game</div>
            <div className="about-game">
         Découvrez Dion! un jeu de survie multijoueur se déroulant dans un monde fantastique inspiré des empires d'Afrique de l'Ouest. Mettez-vous dans la peau d'un chasseur et lancez-vous dans des raids audacieux pour obtenir de puissants artefacts de sorcellerie ainsi que des technologies provénant de plusieurs époques.
            </div>
           
            
            <div className="row row-cols-1 row-cols-md-2 g-1">
  <div className="col-1">
    <div className="card">
      <img src="/tranformation.gif" class="card-img-top" alt="..."/>
      <div className="card-img-overlay">
        <h5 className="card-title">Transformation</h5>
        <p className="card-text"> Faites appelle à la bête qui sommeille en vous. </p>
      </div>
    </div>
  </div>

  <div className="col-2">
    <div className="card">
    <video src="/pvp.mp4" title="pvp" muted autoPlay loop />
      <div className="card-img-overlay">
        <h5 className="card-title">PvP</h5>
        <p className="card-text">De l'action à plus savoir quoi en faire! Formez votre clan, attaquez les villages ennemis et pillez leur ressources!</p>
      </div>
    </div>
  </div>

  <div className="col-3">
    <div className="card">
      <img src="/pvp.gif" class="card-img-top" alt="..."/>
      <div className="card-img-overlay">
        <h5 className="card-title">Explore</h5>
        <p className="card-text">Parcourez le monde de Dion ! 
       <br/> Partez à la rencontre du folklore africain. </p>
      </div>
    </div>
  </div>
  
  <div className="col-4">
    <div className="card">
      <video src="/exploration.mp4" title="exploration" muted autoPlay loop />
      <div className="card-img-overlay">
        <h5 className="card-title">Sandbox</h5>
        <p className="card-text">Collecter des ressources, construisez des villages, fabriquez vos armes et accomplissez vos buts.</p>
      </div>
    </div>
  </div>
</div>


         
    </div>
 

    )
}