import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f,i as h}from"./assets/vendor-651d7991.js";const e={btnStart:document.querySelector(".js-btn-start"),days:document.querySelector(".js-days"),hours:document.querySelector(".js-hours"),minutes:document.querySelector(".js-minutes"),seconds:document.querySelector(".js-seconds"),datetimePlicker:document.querySelector("#datetime-picker")},y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(t[0]<=new Date){h.show({messageColor:"#fafafa",backgroundColor:"#f56c6c",messageSize:"18px",position:"topRight",progressBar:!1,animateInside:!1,transitionIn:"fadeIn",transitionOut:"fadeOut",timeout:3e3,targetFirst:!1,message:"❌  Please choose a date in the future"}),e.btnStart.disabled=!0;return}e.btnStart.disabled=!1,u=t[0]}};let u;e.btnStart.disabled=!0;f("#datetime-picker",y);e.btnStart.addEventListener("click",b);function S(t){const c=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:d,minutes:m,seconds:l}}function n(t){return String(t).padStart(2,"0")}function b(){e.datetimePlicker.disabled=!0,e.btnStart.disabled=!0,i(),setInterval(i,1e3)}function i(){const t=u-new Date;if(t>=0){const{days:o,hours:s,minutes:r,seconds:a}=S(t);e.days.textContent=n(o),e.hours.textContent=n(s),e.minutes.textContent=n(r),e.seconds.textContent=n(a)}}
//# sourceMappingURL=commonHelpers2.js.map
