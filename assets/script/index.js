'use strict';
  function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
  }

  function selectObject(selector, parent = document) {
    return parent.querySelector(selector);
  }
  const clockBoard = selectObject('.clock-board');
  const alarmHours = selectObject('.alarm-hours');
  const alarmMinutes = selectObject('.alarm-minutes');
  const setAlarmBtn = selectObject('.set-alarm-btn');
  const alarmTime = selectObject('.alarm-time');
  let alarmAudio = new Audio('../res/alarm.mp3');
  let hours='';
  let userAlarmTime ='';

  function showTime() {
    hours = (new Date).toTimeString().slice(0,5);
    clockBoard.textContent = hours;
  }


  function validateInput(input) {
    if (isNaN(input.value)){
      input.value="";
    }
  }

  function checkAlarmTime() {
    if(userAlarmTime.split(' ').join('') === hours){

    }
  }
  
  function setAlarm() {
    if(parseInt(alarmHours.value)>23){
      alarmHours.focus();
    }
    else if(parseInt(alarmMinutes.value)>59){
      alarmMinutes.focus();
    }
    else{
      userAlarmTime = `${alarmHours.value} : ${alarmMinutes.value}`;
      alarmTime.textContent = userAlarmTime;
      setInterval(checkAlarmTime,1000);
    }
  }

  onEvent('input', alarmHours,()=>{
    validateInput(alarmHours);
  })
  
  onEvent('input', alarmMinutes,()=>{
    validateInput(alarmMinutes);
  })
  
  onEvent('load',window,()=>{
    showTime()
    setInterval(showTime,1000);
  });
  
  onEvent('click',setAlarmBtn,setAlarm)

  

  