import { useEffect } from "react";

function useLogger(logType, scope, message) {
  useEffect(() => {
    if (message) {

      const timestamp = new Date().toLocaleString();

      const logMessage = `[${scope.toUpperCase()}] [${logType}] [${timestamp}] ${message}`;

      switch (logType.toLowerCase()) {
        case "error":
          console.error(logMessage);
          break;
        case "warn":
          console.warn(logMessage);
          break;
        case "debug":
          console.debug(logMessage);
          break;
        case "log":
        default:
          console.log(logMessage);
          break;
      }

      return logMessage;
    }
  }, [logType, scope, message]);
}

export default useLogger;
