import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).send('Authorization header not found');
    }

    const [bearer, token] = authHeader.split(' ');

    if (bearer !== 'Bearer' || !token) {
      return res.status(401).send('Invalid authorization header');
    }

    try {
      const decoded = await this.jwtService.verifyAsync(token);

      if (!decoded) {
        return res.status(401).send('Invalid token');
      }

      req.user = decoded;

      next();
    } catch (err) {
      return res.status(401).send('Invalid token');
    }
  }
}
