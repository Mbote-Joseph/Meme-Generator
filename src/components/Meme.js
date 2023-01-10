import './Meme.css'
import data from './memesData.js'
import { useState} from 'react';


let Meme=()=>{
    const [image, setImage]= useState("");
    const [name, setName]= useState("");
    const [top, setTop]= useState("")
    const [bottom, setBottom]= useState("")
    

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

    let onChangeTop=(e)=>{
        e.preventDefault();
        // setTop= e.value;
        let topContent= document.getElementById("top").value;
        console.log(topContent)
        setTop(topContent)
    }
    let onChangeBottom=(e)=>{
        e.preventDefault();
        // setTop= e.value;
        let bottomContent= document.getElementById("bottom").value;
        console.log(bottomContent)
        setBottom(bottomContent)
    }

    return(
        <div className="meme">
        <form className="form col-12">
        <input className="form--inputs col-12 col-md-12 col-sm-12" type="text" placeholder="Top Text" id="top" onChange={onChangeTop} />
        <input className="form--inputs col-12 col-md-12 col-sm-12" type="text" placeholder="Bottom Text" id="bottom"  onChange={onChangeBottom} />
        <button className="form--button" onClick={handleClick}>Get a new meme image  🖼 </button>
        <div className="imageGenerated ">
        <h2 className="top">{top}</h2>
        {
            image ? 
            <img className="generatedImage img-fluid" src={image} alt={name}  />
            : 
            ""
        }

        
        <h2 className="bottom">{bottom}</h2>
        </div>
        </form>

        </div>
    )
}

export default Meme;