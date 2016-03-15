myApp.controller('FormCtrl',function($scope){

	$scope.indexTarefa = 0;
	$scope.visibleRenomear = false;
	
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

	//Função para cadastrar uma nova tarefa
	$scope.cadastraTarefa = function(data){
		if(!!data){
			$scope.list.push({
				nomeTarefa : data,
				dataTarefa : new Date().getTime()
			});
			$scope.tarefa = undefined;
		}
	}	

	// Função para editar uma tarefa
	$scope.editarTarefa = function(dataIndex){
		console.log(dataIndex);
		$scope.indexTarefa = dataIndex;
		$scope.renomear = $scope.list[dataIndex].nomeTarefa;
		$scope.visibleRenomear = true;
	}	

	// Função para renomear uma tarefa
	$scope.renomearTarefa = function(data){
		var editObj = {};

		editObj = {
			'nomeTarefa' : data,
			'dataTarefa' : $scope.list[$scope.indexTarefa].dataTarefa
		}

		$scope.list[$scope.indexTarefa] = editObj;
		$scope.renomear = undefined;
		$scope.visibleRenomear = false;
		console.log(editObj);
		
	}	
});