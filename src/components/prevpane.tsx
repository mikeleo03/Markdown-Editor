import "./prevpane.css"
import { AiFillQuestionCircle, AiOutlineInfoCircle } from 'react-icons/ai';

interface Props {
    handleInfo: () => void;
}
  
const Prevpane: React.FC<Props> = ({ handleInfo }) => {
    return (
        <div className="main-prevpane">
            <div className='info'>
                <div className='info1'>
                    <div className='info-label'>
                        <p>Document name</p>
                    </div>
                    <div className='file-name'>
                        <textarea placeholder='Write the file name here...'>

                        </textarea>
                    </div>
                </div>
                <div className='info2'>
                    <a href="https://github.com/mikeleo03/markdown-editor" target="_blank" rel="noopener noreferrer">
                        <button className="button-info">
                            <AiOutlineInfoCircle />
                        </button>
                    </a>
                    <button className="button-info" onClick={handleInfo}>
                        <AiFillQuestionCircle />
                    </button>
                </div>
            </div>
            <div className='label'>
                <div className='label1'>
                    Markdown
                </div>
                <div className='label2'>
                    Preview
                </div>
            </div>
        </div>
    );
}

export default Prevpane;