type User = {
  id: string;
};

type Category = {
  id: string;
  name: string;
  user: User;
};

class BasePermission<Resource> {
  constructor(protected readonly user: User, protected readonly resource: Resource) {}
}

class CategoryPermission extends BasePermission<Category> {
  canRead() {
    return this.user.id === this.resource.user.id;
  }
}

export {};
