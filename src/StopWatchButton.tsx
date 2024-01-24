import React from 'react'

export default function StopWatchButton() {
    return (
        <div>
            <div className="buttons">
                <button className='reset'>Reset</button>
                <button className='lap'>Lap</button>
                <button className='start/stop'>Start</button>
            </div>
        </div>
    )
}