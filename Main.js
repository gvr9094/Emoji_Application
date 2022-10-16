import {useEffect, useState} from "react";
import emojiList from "./emojiList";
import EmojiContainer from "./EmojiContainer";


const Main = ()=>{
    const[list , setList] = useState(emojiList);
    const [keyword , setKeyword] = useState("");
    const typed = (e) => {
        const value = e.target.value;  
        setKeyword(value);
    }
    useEffect( ()=>{
      const filterList = emojiList.filter( singleEmoji => {
        if(singleEmoji.emoji == keyword){
            return true ;
        }
        if(singleEmoji.description.startsWith(keyword)){
            return true;
        }
        if(singleEmoji.category.startsWith(keyword)){
            return true;
        }
        if(singleEmoji.aliases.some( e => e.startsWith(keyword))){
            return true;
        }
      });

      setList(filterList);
    },[keyword]);


    return (
        <main className ="main">
            <div className = "top">
            <p>Search Here.....</p>
            <input type="text" placeholder="filter" onKeyUp={typed} className ="input"/>
            <h3>Result for -- {keyword} </h3>
            </div>
            <hr />
           <EmojiContainer list={list}/>
        </main>
    )
}
export default Main;