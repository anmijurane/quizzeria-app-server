import { UUID } from 'node:crypto';

export interface TokenVerify {
  id: UUID;
  iat: number;
  exp: number;
}
