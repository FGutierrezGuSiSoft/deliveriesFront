export function getDeliveries() {
  return Promise.resolve([
    {
      number: '123',
      description: 'Descripción 1',
      status: 'En Curso',
      creation: '2019-06-16'
    },
    {
      number: '456',
      description: 'Descripción 2',
      status: 'Finalizado',
      creation: '2019-04-16'
    }
  ]);
}

export function createDelivery(delivery) {
  return Promise.resolve({
    number: '123',
    description: delivery.description,
    status: 'En Curso',
    creation: '2019-06-16'
  });
}


export function login(user) {
  return Promise.resolve('token');
}

export function register(user) {
  return Promise.resolve();
}
