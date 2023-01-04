import express from "express";
import redisMannager from "./util/redis";
import * as redis from "redis";
import axios from "axios";

export function router(app: express.Express) {
  app.post("/", async (req: express.Request, res: express.Response) => {
    const { key, value } = req.body;

    const redisInstance: redis.RedisClientType =
      await redisMannager.getInstance();

    await redisInstance.connect();

    await redisInstance.set(key, JSON.stringify(value), {
      NX: true,
      EX: 180,
    });

    await redisInstance.quit();

    res.json("OK");
  });

  app.get("/:userId", async (req: express.Request, res: express.Response) => {
    const userId = req.params["userId"];

    let result;

    const redisInstance: redis.RedisClientType =
      await redisMannager.getInstance();

    await redisInstance.connect();

    const cachedData = await redisInstance.get(userId);

    if (cachedData) {
      result = JSON.parse(cachedData);
    } else {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${userId}`
      );

      result = data;

      await redisInstance.set(userId, JSON.stringify(data), {
        EX: 180,
        NX: true,
      });
    }

    await redisInstance.quit();

    res.json(result);
  });
}
