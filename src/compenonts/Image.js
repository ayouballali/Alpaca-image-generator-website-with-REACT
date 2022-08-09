

function Image (props){
    const styles = props.clickedStyles.clickedStyle ;

    // array that have path of each image 

    const showImages = Object.keys(styles).map((key, index) => {
    // const src = `assets/img/${key}/${styles[key]}.png`
    //  const src = 'assets/img/'+key+'/'+(styles[key])+'.png';
       
        return (
            <img key={key} alt="walo" className={"img "+key} src={require("../assets/img/" + key + "/"+ styles[key] + ".png")} />
        ); 
      });

    return(
        <div className="image__section">
            <div className="image">
            {showImages}
            <img  alt="walo" className={"img nose"} src={require("../assets/img/nose.png")} />
            
            </div>

            <div className="buttons">
                <button className="btn btn-alt" id="random">Random</button>
                <button className="btn btn-alt" id="download">Download</button>
            </div>

        </div>
    );
}



export default Image ;