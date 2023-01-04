import { ILogger } from "./ILogger";

class ExportLogger implements ILogger {
  private static _instance: ExportLogger;

  private constructor() {}

  public static getInstance(): ExportLogger {
    if (this._instance == null) {
      this._instance = new ExportLogger();
    }
    return this._instance;
  }

  log() {
    console.log("ExportLogger is ready !!!");
  }
}

export default ExportLogger;
