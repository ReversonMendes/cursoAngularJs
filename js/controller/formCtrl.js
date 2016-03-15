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
			dataTarefa : '2016-03-15T08:06:59.149Z'
		},
		{
			nomeTarefa : 'Limpar Casa',
			dataTarefa : '2016-03-15T08:06:59.149Z'
		},
		{
			nomeTarefa : 'Trabalhar',
			dataTarefa : '2016-03-15T08:06:59.149Z'
		},
		{
			nomeTarefa : 'Cortar Grama',
			dataTarefa : '2016-03-15T08:06:59.149Z'
		},
		{
			nomeTarefa : 'Trabalhar de novo',
			dataTarefa : '2016-03-15T08:06:59.149Z'
		}
	];

	$scope.cadastraTarefa = function cadastraTarefa(data){
		if(!!data){
			$scope.list.push({
				nomeTarefa : data,
				dataTarefa : new Date().getTime()
			});
			$scope.tarefa = undefined;
		}
	}	
});