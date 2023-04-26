import {MainCon,Container,Heading,TimerCon,Image,Para,Time,ButtonCon,Start,Stop,Reset} from './styledComponents'
import {useState,useEffect} from 'react'

const StopWatch=()=>{
    const [play,setPlay]=useState(false)
    const [minutes,setMinutes]=useState(0)
    const [seconds,setSeconds]=useState(0)
    useEffect(()=>{
        if(play){
            const timerId=setInterval(()=>{
                setSeconds(prevState=>prevState+1)
            },1000)
        
        return ()=>{
            clearInterval(timerId)
        }
        }
    })

    const toStart=()=>{
        setPlay(true)
    }
    const toStop=()=>{
        setPlay(false)
    }

    const toReset=()=>{
        setPlay(false)
        setMinutes(0)
        setSeconds(0)
    }

    const getStringifiedTime=()=>{
        const totalRemainingMilliSeconds=minutes*60+seconds
        const min=Math.floor(totalRemainingMilliSeconds/60)
        const sec=Math.floor(totalRemainingMilliSeconds%60)
        const stringifiedMin=min>9 ? min:`0${min}`
        const stringifiedSec=sec>9 ? sec:`0${sec}`
        return `${stringifiedMin}:${stringifiedSec}`
    }
    return(
        <MainCon>
            <Heading>Stopwatch</Heading>
            <Container>
                <TimerCon>
                    <Image src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png" alt="timer"/>
                    <Para>Timer</Para>
                </TimerCon>
                <Time>{getStringifiedTime()}</Time>
                <ButtonCon>
                    <Start type="button" onClick={toStart}>Start</Start>
                    <Stop type="button" onClick={toStop}>Stop</Stop>
                    <Reset type="button" onClick={toReset}>Reset</Reset>
                </ButtonCon>
            </Container>
        </MainCon>
    )
}

export default StopWatch