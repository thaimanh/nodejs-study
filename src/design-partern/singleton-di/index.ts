import emailLogger from "./EmailLogger";
import exportLogger from "./ExportLogger";
import Logger from "./Logger";

function logEmail() {
  const emailInstance = emailLogger.getInstance();
  const logger = new Logger(emailInstance);
  console.log(logger.logFile());
}

function logExport() {
  const exportInstance = exportLogger.getInstance();
  const logger = new Logger(exportInstance);
  console.log(logger.logFile());
}

logEmail();
// logExport();
