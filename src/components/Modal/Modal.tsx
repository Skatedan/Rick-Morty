import React from 'react';
import { ICharacter } from '../Character/Character.interface';

import { useDispatch } from 'react-redux'
import { addCharacter, removeCharacter } from '../../features/favoritesSlice'

const Modal = (props: ICharacter): JSX.Element => {
  const dispatch = useDispatch()
    return (
        <div className="modal">
            <img src={props.image} className="modal__image"/>
            <div className='modal__description'>
                <label htmlFor="modal__name">Name: 
                <span id="modal__name" className="modal__name">{props.name}</span></label>

                <label htmlFor="modal__species">Species: 
                <span id="modal__species" className="modal__species">{props.species}</span></label>

                <label htmlFor="modal__type">Type: 
                <span id="modal__type" className="modal__type">{props.type}</span></label>

                <label htmlFor="modal__gender">Gender: 
                <span id="modal__gender" className="modal__gender">{props.gender}</span></label>

                <label htmlFor="modal__origin">Origin: 
                <span id="modal__origin" className="modal__origin">{props.origin.name}</span></label>

                <label htmlFor="modal__location">Location: 
                <span id="modal__location" className="modal__location">{props.location.name}</span></label>
            </div>

            <button className="modal__close" onClick={()=>props.closeModal()}>x</button>
            <button
              className="modal__button-preference"
              aria-label="Increment value"
              onClick={() => {
                setTimeout(() => {
                  dispatch(addCharacter(props.id))
                }, 1000)
              }}
            >
              Add
            </button>
            <button
              className="modal__button-preference"
              aria-label="Increment value"
              onClick={() => {
                setTimeout(() => {
                  dispatch(removeCharacter(props.id))
                }, 1000)
              }}
            >
              Remove
            </button>
        </div>
      );
    };

export default Modal;