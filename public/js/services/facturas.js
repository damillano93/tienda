angular.module('facturaService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Facturas', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/facturas');
			},
			create : function(todoData) {
				return $http.post('/api/facturas', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/facturas/' + id);
			},
			get2 : function() {
				return $http.get('/api/clientes');
			},
			create2 : function(todoData) {
				return $http.post('/api/clientes', todoData);
			},
			delete2 : function(id) {
				return $http.delete('/api/clientes/' + id);
			},
			get3 : function() {
				return $http.get('/api/productos');
			},
			getunafactura : function(id) {
				return $http.get('/api/facturas/'+id);
			},
			create3 : function(todoData) {
				return $http.post('/api/productos', todoData);
			},
			delete3 : function(id) {
				return $http.delete('/api/productos/' + id);
			},
			put : function(id, datos) {
				return $http.put('/api/clientes/' + id, datos);
			},
			put2 : function(id, datos) {
				return $http.put('/api/productos/' + id, datos);
			}
		}
	}]);