function Video(){
    return(
        <div className="Video">
            <img id="logo_video" src={require('../../assets/logo/logo_vva_cam.png')} alt="logo_vva_blanc" />   
            <video loop={true} muted={true} autoPlay={true} playsInline={true}  id="video" src={require('../../assets/background_video.mp4')} /> 
            
        </div>
    )
}

export default Video