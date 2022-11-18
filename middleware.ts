import { NextMiddleware } from "next/server";

export const middleware: NextMiddleware = (req) => {
  const hostHeader = req.headers.get("host");
  const claimedHost = req.nextUrl.host;
  if (claimedHost !== hostHeader) {
    console.log(
      `Weird: request has Host:${hostHeader} but req.nextUrl.hostname is ${claimedHost} in request to`,
      req.url
    );
  }
};
