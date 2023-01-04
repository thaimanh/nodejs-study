import { ILogger } from "./ILogger";

class Logger {
  private _logger: ILogger;

  constructor(logger: ILogger) {
    this._logger = logger;
  }

  logFile() {
    this._logger.log();
  }
}

export default Logger;
