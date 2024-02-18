// RateLimiter.js

class RateLimiter {
    constructor(maxRequests, interval) {
      this.maxRequests = maxRequests;
      this.interval = interval;
      this.requestQueue = [];
      this.timer = null;
    }
  
    enqueueRequest(request) {
      this.requestQueue.push(request);
      if (!this.timer) {
        this.processQueue();
      }
    }
  
    processQueue() {
      if (this.requestQueue.length === 0) {
        this.timer = null;
        return;
      }
  
      const batch = this.requestQueue.splice(0, this.maxRequests);
      this.executeBatch(batch);
  
      this.timer = setTimeout(() => {
        this.processQueue();
      }, this.interval);
    }
  
    executeBatch(batch) {
      batch.forEach(request => {
        request();
      });
    }
  }
  
  module.exports = RateLimiter;  