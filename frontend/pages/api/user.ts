import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions } from '../../services/session';
import { User, UserMessage } from '../../types/User';

export const user = async (
  req: NextApiRequest,
  res: NextApiResponse<User | UserMessage>
): Promise<void> => {
  if (req.session.user) {
    return res.status(200).json(req.session.user);
  } else {
    return res.status(404).json({ message: 'user not found!' });
  }
};

export default withIronSessionApiRoute(user, sessionOptions);
