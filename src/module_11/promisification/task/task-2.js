// ================ Task 2 ================
const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
    return new Promise((resolved) => {
        const updatedUsers = allUsers.map(user =>
            user.name === userName ? { ...user, active: !user.active } : user,
        );

        resolved(updatedUsers);
    })
};

const logger = updatedUsers => console.table(updatedUsers);

// Вызовы функции для проверки
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);