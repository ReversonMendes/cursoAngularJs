myApp.controller('FormCtrl',function($scope){
	$scope.pessoa = {
		name : 'Reverson',
		lastname : 'Teste',
		age: 28,
		fone: '46-9114-7640',
		email: 'reversondv@gmail.com'
	};

	$scope.list =[
		{
			nomeTarefa : 'Tarefa Teste',
			dataTarefa : 'Tue Mar 15 2016 18:47:30 GMT-0300'
		},
		{
			nomeTarefa : 'Limpar Casa',
			dataTarefa : 'Tue Mar 15 2016 18:47:30 GMT-0300 '
		},
		{
			nomeTarefa : 'Trabalhar',
			dataTarefa : 'Tue Mar 15 2016 18:47:30 GMT-0300'
		},
		{
			nomeTarefa : 'Cortar Grama',
			dataTarefa : 'Tue Mar 15 2016 18:47:30 GMT-0300 '
		},
		{
			nomeTarefa : 'Trabalhar de novo',
			dataTarefa : 'Tue Mar 15 2016 18:47:30 GMT-0300 '
		}
	];

	var teste = new Date();
	console.log($scope.list);
	console.log(teste);
	
});