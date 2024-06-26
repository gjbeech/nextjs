import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../../utils/connection";
import { ResponseFuncs } from "../../../../utils/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;
  if (method === "OPTIONS") {
    return res.status(200).send("ok");
  }
  const catcher = (error: Error) => res.status(400).json({ error });
  const id: string = req.query.id as string;

  const handleCase: ResponseFuncs = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { ListItem } = await connect();
      res.json(await ListItem.findById(id).catch(catcher));
    },
  };

  const response = handleCase[method];
  if (response) {
    res.status(200).end;
    response(req, res);
  } else res.status(400).json({ error: "No Response for This Request" });
};

export default handler;
