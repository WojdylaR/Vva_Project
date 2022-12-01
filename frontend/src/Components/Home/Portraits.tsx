function Portraits(){
    return (
        <div id="portraits">
            <h2 id="sous_titre_portraits">L'<span className="red">Equipe</span></h2>
            <span id="felix" className="photo_span"><img id="felix_photo" className="photo" src={require('../../assets/felix.jpeg')} alt="Felix" /><h4 id="felix_prenom" className="prenom">Félix</h4><h4 id="nom_felix" className="nom">Galichon</h4></span>
            <span id="pierre"><img id="pierre_photo" className="photo" src={require('../../assets/pierre.jpeg')} alt="Pierre" /><h4 id="prenom_pierre" className="prenom">Pierre</h4><h4 id="nom_pierre" className="nom">Guilloux</h4></span>
            <span id="ronan"><img id="ronan_photo" className="photo" src={require('../../assets/ronan.png')} alt="Ronan" /><h4 id="prenom_ronan" className="prenom">Ronan</h4><h4 id="nom_ronan" className="nom">Wojdyla</h4></span>
        </div>
    )
}

export default Portraits