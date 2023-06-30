import {Controller, Get} from "@nestjs/common";

// http://localhost:3000/app/asdf
@Controller("/app") // a 'decorator'
export class AppController {
    @Get("/asdf")
    getRootRoute() {
        return 'hi there';
    }

    @Get("/bye")
    getByeThere() {
        return "bye there!";
    }
}
