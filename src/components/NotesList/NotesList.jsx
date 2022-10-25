import styles from './NotesList.module.scss';
import React from 'react';
import { useSelector } from 'react-redux';

function NotesList() {

    const notes = useSelector((state) => state.notes);
    const count = useSelector((state) => state.count)

    return(
        <div className={styles.container}>
            <p> Count notes = {count}</p>
            {notes && notes.map(el => <p key={`note_${el.id}`}>{el.text}</p>)}
        </div>
    );
}

export default NotesList;
