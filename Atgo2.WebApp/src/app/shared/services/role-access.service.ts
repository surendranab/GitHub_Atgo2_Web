import {
  Injectable
} from '@angular/core';
import {
  userActions,
  systemSettings
} from '../../app.config';

@Injectable()
export class RoleAccessService {
  roles: any;

  constructor() {}

  getRoles() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.roles = currentUser && currentUser.roles;
  }

  getAccess(name, permissionString, access) {
    this.getRoles();
    if (this.roles) {
      for (const role of this.roles) {
        if (access === role.accessName) {
          for (const module of role.modules) {
            if (name === module.moduleName) {
              for (const permission of module.permissions) {
                if (permissionString === permission.permissionName) {
                  return permission.isSelected;
                }
              }
            }
          }
        }
      }
    }
    return false;
  }
}
