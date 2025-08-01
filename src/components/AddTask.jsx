import React from 'react';
import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const clearForm = () => {
        setText('')
        setDay('')
        setReminder(false)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if(!text){
            alert('Please Add Task Name');
            return;
        }
        onAdd({ text, day, reminder });
        clearForm()
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Task Name'
                value={text}
                onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Day & Time'
                value={day}
                onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox'
                value={reminder}
                checked={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type='submit' value='Save Task'
            className='btn btn-block' />
        </form>
    )
}

export default AddTask