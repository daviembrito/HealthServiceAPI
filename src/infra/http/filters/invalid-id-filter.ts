import { ExceptionFilter, ArgumentsHost, Catch } from '@nestjs/common';
import { Response } from 'express';
import { InvalidIdException } from '../controllers/exceptions/invalid-id';

@Catch(InvalidIdException)
export class InvalidIdExceptionFilter implements ExceptionFilter {
  catch(exception: InvalidIdException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = 400;

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      message: exception.message,
    });
  }
}
