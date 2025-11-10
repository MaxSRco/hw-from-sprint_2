import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
  const [timerId, setTimerId] = useState<ReturnType<typeof setInterval> | undefined>(undefined)
  // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
  const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
  const [show, setShow] = useState<boolean>(false)
  
  const start = () => {
    // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
    // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
    if (timerId === undefined) {
      const id = setInterval(() => {
        let newDate = new Date()
        setDate(newDate)
      }, 1000)
      setTimerId(id)
    }
  }
  const stop = () => {
    // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
    if (timerId !== undefined) {
      clearInterval(timerId)
      setTimerId(undefined)
    }
  }
  const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
    setShow(true)
  }
  const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
    setShow(false)
  }
  
  // const stringTime = 'date->time' || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
  const stringTime = new Intl.DateTimeFormat('ru', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(date)
  // const stringDate = 'date->date' || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем
  const stringDate = new Intl.DateTimeFormat('ru', {day: '2-digit', month: '2-digit', year: 'numeric'}).format(date)
  
  // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
  // const stringDay = 'date->day' || <br/> // пишут студенты
  const stringDay = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date)
  // const stringMonth = 'date->month' || <br/> // пишут студенты
  const stringMonth = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(date)
  
  return (
    <div className={s.clock}>
      <div
        id={'hw9-watch'}
        className={s.watch}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span id={'hw9-day'}>{stringDay}</span>,{' '}
        <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
      </div>
      
      <div id={'hw9-more'}>
        <div className={s.more}>
          {show ? (
            <>
              <span id={'hw9-month'}>{stringMonth}</span>,{' '}
              <span id={'hw9-date'}>{stringDate}</span>
            </>
          ) : (
            <>
              <br/>
            </>
          )}
        </div>
      </div>
      
      <div className={s.buttonsContainer}>
        <SuperButton
          style={{width: 'fit-content', paddingBlock: '5px', paddingInline: '24px'}}
          id={'hw9-button-start'}
          // disabled={true} // пишут студенты // задизэйблить если таймер запущен
          disabled={timerId !== undefined}
          onClick={start}
        >
          Start
        </SuperButton>
        <SuperButton
          style={{width: 'fit-content', paddingBlock: '5px', paddingInline: '24px'}}
          id={'hw9-button-stop'}
          // disabled={true} // пишут студенты // задизэйблить если таймер не запущен
          disabled={timerId === undefined}
          onClick={stop}
        >
          Stop
        </SuperButton>
      </div>
    </div>
  )
}

export default Clock