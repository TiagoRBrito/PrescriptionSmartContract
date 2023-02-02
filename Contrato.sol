// SPDX-License-Identifier: MIT
pragma solidity ^ 0.8.13;

contract SafePrescription{
    struct Prescription{
        uint token; // Token id
        uint256 releaseOn; // Date of prescription
        uint256 validUntil; // Date of validity
        string medicines; // What drug can buy
        address patient; // Patiente address
        address doctor; // Doctor address
        address pharmacy; // Pharmcy address
        uint16 movedTo; // 1: Patient, 2: Pharmacy, 3: Bought, 4: Burned
        uint transactionTimestamp;
    }

    Prescription prescriptions;

    event event_moved_prescription(uint16 moved);

    constructor(uint index, uint256 newDate, uint256 newValidUntil, string memory newMedicines, address newPatient, address newDoctor){
        prescriptions.token = index;
        prescriptions.doctor = newDoctor;
        prescriptions.patient = newPatient;
        prescriptions.releaseOn = newDate;
        prescriptions.transactionTimestamp = newDate;
        prescriptions.medicines = newMedicines;
        prescriptions.movedTo = 1;
        prescriptions.validUntil = newValidUntil;
    }

    function transfer_to_phamacy(address pharmacy, uint256 date) public returns(bool){
        if (prescriptions.movedTo == 1){
            if (date <= prescriptions.validUntil){
                prescriptions.pharmacy = pharmacy;
                prescriptions.movedTo = 2;
                return true;
            }
            prescriptions.movedTo = 4;
            return false;
        }
        return false;
    }

    function buy_prescription(uint256 date) public returns(bool){
        if (date <= prescriptions.validUntil){
            if (prescriptions.movedTo == 2){
                prescriptions.transactionTimestamp = date;
                prescriptions.movedTo = 3;
                return true;
            }
        }
        prescriptions.movedTo = 4;
        return false;
    }

    function get_patient() view public returns(address){
        return prescriptions.patient;
    }

    function get_doctor() view public returns(address){
        return prescriptions.doctor;
    }

    function get_pharmacy() view public returns(address){
        return prescriptions.pharmacy;
    }

    function get_token() view public returns(uint){
        return prescriptions.token;
    }

    function get_releaseOn() view public returns(uint256){
        return prescriptions.releaseOn;
    }

    function get_validUntil() view public returns(uint256){
        return prescriptions.validUntil;
    }

    function get_medicines() view public returns(string memory){
        return prescriptions.medicines;
    }

    function get_movedTo() view public returns(uint16){
        return prescriptions.movedTo;
    }

    function get_transactionTimestamp() view public returns(uint){
        return prescriptions.transactionTimestamp;
    }
}

contract Dados {
    string[] patients;
    string[] doctors;
    string[] pharmacies;

    SafePrescription[] prescriptions;

    struct Prescription{
        uint token; // Token id
        uint256 releaseOn; // Date of prescription
        uint256 validUntil; // Date of validity
        string medicines; // What drug can buy
        string patient; // Patiente string
        string doctor; // Doctor string
        string pharmacy; // Pharmcy string
        uint16 movedTo; // 1: Patient, 2: Pharmacy, 3: Bought, 4: Burned
        uint transactionTimestamp;
    }

    struct Control{
        string user;
        SafePrescription[] list_prescriptions;
    }

    Control[] doctor_control;
    Control[] patient_control;
    Control[] pharmacy_control;

    // NOVA PRESCRIÇÃO
    event event_new_prescription(string doctor, string patient);
    event event_prescription_moved(string doctor, string patient, string pharmacy);

    mapping (string=>uint) id_doctor;
    mapping (string=>uint) id_patient;
    mapping (string=>uint) id_pharmacy;

    mapping (address=>bool) public valid_patient;
    mapping (address=>bool) public valid_doctor;
    mapping (address=>bool) public valid_pharmacy;

    mapping (address=>string) public patient_name;
    mapping (address=>string) public doctor_name;
    mapping (address=>string) public pharmacy_name;

    mapping (string=>address) public patient_address;
    mapping (string=>address) public doctor_address;
    mapping (string=>address) public pharmacy_address;

    modifier onlyPatient(uint index){
        require(msg.sender == prescriptions[index].get_patient());
        _;
    }

    modifier onlyDoctor(uint index){
        require(msg.sender == prescriptions[index].get_doctor());
        _;
    }

    modifier onlyPharmacy(uint index){
        require(msg.sender == prescriptions[index].get_pharmacy());
        _;
    }

    modifier nomeValido(string memory _nome){
        require(bytes(_nome).length > 0, "Entre com um nome valido");
        _;
    }

    function new_patient(string memory nome) nomeValido(nome) public{
        id_patient[nome] = patients.length;
        patients.push(nome);
        valid_patient[msg.sender] = true;
        patient_name[msg.sender] = nome;
        patient_address[nome] = msg.sender;
        Control memory c_patient;
        c_patient.user = nome;
        patient_control.push(c_patient);
    }

    function new_doctor(string memory nome) nomeValido(nome) public{
        id_doctor[nome] = doctors.length;
        doctors.push(nome);
        valid_doctor[msg.sender] = true;
        doctor_name[msg.sender] = nome;
        doctor_address[nome] = msg.sender;
        Control memory c_doctor;
        c_doctor.user = nome;
        doctor_control.push(c_doctor);
    }

    function new_pharmacy(string memory nome) nomeValido(nome) public{
        id_pharmacy[nome] = pharmacies.length;
        pharmacies.push(nome);
        valid_pharmacy[msg.sender] = true;
        pharmacy_name[msg.sender] = nome;
        pharmacy_address[nome] = msg.sender;
        Control memory c_pharmacy;
        c_pharmacy.user = nome;
        pharmacy_control.push(c_pharmacy);
    }

    function new_prescription(uint256 date, uint256 validUntil, string memory medicines, string memory patient) public{
        require(valid_doctor[msg.sender]);
        SafePrescription prescription = new SafePrescription(prescriptions.length,date, validUntil, medicines, patient_address[patient], msg.sender);
        prescriptions.push(prescription);
        doctor_control[id_doctor[doctor_name[msg.sender]]].list_prescriptions.push(prescription);
        patient_control[id_patient[patient]].list_prescriptions.push(prescription);
        emit event_new_prescription(doctor_name[msg.sender], patient);
    }

    function get_index(SafePrescription prescription) public view returns(uint){
        return prescription.get_token();
    }
    
    function get_doctors() public view returns(string[] memory){
        return doctors;
    }

    function get_patients() public view returns(string[] memory){
        return patients;
    }

    function get_pharmacies() public view returns(string[] memory){
        return pharmacies;
    }

    function get_doctor_prescriptions() public view returns(SafePrescription[] memory list){
        for (uint i = 0; i<doctor_control.length; i++){
            if(keccak256(bytes(doctor_control[i].user)) == keccak256(bytes(doctor_name[msg.sender]))){
                return doctor_control[i].list_prescriptions;
            }
        }
        return list;
    }

    function get_patient_prescriptions() public view returns(SafePrescription[] memory list){
        for (uint i = 0; i<patient_control.length; i++){
            if(keccak256(bytes(patient_control[i].user)) == keccak256(bytes(patient_name[msg.sender]))){
                return patient_control[i].list_prescriptions;
            }
        }
    }

    function get_pharmacy_prescriptions() public view returns(SafePrescription[] memory list){
        for (uint i = 0; i<pharmacy_control.length; i++){
            if(keccak256(bytes(pharmacy_control[i].user)) == keccak256(bytes(pharmacy_name[msg.sender]))){
                return pharmacy_control[i].list_prescriptions;
            }
        }
    }

    function get_data(SafePrescription prescription_) view public returns(Prescription memory){
        return Prescription (
        prescription_.get_token(), // Token id
        prescription_.get_releaseOn(), // Date of prescription
        prescription_.get_validUntil(), // Date of validity
        prescription_.get_medicines(), // What drug can buy
        patient_name[prescription_.get_patient()], // Patiente address
        doctor_name[prescription_.get_doctor()], // Doctor address
        pharmacy_name[prescription_.get_pharmacy()], // Pharmcy address
        prescription_.get_movedTo(), // 1: Patient, 2: Pharmacy, 3: Bought, 4: Burned
        prescription_.get_transactionTimestamp()
        );
    }

    function transfer_to_pharmacy(uint index, string memory pharmacy_to, uint date) public onlyPatient(index) returns(bool) {
        pharmacy_control[id_pharmacy[pharmacy_to]].list_prescriptions.push(prescriptions[index]);
        emit event_prescription_moved(doctor_name[prescriptions[index].get_doctor()], patient_name[msg.sender], pharmacy_to);
        return prescriptions[index].transfer_to_phamacy(pharmacy_address[pharmacy_to], date);
    }

    function repete_prescription(uint index, uint256 validAt, uint256 date) public onlyDoctor(index) {
        Prescription memory data = get_data(prescriptions[index]);
        new_prescription(date, validAt, data.medicines, data.patient);
    }

    function buy_prescription(uint index, uint256 date) public onlyPharmacy(index) returns(bool) {
        emit event_prescription_moved(doctor_name[prescriptions[index].get_doctor()], patient_name[prescriptions[index].get_patient()], pharmacy_name[msg.sender]);
        return prescriptions[index].buy_prescription(date);
    }
}