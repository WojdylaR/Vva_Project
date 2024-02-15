import { useContext } from "react";
import { LangueContext } from "../../App";

const Card = (props:any) => (
    <div className="card">
        <img className="photo"  src={require(`../../assets/portraits/${props.img}`)} alt="Felix" />
        <div className="nom">{props.nom}</div>
        <div className="linkedin"><a target="_blank" rel="noreferrer" href={"https://www.linkedin.com" + props.linkedin}><img className="linkedin_pic"  src={require('../../assets/logo/logo_linkedin.png')} alt="logo_linkedin" /></a></div>
        <div className="fonction">{props.fonction}</div>
        
    </div>
);


function Equipe() {
    const {langue} = useContext(LangueContext)


    return(
        
        <div className="equipe">
            {langue == 'fr' ?
                <h2 id="sous_titre_portraits" className="sous_titre">L'<span className="red">Equipe 📷</span></h2>
            :
                <h2 id="sous_titre_portraits" className="sous_titre">The <span className="red">Team 📷</span></h2>
            }
            {langue == 'fr' ? 
            <div className="grille">
                <div className="grid_item">
                    <Card img="felix.jpeg" nom="Félix" fonction="Co-Fondateur" linkedin="/in/félix-galichon-886307144/"/>
                </div>
                <div className="grid_item">
                    <Card img="pierre.jpeg" nom="Pierre" fonction="Co-Fondateur" linkedin="/in/pierre-guilloux-0bb5aa12b/"/>
                </div>
                <div className="grid_item">
                    <Card img="ronan.png" nom="Ronan" fonction="Développeur" linkedin="/in/ronan-wojdyla-07aa3920a/"/>
                </div>
                <div className="grid_item">
                    <Card img="sacco.jpeg" nom="Clément" fonction="Graphiste" linkedin="/in/clément-sacco-3b353214b"/>
                </div>
                <div className="grid_item">
                    <Card img="liam.jpeg" nom="Liam" fonction="Cadreur" linkedin="/in/liam-larochette-705219245/"/>
                </div>
                <div className="grid_item">
                    <Card img="anne_so.png" nom="Anne-Sophie" fonction="Communication" linkedin="/in/anne-sophie-morel10"/>
                </div>
            </div>
            : 
            <div className="grille">
                <div className="grid_item">
                    <Card img="felix.jpeg" nom="Félix" fonction="Co-Founder" linkedin="/in/félix-galichon-886307144/"/>
                </div>
                <div className="grid_item">
                    <Card img="pierre.jpeg" nom="Pierre" fonction="Co-Founder" linkedin="/in/pierre-guilloux-0bb5aa12b/"/>
                </div>
                <div className="grid_item">
                    <Card img="ronan.png" nom="Ronan" fonction="Developer" linkedin="/in/ronan-wojdyla-07aa3920a/"/>
                </div>
                <div className="grid_item">
                    <Card img="sacco.jpeg" nom="Clément" fonction="Graphic Designer" linkedin="/in/clément-sacco-3b353214b"/>
                </div>
                <div className="grid_item">
                    <Card img="liam.jpeg" nom="Liam" fonction="Cameraman" linkedin="/in/liam-larochette-705219245/"/>
                </div>
                <div className="grid_item">
                    <Card img="anne_so.png" nom="Anne-Sophie" fonction="Communication" linkedin="/in/anne-sophie-morel10"/>
                </div>
            </div>
            
            }
        </div>
    )
}

export default Equipe