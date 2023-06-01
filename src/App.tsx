import React, { useState, useCallback } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
import Editor from './editor'
import Preview from './preview'
import './App.css'
import Prevpane from './components/prevpane'
import { Link } from 'react-router-dom';

const backgroundStyle = {
  width: "100vw",
  minHeight: "100vh",
  maxHeight: "100vh",
}

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('# Hello, World!\n');
  const [open, setOpen] = useState(false);

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc)
  }, [])

  const handleinf = () => {
    setOpen(!open);
    console.log(open);
  }

  function getInfo() {
    return (
      <div className='infoo'>
        <div className="css-qe297s"></div>
        <button onClick={handleinf}>
          <AiFillCloseCircle />
        </button>
        <div className="css-11brbng">
          <h2 className='main-tit'>▶ &nbsp;Cheatsheet for Markdown</h2>
          <div className='wrapper'>
            <h2 className='ex-title'> Headers </h2>
            <h1>#Header 1</h1>
            <h2>##Header 2</h2>
            <h3>###Header 3</h3>
          </div>
          <div className='wrapper'>
            <h2 className='ex-title'>Styling</h2>
            <p className='ex-em'>*Emphasize*     _emphasize_</p>
            <p className='ex-st'>**Strong**     __strong__</p>
            <div className='p-0 m-0'>
              <p className='ex-mark'>==Marked text==</p>
            </div>
            <p className='ex-del'>~~Mistaken Text~~</p>
            <p className='ex-quote'>&gt; Quoted text</p>
          </div>
          <div className='wrapper'>
            <h2 className='ex-title'>Lists</h2>
              <div className='ex-list'>
                <p>- Item </p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Item </p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ Item </p>
              </div>
              <div className='ex-list'>
                <p>1. Item </p>
                <p>2. Item </p>
                <p>3. Item </p>
              </div>
              <p>- [] Incomplete item</p>
              <p>- [x] Complete item</p>
          </div>
          <div className='wrapper'>
            <h2 className='ex-title'>Links</h2>
            <p>A [link](http://example.com).</p>
            <p>An image: ![Alt](img.jpg)</p>
            <p>A sized image: ![Alt](img.jpg =60x50)</p>
          </div>
          <div className='wrapper'>
            <h2 className='ex-title'>Code</h2>
            <p>Some `inline code`.</p>
            <div className='ex-list'>
              <p>```</p>
              <p>// A code block</p>
              <p>var foo = 'bar';</p>
              <p>```</p>
            </div>
            <div className='ex-list'>
              <p>```javascript</p>
              <p>// An highlighted block</p>
              <p className='ex-gre'>var foo = 'bar';</p>
              <p>```</p>
            </div>
          </div>
          <div className='wrapper'>
            <h2 className='ex-title'>Tables</h2>
            <div className='ex-list'>
              <p>Item&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Value</p>
              <p>----------- | -------</p>
              <p>Computer | $1600</p>
              <p>Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| $12</p>
              <p>Pipe&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| $1</p>
            </div>
            <div className='ex-list'>
              <p>| Column 1 | Column 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</p>
              <p>|:-----------:| -------------- :|</p>
              <p>| Centered&nbsp;&nbsp;| right-aligned |</p>
            </div>
          </div>
          <div className='wrapper'>
            <h2 className='ex-title'>Abbreviation</h2>
            <p>Markdown converts text to HTML.</p>
            <p>*[HTML]: HyperText Markup Language</p>
          </div>
          <h3 className='main-tit'>Get to know more about Markdown <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank" rel="noopener noreferrer">here</a></h3>
        </div>
      </div>
    );
  }

  return (
    <div style={backgroundStyle}>
      {open && getInfo()}
      <Prevpane handleInfo={handleinf}/>
      <div className="app">
        <Editor onChange={handleDocChange} initialDoc={doc} />
        <Preview doc={doc} />
      </div>
    </div>
  )
}

export default App