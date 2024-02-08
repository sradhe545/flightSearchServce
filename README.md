## AirLine Project


### Objective:

We need to build backend system that support different features for an airline company.Our end user is going to be someone who wants to book flights and query about flights so we need a robust system to actually help them give the best practice possible. This doc is solely going to focus on the backend part of the system. We want to prepare the whole backend keeping in fact in mind that the code base should be as maintainable as possible.


### npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
### npx sequelize db:migrate;

### npx sequelize seed:generate --name add-airports
### npx sequelize db:seed:all