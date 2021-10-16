import React from 'react'
import './PomodoroPage.css'
import { Timer } from '../../components/timer/Timer'

export const PomodoroPage = () => {
    return (
        <div className="pomodoro-container">
            <div className="pomodoro-wrapper">
                <Timer />
            </div>
        </div>
    )
}
