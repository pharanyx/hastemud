export class App {
  constructor() {
    this.title = 'HasteMUD';
  }

  // Router
  configureRouter(config, router) {
    config.title = this.title

    config.map([
      { route: ['', 'home'], name: 'home', moduleId: './home/home', nav: true, title: 'Home' },
    ]);

    this.router = router;
  }
}
