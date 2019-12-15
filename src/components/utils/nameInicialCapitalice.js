

initialName=(e)=>{
    if(this.props.name!=null){
        var name=this.props.name;
    
        var nameIncial=name.substr(0,1)
        var nameInicialCapitalice=nameIncial.toUpperCase();

        return(
            <li>{nameInicialCapitalice}</li>
        )
    }
    
}

export default initialName