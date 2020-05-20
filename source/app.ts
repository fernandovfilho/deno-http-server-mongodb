import { Application } from "https://deno.land/x/denotrain@v0.4.4/mod.ts";

class App {
  public app: any;

  constructor(appInit: { port: number }) {
    this.app = new Application({ port: appInit.port });
  }

  public run() {
    this.app.run();
  }
}

export default App;
