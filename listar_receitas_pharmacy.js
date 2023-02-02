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

var meu_nome

const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");
accounts = provider.listAccounts();
const signer = provider.getSigner(accounts[0]);
const contrato = new ethers.Contract(Vote_Contract_Address, Vote_Contract_ABI, signer);



async function criarListaReceitas(){
	meu_nome = await contrato.pharmacy_name(await signer.getAddress())
	retorno = await contrato.get_pharmacy_prescriptions();
	let tbody = document.getElementById('tbody')
	tbody.innerText = '';
	for (i=0; i<retorno.length; i++) {
		receitas = await contrato.get_data(retorno[i])

		let tr = tbody.insertRow();
		let td_id = tr.insertCell();
		let td_paciente = tr.insertCell();
		let td_validade = tr.insertCell();
		let td_remedios = tr.insertCell();
		let td_status = tr.insertCell();

		data = new Date(parseInt(receitas.validUntil._hex,16))
		month = data.getMonth()+1

		td_id.innerText = receitas.token
		td_paciente.innerText = receitas.patient
		td_validade.innerText = (data.getDay() + '/' + month + '/' + data.getFullYear())
		td_remedios.innerText = receitas.medicines
		switch (receitas.movedTo){
			case 1: 
				td_status.innerText = "Paciente"
				break;
			case 2: 
				td_status.innerText = "Farmácia"
				break;
			case 3: 
				td_status.innerText = "Comprada"
				break;
			case 4: 
				td_status.innerText = "Vencida"
				break;
		}
	}

}

criarListaReceitas();

const comprarButton = document.querySelector("#compra_receita");

async function comprar(){
	const idInput = document.querySelector("#id_receita");
	
	index = idInput.value
	
	retorno = await contrato.get_pharmacy_prescriptions();
	for (i=0; i<retorno.length; i++) {
		if (await contrato.buy_prescription(index, Date.now())){
			window.alert("Receita comprada")
			criarListaReceitas()
			return
		} else {
			window.alert("Receita vencida")
			criarListaReceitas()
			return
		}
	}
	window.alert("ID diferente de uma das receitas que você tem.")
	return	
}
comprarButton.addEventListener("click", comprar);

contrato.on("event_prescription_moved", (doctor, patient, pharmacy) => {
	if (pharmacy == meu_nome){
		criarListaReceitas();
	}
})