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
			} else {
				ArrDesp.push(desp)
			}
		}
		return ArrDesp
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
	if (despesa.validarDados() === true) {
		bd.gravar(despesa)

		document.getElementById('modal_conteudo').innerHTML = 'Despesa salva com sucesso!'
		document.getElementById('modal_titulo').innerHTML = 'Sucesso na gravação'
		document.getElementById('modal_tituloDiv').className = 'modal-header text-success'
		document.getElementById('modal_btn').className = 'btn btn-success'
		document.getElementById('modal_btn').innerHTML = 'Voltar'

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

function carregaListaDespesas() {
	let despesas = Array()
	despesas = bd.recuperarTodosRegistros()
	//selecionando elemento Tbody
	let listDesp = document.getElementById('listaDespesas')

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
	})
}
