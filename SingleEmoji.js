const SingleEmoji = ({singleEmoji})=>{
    return(
        <div className="item">
        <p className="emoji">{singleEmoji.emoji}</p>
        <h4>{singleEmoji.description}</h4>
        </div>
     )
}
export default SingleEmoji;