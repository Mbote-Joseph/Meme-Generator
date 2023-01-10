import './Meme.css'
import data from './memesData.js'
import { useState} from 'react';


let Meme=()=>{
    const [image, setImage]= useState("");
    const [name, setName]= useState("");
    

    let Data= data.data.memes;
    // console.log(Data)
    // let images= Data.url;
    // console.log(images)
    // Data.map((data)=>{
    //     // console.log(data.url)

    // })
    // console.log(Data.length)
    // const randomElement = Data[Math.floor(Math.random() * Data.length)];
    // let image=randomElement;
    // console.log(image.url);


    

    let handleClick=(e)=>{
        e.preventDefault();
        const randomElement = Data[Math.floor(Math.random() * Data.length)];
        let imageDetails=randomElement;
        console.log(imageDetails.url)
        console.log(imageDetails.name)
        setImage(imageDetails.url);
        setName(imageDetails.name);
    }

    return(
        <div className="meme">
        <form className="form">
        <input className="form--inputs" type="text" placeholder="Top Text" />
        <input className="form--inputs" type="text" placeholder="Bottom Text" />
        <button className="form--button" onClick={handleClick}>Get a new meme image  🖼 </button>
        <div className="imageGenerated">
        {
            image ? 
            <img className="generatedImage" src={image} alt={name}  />
            : 
            ""
        }
        </div>
        </form>

        </div>
    )
}

export default Meme;