import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../storage/actions';
import styles from './InputForm.module.scss';

function InputForm() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handlerInput = (event) => {setText(event.target.value)};
    const handlerSend = () => {
        dispatch(addNote(text));
        setText('');
    };

    return(
        <div className={styles.container}>
            <input type="text" value={text} onChange={handlerInput}/>
            <button onClick={handlerSend}>Send</button>
        </div>
    );
}

export default InputForm;
