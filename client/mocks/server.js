import { Server } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  let server = new Server({
    environment,

    routes() {
      this.namespace = 'api';
      this.timing = 1000;

      this.get('/files', () => {
        return [
          {
            name: 'File one',
          },
          {
            name: 'File two',
          },
        ];
      });
    },
  });

  return server;
}
