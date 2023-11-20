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
  const userAlarmTime = selectObject('.alarm-time');
  let alarmSetted=false;
  
  function showTime() {
    let hour= (new Date).toTimeString().slice(0,5);
    clockBoard.textContent = hour;
  }

  function validateInput(input) {
    if (isNaN(input.value)){
      input.value="";
    }
  }

  function setAlarm() {

    console.log("adad");
    if(parseInt(alarmHours.value)>23){
      alarmHours.focus();
    }
    else if(parseInt(alarmMinutes.value)>59){
      alarmMinutes.focus();
    }
    else{
      let userAlarmTime = `${alarmHours.value} : ${alarmMinutes.value}`;
      alarmSetted.textContent = userAlarmTime;
      alarmSetted=true;
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

  

  