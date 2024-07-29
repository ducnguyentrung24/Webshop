document.addEventListener('DOMContentLoaded', () => {
    const register = document.getElementById('register');
    const login = document.getElementById('login');
    const addModal = document.getElementById('addTaskModal');
    const backRegis = document.getElementById('back-regis');
    const backLog = document.getElementById('back-log');
    const regisModal = document.getElementById('show-regis');
    const logModal = document.getElementById('show-log');
    
    const loginSwitch = document.getElementById('login-switch');
    const registerSwitch = document.getElementById('register-switch');

    register.addEventListener('click', () => {
        addModal.style.display = 'flex';
        regisModal.style.display = 'flex';
        logModal.style.display = 'none';
    });

    login.addEventListener('click', () => {
        addModal.style.display = 'flex';
        logModal.style.display = 'flex';
        regisModal.style.display = 'none';
    });

    backRegis.addEventListener('click', () => {
        addModal.style.display = 'none';
    });

    backLog.addEventListener('click', () => {
        addModal.style.display = 'none';
    });

    registerSwitch.addEventListener('click', () => {
        addModal.style.display = 'flex';
        regisModal.style.display = 'flex';
        logModal.style.display = 'none';
    });

    loginSwitch.addEventListener ('click', () => {
        addModal.style.display = 'flex';
        logModal.style.display = 'flex';
        regisModal.style.display = 'none';
    });

})