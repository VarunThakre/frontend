/*
 * UserModule Messages
 *
 */
import { defineMessages } from 'react-intl';

export const scope = 'containers.UserModule';

export default defineMessages({
  helmetTitle: {
    id: `${scope}.helmetTitle`,
    defaultMessage: 'User Management',
  },
  editTitle: {
    id: `${scope}.editTitle`,
    defaultMessage: 'Edit User',
  },
  addTitle: {
    id: `${scope}.addTitle`,
    defaultMessage: 'Add User',
  },
  usernameLabel: {
    id: `${scope}.usernameLabel`,
    defaultMessage: 'Username',
  },
  roleLabel: {
    id: `${scope}.roleLabel`,
    defaultMessage: 'Role',
  },
  statusLabel: {
    id: `${scope}.statusLabel`,
    defaultMessage: 'Status',
  },
  usernamePlaceHolder: {
    id: `${scope}.usernamePlaceHolder`,
    defaultMessage: 'Input username',
  },
  nameLabel: {
    id: `${scope}.nameLabel`,
    defaultMessage: 'Name',
  },
  namePlaceHolder: {
    id: `${scope}.namePlaceHolder`,
    defaultMessage: 'Input name',
  },
  emailLabel: {
    id: `${scope}.emailLabel`,
    defaultMessage: 'Email',
  },
  emailPlaceHolder: {
    id: `${scope}.emailPlaceHolder`,
    defaultMessage: 'Input Email address',
  },
  passwordLabel: {
    id: `${scope}.passwordLabel`,
    defaultMessage: 'Password',
  },
  confirmPasswordLabel: {
    id: `${scope}.confirmPasswordLabel`,
    defaultMessage: 'Confirm Password',
  },
  dateLabel: {
    id: `${scope}.dateLabel`,
    defaultMessage: 'Created At',
  },
  addLabel: {
    id: `${scope}.addLabel`,
    defaultMessage: 'Add New',
  },
  actionLabel: {
    id: `${scope}.actionLabel`,
    defaultMessage: 'Action',
  },
  createdAt: {
    id: `${scope}.createdAt`,
    defaultMessage: '{ts, date, ::yyyyMMdd}',
  },
  listTitle: {
    id: `${scope}.listTitle`,
    defaultMessage: 'Users',
  },
  cancelBtn: {
    id: `${scope}.cancelBtn`,
    defaultMessage: 'Cancel',
  },
  active: {
    id: `${scope}.active`,
    defaultMessage: 'Active',
  },
  inactive: {
    id: `${scope}.inactive`,
    defaultMessage: 'Inactive',
  },
  blocked: {
    id: `${scope}.blocked`,
    defaultMessage: 'Blocked',
  },
});
