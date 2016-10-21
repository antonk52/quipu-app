export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = 'api';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  this.get('/menu', () => {
      return [
          { title: 'Home', href: '/'},
          { title: 'User', href: '/user'},
          { title: 'Administration', href: '/admin'}
        ];
    });

  this.get('/products', () => {
      return [
          { title: 'Basic', price: '9.99'},
          { title: 'A little better', price: '14.99'},
          { title: 'Pretty cool one', price: '24.99'},
          { title: 'Best one', price: '49.99'}
        ];
    });

  this.get('/user', () => {
      return {
        name: 'John',
        surname: 'Doe',
        email: 'john@world.com',
        purchased: [ 0, 3 ]
      };
    });
}
