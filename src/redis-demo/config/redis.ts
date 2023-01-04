import * as redis from "redis";

export const createConnection = async () => {
  const redisURL = "redis://12.0.0.1:6379";
  let redisClient = redis.createClient();

  redisClient.on("error", (err: Error) => {
    console.log(err);
  });

  return redisClient;
};
