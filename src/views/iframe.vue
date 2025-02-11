<template>
  <div id="console-container"></div>
</template>

<script setup>
const consoleContainer = document.getElementById("console-container");
const iframe = document.createElement("iframe");
iframe.id = "console-iframe";
iframe.src = "about:blank";
iframe.style.width = "100%";
iframe.style.height = "100%";
consoleContainer.appendChild(iframe);

const originalConsoleLog = console.log;
console.log = function () {
  originalConsoleLog.apply(console, arguments);
  const logMessage = Array.from(arguments).join(" ");
  iframe.contentWindow.postMessage(logMessage, "*");
};

window.addEventListener("message", function (event) {
  if (event.source === iframe.contentWindow) {
    const logMessage = event.data;
    const p = document.createElement("p");
    p.textContent = logMessage;
    consoleContainer.appendChild(p);
  }
});
console.log(123);
</script>

<style scoped>
#console-container {
  width: 100%;
  height: 300px;
  border: 1px solid #ddd;
}
</style>