let cadastroButton
let novaReceitaButton

const Vote_Contract_Address = "0x617962d9f8DdBDF307bA59FD635A20aD8fCfB079";
const Vote_Contract_ABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "doctor",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "patient",
				"type": "string"
			}
		],
		"name": "event_new_prescription",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "doctor",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "patient",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "pharmacy",
				"type": "string"
			}
		],
		"name": "event_prescription_moved",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			}
		],
		"name": "buy_prescription",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "doctor_address",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "doctor_name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract SafePrescription",
				"name": "prescription_",
				"type": "address"
			}
		],
		"name": "get_data",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "token",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "releaseOn",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "validUntil",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "medicines",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "patient",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "doctor",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "pharmacy",
						"type": "string"
					},
					{
						"internalType": "uint16",
						"name": "movedTo",
						"type": "uint16"
					},
					{
						"internalType": "uint256",
						"name": "transactionTimestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct Dados.Prescription",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_doctor_prescriptions",
		"outputs": [
			{
				"internalType": "contract SafePrescription[]",
				"name": "list",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_doctors",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract SafePrescription",
				"name": "prescription",
				"type": "address"
			}
		],
		"name": "get_index",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_patient_prescriptions",
		"outputs": [
			{
				"internalType": "contract SafePrescription[]",
				"name": "list",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_patients",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_pharmacies",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_pharmacy_prescriptions",
		"outputs": [
			{
				"internalType": "contract SafePrescription[]",
				"name": "list",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "nome",
				"type": "string"
			}
		],
		"name": "new_doctor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "nome",
				"type": "string"
			}
		],
		"name": "new_patient",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "nome",
				"type": "string"
			}
		],
		"name": "new_pharmacy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "validUntil",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "medicines",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "patient",
				"type": "string"
			}
		],
		"name": "new_prescription",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "patient_address",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "patient_name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "pharmacy_address",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "pharmacy_name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "validAt",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			}
		],
		"name": "repete_prescription",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "pharmacy_to",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			}
		],
		"name": "transfer_to_pharmacy",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "valid_doctor",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "valid_patient",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "valid_pharmacy",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]



const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");
accounts = provider.listAccounts();
const signer = provider.getSigner(accounts[0]);
const contrato = new ethers.Contract(Vote_Contract_Address, Vote_Contract_ABI, signer);




const cadastrar = async () => {
	const signer = provider.getSigner(accounts[0]);
	const contrato = new ethers.Contract(Vote_Contract_Address, Vote_Contract_ABI, signer);
	cadastroButton.value = "Cadastrando...";

	const nameInput = document.querySelector("#nome_cadastro_medico");

	register_name = nameInput.value;
	
	if (register_name = ""){
		window.alert("Nome inválido.");
	}

	if (await contrato.valid_doctor(signer.getAddress())) {
		window.alert("Você já está cadastrado.");
		cadastroButton.value = "Cadastrar";
		return
	}

	doctors = await contrato.get_doctors()
	for (i=0; i<doctors.length; i++){
		if (register_name == doctors[i]){
			window.alert("Esse nome já está cadastrado, tente outro nome.");
			cadastroButton.value = "Cadastrar";
			return
		}
	}

	await contrato.new_doctor(register_name);
	cadastroButton.value = "Cadastrar";
	window.alert("cadastrando")

}

async function send_lista_receitas(){
	const signer = provider.getSigner(accounts[0]);
	const contrato = new ethers.Contract(Vote_Contract_Address, Vote_Contract_ABI, signer);

	if (await contrato.valid_doctor(signer.getAddress())) {
		window.location.href = "./listar_receitas_medico.html"
		return
	}
	window.alert("Você ainda não está cadastrado como médico, se cadastre antes de acessar essa página.");
}

async function send_nova_receita(){
	const signer = provider.getSigner(accounts[0]);
	const contrato = new ethers.Contract(Vote_Contract_Address, Vote_Contract_ABI, signer);

	if (await contrato.valid_doctor(signer.getAddress())) {
		window.location.href = "./nova_receita_medico.html"
		return
	}
	window.alert("Você ainda não está cadastrado como médico, se cadastre antes de acessar essa página.");
}

async function gerar_pagina(){
	const inicio = document.getElementById("inicio")
	if (!await contrato.valid_pharmacy(signer.getAddress())) {
		html = '<label>Nome de usuário para cadastro:</label>'
		html += '<input type="text" placeholder="Nome de usuário" id="nome_cadastro_medico" />'
		html += '<input type="button" value="Cadastrar" id="cadastro_medico" />'
		inicio.innerHTML = html
		cadastroButton = document.querySelector("#cadastro_medico");
		cadastroButton.addEventListener("click", cadastrar);
	} else {
		html = '<input type="button" value="Criar Receita" id="cadastro_receita"/>'
		html += '<input type="button" value="Ver receitas criadas" id="receitas_criadas"/>'
		inicio.innerHTML = html
		receitasButton = document.querySelector("#receitas_criadas");
		receitasButton.addEventListener("click", send_lista_receitas);
		novaReceitaButton = document.querySelector("#cadastro_receita");
		novaReceitaButton.addEventListener("click", send_nova_receita);
	}
}

gerar_pagina()