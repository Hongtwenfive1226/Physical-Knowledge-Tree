/* ============================================================
 * three-timer-polyfill.js
 * three.min.js (r160) 缺少 THREE.Timer（3d-force-graph 需要），
 * 此处提供兼容实现。API 对齐 three 官方 examples/jsm/misc/Timer.js。
 * ============================================================ */
(function () {
  'use strict';
  if (typeof THREE === 'undefined') return;
  if (THREE.Timer) return;
  THREE.Timer = class Timer {
    constructor() {
      this._time = performance.now();
      this._delta = 0;
      this._elapsed = 0;
    }
    connect() {}
    disconnect() {}
    dispose() {}
    update() {
      const now = performance.now();
      this._delta = (now - this._time) / 1000;
      this._time = now;
      this._elapsed += this._delta;
      return this;
    }
    getDelta() { return this._delta; }
    getElapsed() { return this._elapsed; }
    getTime() { return this._time; }
    start() { this._time = performance.now(); }
    stop() {}
  };
})();
