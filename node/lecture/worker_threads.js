// const { worker, isMainThread } = require("");
const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {
  // 메인스레드 = 워커로 일을 분배
  const worker = new Worker(__filename);
  // worker.postMessage("ping");
  worker.on("message", (val) => console.log("워커로부터", val));
  worker.on("exit", () => console.log("워커 끝"));
  worker.postMessage("ping");
} else {
  // 워커스레드
  parentPort.on("message", (val) => {
    console.log("부모로부터", val);
    parentPort.postMessage("pong");
    parentPort.close();
  });
}
