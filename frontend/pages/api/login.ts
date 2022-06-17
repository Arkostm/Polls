import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions } from '../../services/session';
import { User, UserMessage } from '../../types/User';

export const login = async (
  req: NextApiRequest,
  res: NextApiResponse<UserMessage>
): Promise<void> => {
  const { username, password } = await req.body;
  try {
    // TODO: get user from database
    const user: User = {
      id: 1,
      name: 'Guillermo López',
      username: username,
      login: true,
    };
    req.session.user = user;
    await req.session.save();
    return res.status(200).json({ message: 'login succefully!' });
  } catch (error) {
    return res.status(404).json({ message: (error as Error).message });
  }
};

export default withIronSessionApiRoute(login, sessionOptions);
