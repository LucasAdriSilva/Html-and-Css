class Despesa {
	constructor(ano, mes, dia, tipo, descricao, valor) {

		this.ano = ano
		this.mes = mes
		this.dia = dia
		this.tipo = tipo
		this.descricao = descricao
		this.valor = valor
	}

	validarDados() {
		for (let i in this) {
			if (this[i] == undefined || this[i] == '' || this[i] == null) {
				return false
			}
		}
		return true
	}
}

class Bd {

	constructor() {
		let id = localStorage.getItem('id')

		if (id === null) {
			localStorage.setItem('id', 0)
		}
	}

	getProximoId() {
		let proximoId = localStorage.getItem('id')
		return parseInt(proximoId) + 1
	}

	gravar(d) {
		let id = this.getProximoId()

		localStorage.setItem(id, JSON.stringify(d))

		localStorage.setItem('id', id)
	}

	recuperarTodosRegistros() {
		let ArrDesp = Array()
		let id = localStorage.getItem('id')
		//recuperar todas as despesas no localstorage
		for (let i = 1; i <= id; i++) {
			//recuperar a despesa
			let desp = JSON.parse(localStorage.getItem(i))

			//Verificação de itens removidos
			if (desp === null) {
				continue
			}
			desp.id = i
			ArrDesp.push(desp)

		}
		return ArrDesp
	}

	pesquisar(despesa) {
		let despesaFiltrada = Array()
		despesaFiltrada = this.recuperarTodosRegistros()

		// Filtros
		if (despesa.ano != '') {
			despesaFiltrada = despesaFiltrada.filter(d => d.ano == despesa.ano)
		}
		if (despesa.mes != '') {
			despesaFiltrada = despesaFiltrada.filter(d => d.mes == despesa.mes)
		}
		if (despesa.dia != '') {
			despesaFiltrada = despesaFiltrada.filter(d => d.dia == despesa.dia)
		}
		if (despesa.tipo != '') {
			despesaFiltrada = despesaFiltrada.filter(d => d.tipo == despesa.tipo)
		}
		if (despesa.descricao != '') {
			despesaFiltrada = despesaFiltrada.filter(d => d.descricao == despesa.descricao)
		}
		if (despesa.valor != '') {
			despesaFiltrada = despesaFiltrada.filter(d => d.valor == despesa.valor)
		}
		return despesaFiltrada
	}

	remover(id) {
		localStorage.removeItem(id)
	}
}

let bd = new Bd()


function cadastrarDespesa() {

	let ano = document.getElementById('ano')
	let mes = document.getElementById('mes')
	let dia = document.getElementById('dia')
	let tipo = document.getElementById('tipo')
	let descricao = document.getElementById('descricao')
	let valor = document.getElementById('valor')

	let despesa = new Despesa(
		ano.value,
		mes.value,
		dia.value,
		tipo.value,
		descricao.value,
		valor.value
	)


	if (despesa.validarDados() === true && despesa.dia < 31) {
		bd.gravar(despesa)

		document.getElementById('modal_conteudo').innerHTML = 'Despesa salva com sucesso!'
		document.getElementById('modal_titulo').innerHTML = 'Sucesso na gravação'
		document.getElementById('modal_tituloDiv').className = 'modal-header text-success'
		document.getElementById('modal_btn').className = 'btn btn-success'
		document.getElementById('modal_btn').innerHTML = 'Voltar'

		$('#modalRegistraDespesa').modal('show')

		//Zerando os campos
		ano.value = ''
		mes.value = ''
		dia.value = ''
		tipo.value = ''
		descricao.value = ''
		valor.value = ''

	} else {
		
		if (despesa.dia > 31) {
			document.getElementById('modal_conteudo').innerHTML = 'Valor do campo DIA'
			document.getElementById('modal_titulo').innerHTML = `Seu mês tem ${despesa.dia}??????? Então volta e arruma`
			document.getElementById('modal_tituloDiv').className = 'modal-header text-danger'
			document.getElementById('modal_btn').className = 'btn btn-danger'
			document.getElementById('modal_btn').innerHTML = 'CORRIGIR ESSA CARALHA'

			$('#modalRegistraDespesa').modal('show')
		} else {
			document.getElementById('modal_conteudo').innerHTML = 'Está faltando um ou mais elementos para efetuar o registro'
			document.getElementById('modal_titulo').innerHTML = 'Erro na inclusão do registro'
			document.getElementById('modal_tituloDiv').className = 'modal-header text-danger'
			document.getElementById('modal_btn').className = 'btn btn-danger'
			document.getElementById('modal_btn').innerHTML = 'Voltar e corrigir'

			$('#modalRegistraDespesa').modal('show')
		}
	}

}

function carregaListaDespesas(despesas = Array(), filtro = false) {
	if (despesas.length === 0 && filtro == false) {
		despesas = bd.recuperarTodosRegistros()
	}
	//selecionando elemento Tbody

	let listDesp = document.getElementById('listaDespesas')
	listDesp.innerHTML = ''

	despesas.forEach(function (d) {

		//criando a linha (TR)
		let linha = listDesp.insertRow()

		//Inserindo valores na linha
		linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`
		//Ajustar o tipo
		switch (parseInt(d.tipo)) {
			case 1: d.tipo = 'Alimentação'
				break
			case 2: d.tipo = 'Educação'
				break
			case 3: d.tipo = 'Lazer'
				break
			case 4: d.tipo = 'Saúde'
				break
			case 5: d.tipo = 'Transporte'
				break
		}
		linha.insertCell(1).innerHTML = d.tipo
		linha.insertCell(2).innerHTML = d.descricao
		linha.insertCell(3).innerHTML = d.valor

		//Botão de exclusão
		let btn = document.createElement("Button")
		btn.className = 'btn btn-danger'
		btn.innerHTML = '<i class="fas fa-times"></i>'
		btn.id = `id_despesa${d.id}`


		console.log(btn.id = d.id)
		btn.onclick = function () {
			let id = this.id.replace('id_despesa_', '')
			bd.remover(this.id)
			window.location.reload()
		}
		linha.insertCell(4).append(btn)

	})
}

function pesquisarDespesa() {
	let ano = document.getElementById('ano').value
	let mes = document.getElementById('mes').value
	let dia = document.getElementById('dia').value
	let tipo = document.getElementById('tipo').value
	let descricao = document.getElementById('descricao').value
	let valor = document.getElementById('valor').value

	let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)

	let despesas = bd.pesquisar(despesa)

	carregaListaDespesas(despesas, true)
}
