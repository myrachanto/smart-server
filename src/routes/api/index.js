'use strict';
const ProductsRoutes = require('../../app/products/router.js');
const ProjectsRoutes = require('../../app/projects/router.js');
const ServicesRoutes = require('../../app/services/router.js');
const BlogRoutes = require('../../app/articles/router.js');
const SliderRoutes = require('../../app/slider/router.js');
const CategoriesRoutes = require('../../app/categories/router.js');
const CarModelsRoutes = require('../../app/car-models/router.js');
const UsersRoutes = require('../../app/users/router.js');
const EmailRoutes = require('../../app/emails/router.js');
const YearRoutes = require('../../app/years/router.js');
const SeoRoutes = require('../../app/seo/router.js');
const ChildservicesRoutes = require('../../app/childservices/router.js');
const CommentsRoutes = require('../../app/comments/router.js');

module.exports = function (app) {
	app.use('/api/emails', EmailRoutes);
	app.use('/api/products', ProductsRoutes);
	app.use('/api/projects', ProjectsRoutes);
	app.use('/api/services', ServicesRoutes);
	app.use('/api/blog', BlogRoutes);
	app.use('/api/slider', SliderRoutes);
	app.use('/api/categories', CategoriesRoutes);
	app.use('/api/car-models', CarModelsRoutes);
	app.use('/api/users', UsersRoutes);
	app.use('/api/years', YearRoutes);
	app.use('/api/seo', SeoRoutes);
	app.use('/api/childservices', ChildservicesRoutes);
	app.use('/api/comments', CommentsRoutes);
};










