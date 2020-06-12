var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../apis/index');
const mongoose = require('../DB/mongoose');
const { AdminCredentials, WrongAdminCredentials, Category, WrongCategory, SearchValue, WrongSearchValue, Producttodelete,ProducttoAdd } = require('./seed')
var should = chai.should();

chai.use(chaiHttp);
describe('/admin login', () => {
  it('should login as admin on /admin/login POST', (done) => {
    chai.request(server)
      .post('/admin/signin')
      .send(AdminCredentials)
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.have.property('text');
        done();
      })
  })
  it('should not login for incorrect username and password', (done) => {
    chai.request(server)
      .post('/admin/signin')
      .send(WrongAdminCredentials)
      .end(function (err, res) {
        res.should.have.status(401);
        res.error.should.have.property('text').eql('Wrong UserName or Password');
        done();
      })
  })
})

describe('/guest filter by category', () => {
  it('show all products in that category', done => {
    chai.request(server)
      .post('/category')
      .send(Category)
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      })
  })
  it('Show error in wrong category name', done => {
    chai.request(server)
      .post('/category')
      .send(WrongCategory)
      .end(function (err, res) {
        res.should.have.status(400);
        res.error.should.have.property('text').eql('No such Category Found');
        done();
      })
  })
})

describe('/guest search by title', () => {
  it('show all products with search text in title', done => {
    chai.request(server)
      .post('/searchresults')
      .send(SearchValue)
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      })
  })
  it('Display nothing when incorrect data', done => {
    chai.request(server)
      .post('/searchresults')
      .send(WrongSearchValue)
      .end(function (err, res) {

        res.should.have.status(200);
        res.body.length.should.be.eql(0);

        done();
      })
  })
})

describe('/post login', () => {
  var token = '';
  it('it should login and check token', (done) => {
    chai.request(server)
      .post('/admin/signin')
      .send(AdminCredentials)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.have.property('text')
        token = res.text;
        done();
      })

  })
  it('it should fetch users', done => {
    chai.request(server)
      .get('/admin/users')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      })
  })
  it('it should fetch statistics of users', done => {
    chai.request(server)
      .get('/admin/statistics/users')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array')
        done();
      })
  })
  it('it should fetch statistics of products', done => {
    chai.request(server)
      .get('/admin/statistics/products')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      })
  })
  it('it should fetch statistics of sales', done => {
    chai.request(server)
      .get('/admin/statistics/sales')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array')
        done();
      })
  })
  it('it should deleteproduct', done => {
    chai.request(server)
      .post('/admin/deleteproduct')
      .set('Authorization', `Bearer ${token}`)
      .send(Producttodelete)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.have.property('text').eql('deleted')
        done();
      })
  })
  it('it should not delete product if not in db ', done => {
    chai.request(server)
      .post('/admin/deleteproduct')
      .set('Authorization', `Bearer ${token}`)
      .send(Producttodelete)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.have.property('text').eql('deleted')
        done();
      })
  })
  it('it should add a product into db ', done => {
    chai.request(server)
      .post('/admin/addproduct')
      .set('Authorization', `Bearer ${token}`)
      .send(ProducttoAdd)
      .end((err, res) => {
        console.log("&&&&&&&&&&&&&",res._id,"&&&&&&&&&&&&")
        res.should.have.status(200);
        // res.should.have.property('text').eql('deleted')
        done();
      })
  })
})





