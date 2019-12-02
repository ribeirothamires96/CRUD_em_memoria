export class VeicleService {
    veicles = [
        {
            id: '1',
            name: 'Corsinha',
            model: 'Chevrolet',
            color: 'Silver',
            licensePlate: 'HAH-7462'
        },
        {
            id: '2',
            name: 'Gol',
            model: 'Volkswagen',
            color: 'Red',
            licensePlate: 'AAA-5475'
        },
        {
            id: '3',
            name: 'Renault',
            model: 'Sandero',
            color: 'Black',
            licensePlate: 'KKK-124'
        },
        {
            id: '4',
            name: 'Corsinha',
            model: 'Chevrolet',
            color: 'Silver',
            licensePlate: 'HAH-7462'
        },
        {
            id: '5',
            name: 'Gol',
            model: 'Volkswagen',
            color: 'Red',
            licensePlate: 'AAA-5475'
        },
        {
            id: '6',
            name: 'Renault',
            model: 'Sandero',
            color: 'Black',
            licensePlate: 'KKK-124'
        },
        {
            id: '7',
            name: 'Corsinha',
            model: 'Chevrolet',
            color: 'Silver',
            licensePlate: 'HAH-7462'
        },
        {
            id: '8',
            name: 'Gol',
            model: 'Volkswagen',
            color: 'Red',
            licensePlate: 'AAA-5475'
        },
        {
            id: '9',
            name: 'Renault',
            model: 'Sandero',
            color: 'Black',
            licensePlate: 'KKK-124'
        }
    ]

    removeVeicle(veicle) {
        let index = this.veicles.indexOf(veicle);
        if (index > -1) {
            this.veicles.splice(index, 1);
        }
    }

    addVeicle (veicle){
        this.veicles.push(veicle);
        }
}