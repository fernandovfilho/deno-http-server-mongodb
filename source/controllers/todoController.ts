import { Context, Router } from "https://deno.land/x/denotrain@v0.4.4/mod.ts";

class todoController {
  public router = new Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get("/", this.index);
  }

  index = (ctx: Context) => {
    return { hello: "TODO" };
  };
}

export default todoController;
