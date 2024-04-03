import { useState } from 'react';

const transformText = (text) => `__${text.toUpperCase()}__`;


export const TextTransformer = (props) => {
    const [text, setText] = useState('');

    const setTrasformText = (event) => {
        setText(transformText(event.currentTarget.value))
    }

    const value = text || (props.text && transformText(props.text));

    return (
        <div>
            <label htmlFor='text'>Insert text</label>
            <input id='text' type='text' onChange={setTrasformText} />

            {value && (
                <>
                    <hr />
                    <h3>Transformed text:</h3>
                    <p>{value}</p>
                </>
            )}
        </div>
    );
}
