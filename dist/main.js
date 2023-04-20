"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    app.set('trust proxy', 1);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('CAF Nest API')
        .setDescription('API criada em Nest.JS referente ao bootcamp II da BLUE')
        .setVersion('1.0')
        .addServer('https://backend-caf-v2-production.up.railway.app/docs')
        .addTag('cats')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    await app.listen(process.env.PORT || 3333);
}
bootstrap();
//# sourceMappingURL=main.js.map