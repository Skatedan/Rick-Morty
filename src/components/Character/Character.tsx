import { ICharacter } from "./Character.interface";

const Character = (props: ICharacter): JSX.Element => {

    return (
        <div className="character" id={props.name} onClick={()=>props.openModal(props.id)}>
            <img src={props.image} className="character__image"/>
            <span className="character__name">{props.name}</span>
            <span className="character__species">{props.species}</span>
        </div>
      );
    };

export default Character;