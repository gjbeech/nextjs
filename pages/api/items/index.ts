import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/connection";
import { ResponseFuncs } from "../../../utils/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;
  if (method === "OPTIONS") {
    return res.status(200).send("ok");
  }
  const catcher = (error: Error) => res.status(400).json({ error });

  const handleCase: ResponseFuncs = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { ListItem } = await connect();
      res.json(await ListItem.find({}).catch(catcher));
    },
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const { ListItem } = await connect();
      res.json(await ListItem.create(req.body).catch(catcher));
    },
  };

  const response = handleCase[method];
  if (response) {
    response(req, res);
  } else res.status(400).json({ error: "No Response for This Request" });
};

export default handler;
