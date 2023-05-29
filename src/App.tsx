import React, { useState, useCallback } from 'react'
import Editor from './editor'
import Preview from './preview'
import './app.css'
import Prevpane from './components/prevpane'

const backgroundStyle = {
  width: "100vw",
  minHeight: "100vh",
  maxHeight: "100vh",
}

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('# Hello, World!\n')

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc)
  }, [])

  return (
    <div style={backgroundStyle}>
      <Prevpane />
      <div className="app">
        <Editor onChange={handleDocChange} initialDoc={doc} />
        <Preview doc={doc} />
      </div>
    </div>
  )
}

export default App