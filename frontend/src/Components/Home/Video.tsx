function Video(){
    return(
        <div className="Video">
            <img id="logo_video" src={require('../../assets/logo_vva_cam.png')} alt="logo_vva_blanc" />   
            <video autoPlay muted loop id="video" src={require('../../assets/background_video.mp4')} /> 
        </div>
    )
}

export default Video