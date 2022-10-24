import styles from './NotesList.module.scss';
import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import store from '../../storage';


//////////// НЕ РАБОТАЕТ ДАННЫЙ ВАРИАНТ /////////////////////

// function NotesList({notes}) {

//     /* const [notes, setNotes] = useState(store.getState().notes);
//     store.subscribe(() => setNotes(store.getState().notes)); */

//     //const notes = useSelector((state) => state.notes)

//     return(
//         <div className={styles.container}>
//             {notes.map(el => <p key={`note_${el.id}`}>{el.text}</p>)}
//         </div>
//     );
// }

//////////// НЕ РАБОТАЕТ ДАННЫЙ ВАРИАНТ /////////////////////

/* class NotesList extends React.Component {
    constructor(props) {
        super();
        this.notes = props.notes;
    }

    render() {
        return(
            <div className={styles.container}>
                {this.notes && this.notes.map(el => <p key={`note_${el.id}`}>{el.text}</p>)}
            </div>
        );
    };
}

const mapStateToProps = (state) => ({ notes: state.notes })

export default connect(mapStateToProps)(NotesList); */


/////////////////Вот единственный рабочий вариант/////////////////

function NotesList() {

    const [notes, setNotes] = useState(store.getState().notes);
    const [count, setCount] = useState(store.getState().count)
    store.subscribe(() => setNotes(store.getState().notes));
    store.subscribe(() => setCount(store.getState().count));

    return(
        <div className={styles.container}>
            <p> Count notes = {count}</p>
            {notes && notes.map(el => <p key={`note_${el.id}`}>{el.text}</p>)}
        </div>
    );
}

export default NotesList;
