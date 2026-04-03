describe('API Validation - GET /posts/1', () => {

  it('should validate API response correctly', () => {

    cy.request('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {

        expect(response.status, 'Invalid status code').to.eq(200);

        const body = response.body;

        expect(body).to.have.property('userId');
        expect(body).to.have.property('id');
        expect(body).to.have.property('title');
        expect(body).to.have.property('body');

        expect(body.id, 'incorrect id').to.eq(1);

        cy.log('All tests passed');
      });

  });

});