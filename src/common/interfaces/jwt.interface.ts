import { UUID } from 'node:crypto';

export interface JwtPayload {
  id: UUID;
}
