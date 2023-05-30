import React, { useCallback, useEffect, useRef, useState } from 'react';
import useCodeMirror from './use-codemirror';
import './editor.css';
import { EditorState, Transaction } from '@codemirror/state';

interface Props {
    initialDoc: string;
    onChange: (doc: string) => void;
}

const Editor: React.FC<Props> = (props) => {
    const { onChange, initialDoc } = props;

    const handleChange = useCallback(
        (state: EditorState) => {
            const docText = state.doc.toString();
            onChange(docText);
        },
        [onChange]
    );

    const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
        initialDoc: initialDoc,
        onChange: handleChange
    });

    const [charCount, setCharCount] = useState(initialDoc.length);

    useEffect(() => {
        if (editorView) {
            // const docText = Transaction.newDoc.toString();
            setCharCount(onChange.length);
        }
    }, [editorView]);

    return (
        <div className='editor-wrapper' ref={refContainer}>
            <div className='char-counter'>Character Count: {charCount}</div>
        </div>
    );
};

export default Editor;