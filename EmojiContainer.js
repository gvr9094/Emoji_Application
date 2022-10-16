import SingleEmoji from "./SingleEmoji";

const EmojiContainer = ({list})=>{
    return(
        <div className="container">
             {list.length === 0 ? (
          <p> Emoji not found</p>
            ):(list.map((singleEmoji , idx) => {
                 return(
                    <SingleEmoji key ={idx} singleEmoji = {singleEmoji} />
                 )
            })
            )}
        </div>
    )
}
export default EmojiContainer;