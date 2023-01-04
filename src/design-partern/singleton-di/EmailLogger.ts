import { ILogger } from "./ILogger";

class EmailLogger implements ILogger {
  private static _instance: EmailLogger;

  private constructor() {}

  public static getInstance(): EmailLogger {
    if (this._instance == null) {
      this._instance = new EmailLogger();
    }
    return this._instance;
  }

  log() {
    console.log("EmailLogger is ready !!!");
  }
}

export default EmailLogger;
