import { rest } from "msw";

export const handlers = [
  rest.get(
    "http://contactlist.us-east-1.elasticbeanstalk.com/contact/:id",
    (req, res, ctx) => {
      const contactId = req.params;
      return res(
        ctx.status(200),
        ctx.json({
          contactId: contactId,
          firstName: "Betty",
          lastName: "Holberton",
          company: "ENIAC",
          phone: "4006670180",
          email: "BetHol@gmail.com",
        }),
      );
    },
  ),
  rest.get(
    "http://contactlist.us-east-1.elasticbeanstalk.com/contacts",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          contactId: 597,
          firstName: "Betty",
          lastName: "Holberton",
          company: "ENIAC",
          phone: "4006670180",
          email: "BetHol@gmail.com",
        }),
      );
    },
  ),
  rest.put(
    "http://contactlist.us-east-1.elasticbeanstalk.com/contact/:id",
    (req, res, ctx) => {
      const updatedContact = req.json;
      return res(ctx.status(200), ctx.json(updatedContact));
    },
  ),
];
