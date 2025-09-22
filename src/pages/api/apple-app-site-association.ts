import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    applinks: {
      details: [
        {
          appIDs: ["A9MF56EMP8.qa.goodneigbhor.com"],
          paths: ["*", "/"],
        },
      ],
    },
    webcredentials: {
      apps: ["A9MF56EMP8.qa.goodneigbhor.com"],
    },
  });
}
