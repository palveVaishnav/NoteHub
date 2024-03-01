import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Filterbar } from './components/Filterbar'

function App() {
	return (
		<div className='p-6 bg-zinc-800'>
			<Navbar className="z-10" />
			<Filterbar className="z-9" />
		</div>
	)
}

export default App
