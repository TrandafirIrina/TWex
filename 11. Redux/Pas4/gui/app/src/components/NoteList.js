import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useEffect } from 'react';
import {getNotes} from '../actions/actions'
import { deleteNote } from '../actions/actions';

const noteListSelector = state => state.list.notes

function NoteList(props){

    const notes = useSelector(noteListSelector, shallowEqual);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch((getNotes()))
    },[dispatch])

    return(
        <div>
            <div>
                <h3>List of notes</h3>
                {
                    notes.map((e)=><div key={e.id}>{e.content} <input type="button" value="delete" onClick={()=>{dispatch(deleteNote(e.id)); /*dispatch(getNotes())*/}}/></div>)
                }
            </div>
        </div>
    )
}

export default NoteList;