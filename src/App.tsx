import React from 'react'
import StopWatch from './StopWatch'
import StopWatchButton from './StopWatchButton'
import StopWatchLaps from './StopWatchLaps'

export default function App() {
    return (
        <div>
            <StopWatch />
            <StopWatchButton />
            <StopWatchLaps />
        </div>
    )
}