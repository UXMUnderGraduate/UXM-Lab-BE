import { createParamDecorator } from '@nestjs/common';

export const GetUser = createParamDecorator((data, ctx) => {
  // 클라이언트에서 보낸 req 값 받기
  const req = ctx.switchToHttp().getRequest();
  // Auth guard 클래스에 할당했던 req.user 객체의 정보를 return
  return req.user;
});
