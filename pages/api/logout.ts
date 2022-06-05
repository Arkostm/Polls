import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions } from '../../services/session';
import { User, UserMessage } from '../../types/User';

export const logout = async (
  req: NextApiRequest,
  res: NextApiResponse<UserMessage>
): Promise<void> => {
  try {
    await req.session.destroy();
    return res.status(200).json({ message: 'logout succefully!' });
  } catch (error) {
    return res.status(404).json({ message: (error as Error).message });
  }
};

export default withIronSessionApiRoute(logout, sessionOptions);
