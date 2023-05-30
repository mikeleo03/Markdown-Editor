import React, { useCallback, useEffect } from 'react';
import useCodeMirror from './use-codemirror';
import './editor.css';
import { EditorState } from '@codemirror/state';

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

    // const [charCount, setCharCount] = useState(initialDoc.length);

    useEffect(() => {
        if (editorView) {
            // const docText = Transaction.newDoc.toString();
            // setCharCount(onChange.length);
        } else {

        }
    }, [editorView]);

    return (
        <div className='editor-wrapper' ref={refContainer}></div>
    );
};

export default Editor;