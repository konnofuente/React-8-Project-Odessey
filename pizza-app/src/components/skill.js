function Skill(props){
    return  <span className='skill' style={{ backgroundColor : props.color }}> {props.it} {props.emoji} </span>
}

export default Skill