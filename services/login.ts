import { PUBLIC_ROUTES } from './routes';
import { Octokit } from 'octokit';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions } from './session';
import { User } from '../types/User';
const PATHS: Array<string> = PUBLIC_ROUTES.map(({ path }) => path);

export const availablePathWithoutLogin = (path: string): boolean => {
  return PATHS.includes(path);
};

export const isSigned = (): boolean => {
  return true;
};

const octokit = new Octokit();

export const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username } = await req.body;

  try {
    const {
      data: { login },
    } = await octokit.rest.users.getByUsername({ username });

    const user = { login, username } as User;
    req.session.user = user;
    await req.session.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export default withIronSessionApiRoute(login, sessionOptions);
