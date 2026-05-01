import { json } from 'express';
import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, printf } = format;

const level = 'silly';

const myFormat = printf(({ level, message, label, timestamp }) => 
{
  //return `${timestamp} [${label}] ${level}: ${message}`;
  return JSON.stringify(
  {
    logLevel: level,
    message,
    timestamp,
    service: label,
  });
});

export const logger = createLogger(
{
  level,
  format: combine(
    label({ label: 'CHICKENS-API' }),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.Console(),
    //new transports.File({ filename: 'chickens-api.log' })
  ]
});

/*
logger.silly('Silly level');
logger.debug('Debug level');
logger.verbose('Verbose level');
logger.http('http level');
logger.info('Info level');
logger.warn('Warn level');
logger.error('Error level');


const DailyRotateFile = require('winston-daily-rotate-file');
logger.configure({
  level: 'verbose',
  transports: [
    new DailyRotateFile(opts)
  ]
});
*/