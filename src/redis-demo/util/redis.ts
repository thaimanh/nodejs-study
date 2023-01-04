import { createConnection } from "../config/redis";

export default class RedisMannager {
  // private static instance: RedisMannager;
  private static _client: any;

  public static async getInstance() {
    if (this._client == null) {
      this._client = await createConnection();
    }
    return this._client;
  }
}
