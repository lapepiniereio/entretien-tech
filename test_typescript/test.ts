export interface User {
  id: number;
  name: string;
}

export class UserService {
  private users = [];

  constructor() {
    this.users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
  }

  fetchUser(id: number): Promise<User> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = this.users.find((u) => u.id == id);
        resolve(user);
      }, 500);
    });
  }

  async getUserName(id): Promise<string> {
    const user = await this.fetchUser(id);
    return user.name;
  }

  updateUser(id: any, update): void {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw "User not found";
    }
    Object.assign(user, update);
  }

  deleteUser(id: number): boolean {
    const index = this.users.findIndex((u) => u.id === id);
    if (index >= 0) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
}

function logUsers() {
  for (var i = 0; i < users.length; i++) {
    console.log("User:", users[i].name);
  }
}
