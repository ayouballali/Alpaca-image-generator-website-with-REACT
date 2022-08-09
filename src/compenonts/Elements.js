function Elemets (props){
    console.log(props.Acces + " "+ props.style);
 
    return(
        
            <img source={require(`../assets/img/${props.Acces}/${props.style}.png`).default}   alt="walo" className={"img "+props.Acces}></img>
        
    );
}



export default Elemets ;