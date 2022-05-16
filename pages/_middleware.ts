import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { isSigned, availablePathWithoutLogin } from '../services/login';

export const middleware = (req: NextRequest) => {
  if (!isSigned() && !availablePathWithoutLogin(req.nextUrl.pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
};
