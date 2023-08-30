import { createLogger, format, transports } from "winston";
// import chalk from "chalk";

var logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp(),
    format.printf(({ message, timestamp, level }) => {
      return trataLogInfo(message, timestamp, level);
    })
  ),
  transports: [new transports.Console()]
});

// logger = createLogger({
//   level: "error",
//   format: format.combine(
//     format.timestamp(),
//     format.printf(({ message, timestamp, level }) => {
//       return trataLogError(message, timestamp, level);
//     })
//   ),
//   transports: [new transports.Console()]
// });

// console.log(chalk.blue("test"));

function trataLogInfo(message: string, timestamp: string, level: string): string {
  return `{${"message"}:${message}, ${"timestamp"}:${timestamp}, ${"level"}:${level}}`;
}

// function trataLogError(message: string, timestamp: string, level: string): string {
//   return `{${"message"}:${message}, ${"timestamp"}:${timestamp}, ${"level"}:${level}}`;
// }

export default logger;
