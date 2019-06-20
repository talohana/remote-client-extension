import { MessagingConfig } from "./messaging.config";

let fps;

const times = [];

(function fpsHandler() {
  window.requestAnimationFrame(() => {
    const now = performance.now();

    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }

    times.push(now);
    fps = times.length;

    console.log(fps);

    fpsHandler();
  });
})()

chrome.runtime.onMessage.addListener(function (messageData, sender, sendResponse) {
  if (messageData.message === MessagingConfig.fpsRecordInit) {
    startRecording(messageData.fpsRecordTime / 1000);
  }
});

function startRecording(fpsRecordTime) {
  const fpsRecord = [];

  const interval = setInterval(() => {
    fpsRecord.push(fps);
    if (fpsRecordTime <= fpsRecord.length / 2) {
      postRecord(fpsRecord);
      clearInterval(interval);
    }
  }, 500);
}

function postRecord(fpsRecord) {
  chrome.runtime.sendMessage({ message: MessagingConfig.fpsRecordDone, fpsRecord }, console.log);
}