function YoutubeEmbed(props:any) {
  return (
  <div className="video-responsive">
    <iframe
      width={props.width}
      height="480"
      src={`http://www.youtube.com/embed/${props.url}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
  )
}
  
  export default YoutubeEmbed;