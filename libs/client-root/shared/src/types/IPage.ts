import { NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { IPageProps } from './IPageProps';

export type IPage<
  P extends IPageProps = IPageProps,
  Q extends ParsedUrlQuery = Record<string, any>
> = NextPage<P, Q>;
