const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
  }
  
  module.exports = {
    ROLE: ROLE,
    users: [
      { id: 1, name: 'Admin', role: ROLE.ADMIN },
      { id: 2, name: 'Student', role: ROLE.BASIC },
      { id: 3, name: 'Staff', role: ROLE.BASIC }
    ],
    projects: [
      { id: 1, name: "Admin's Project", userId: 1 },
      { id: 2, name: "Student's Project", userId: 2 },
      { id: 3, name: "Staff's Project", userId: 3 }
    ]
  }