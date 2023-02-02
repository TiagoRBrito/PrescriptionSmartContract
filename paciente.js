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
	cadastroButton.value = "Cadastrando...";

	const nameInput = document.querySelector("#nome_cadastro_paciente");

	register_name = nameInput.value;
	if (register_name = ""){
		window.alert("Nome inválido.");
	}

	if (await contrato.valid_patient(signer.getAddress())) {
		cadastroButton.value = "Cadastrar";
		window.alert("Você já está cadastrado.");
		return
	}

	pacientes = await contrato.get_patients()
	for (i=0; i<pacientes.length; i++){
		if (register_name == pacientes[i]){
			cadastroButton.value = "Cadastrar";
			window.alert("Esse nome já está cadastrado, tente outro nome.");
			return
		}
	}

	await contrato.new_patient(register_name);
	cadastroButton.value = "Cadastrar";
	window.alert("cadastrando")

}

async function send(){
	if (await contrato.valid_patient(signer.getAddress())) {
		window.location.href = "./listar_receitas_paciente.html"
		return
	}
	window.alert("Você ainda não está cadastrado como paciente, se cadastre antes de acessar essa página.");
}

async function gerar_pagina(){
	const inicio = document.getElementById("inicio")
	if (!await contrato.valid_pharmacy(signer.getAddress())) {
		html = '<label>Nome de usuário para cadastro:</label>'
		html += '<input type="text" placeholder="Nome de usuário" id="nome_cadastro_paciente" />'
		html += '<input type="button" value="Ver Minhas Receitas" id="minhas_receita" />'
		inicio.innerHTML = html
		cadastroButton = document.querySelector("#cadastro_paciente");
		cadastroButton.addEventListener("click", cadastrar);
	} else {
		html = '<input type="button" value="Ver Receitas" id="minhas_receita"/>'
		inicio.innerHTML = html
		receitasButton = document.querySelector("#minhas_receita");
		receitasButton.addEventListener("click", send);
	}
}

gerar_pagina()