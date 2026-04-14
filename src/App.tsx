import { useState } from 'react'

export default function App() {
  const [text, setText] = useState('')
  const [recording, setRecording] = useState(false)

  const handleStart = () => {
    setRecording(true)
    // Transcription logic will be implemented here
    setTimeout(() => setRecording(false), 3000)
  }

  return (
    <div style={{ maxWidth: 640, margin: '60px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>Lumen Transcription</h1>
      <p style={{ color: '#666', marginBottom: 24 }}>Real-time audio transcription powered by AI</p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Transcribed text will appear here..."
        style={{
          width: '100%',
          height: 200,
          padding: 12,
          fontSize: 16,
          borderRadius: 8,
          border: '1px solid #ccc',
          boxSizing: 'border-box',
          resize: 'vertical',
        }}
      />
      <button
        onClick={handleStart}
        disabled={recording}
        style={{
          marginTop: 16,
          padding: '10px 28px',
          fontSize: 16,
          background: recording ? '#999' : '#2563eb',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          cursor: recording ? 'not-allowed' : 'pointer',
        }}
      >
        {recording ? 'Recording...' : 'Start'}
      </button>
    </div>
  )
}
