import React from 'react'
import './PomodoroPage.css'
import { Timer } from '../../components/timer/Timer'
import { PomodoroTips } from '../../components/pomodoroTips/PomodoroTips'

export const PomodoroPage = () => {
    return (
        <div className="pomodoro-container">
            <div className="pomodoro-wrapper">
                <Timer />
                <PomodoroTips />
            </div>
        </div>
    )
}
