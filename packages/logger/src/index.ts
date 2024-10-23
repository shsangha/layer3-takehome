// This file exports a configured Winston logger instance for use throughout the application.
// The logger is set up with a default level of "info" and uses JSON formatting.
// A console transport is added for logging to the console with a simple format.
// In the real world we would add alternative transports for logging to on Observability solution like Datadog, NewRelic, etc.

import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "layer3-takehome" },
  transports: [],
});

logger.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  })
);

export default logger;
