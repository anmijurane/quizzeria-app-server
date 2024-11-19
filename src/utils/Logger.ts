import { Logger } from '@nestjs/common';

export class LoggerApp {
  private static _instance: LoggerApp;
  private logNest = new Logger('QUIZZERIA-APP');

  private constructor() {}

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  public info(message: any) {
    this.logNest.log(...[message]);
  }

  public warn(message: any) {
    this.logNest.warn(message);
  }

  public error(message: any) {
    this.logNest.error(message);
  }

  public debug(message: any) {
    this.logNest.debug(message);
  }
}
