const Modal = {
    open(){
        // Abrir modal
        // Adicionar a class active ao modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
        
    },

    close(){
        // Fechar o modal
        // Remover a chave active no modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: 20000,
        date: '23/01/2021',
    },
]

const Transaction = {
    incomes() {
        // Somar as entradas
    },

    expenses() {
        // Somar as Saídas
    },

    total() {
        // Entradas - Saídas
    }
}

const DOM = {
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML

    },
    innerHTMLTransaction() {
        const html = `
            <td class="description">Luz</td>
            <td class="expense">- R$ 500,00</td>
            <td class="date">23/01/2021</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover transação">
            </td>
        `
    }
}