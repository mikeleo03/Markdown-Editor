import React, { useCallback, useEffect } from 'react';
import "./prevpane.css"

const Prevpane = () => {
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
                    {/* <p>Character count</p> */}
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