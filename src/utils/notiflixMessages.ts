import { Confirm, Notify } from 'notiflix';

export type StatusMessageProps = 'ok' | 'error' | 'info';
export type ConfirmEvent = 'logout' | 'delete';
export interface INotiflixMessage {
  status: StatusMessageProps;
  message?: string;
}

const confirm = {
  logout: ['Sign out', 'Are you sure you want to logout?'],
  delete: ['Delete', 'Are you sure you want to delete?'],
};

Confirm.init({
  zindex: 9000,
  backgroundColor: 'var(--bg-container)',
  backOverlayColor: 'rgba(0,0,0,0.7)',
  borderRadius: '12px',
  cssAnimationStyle: 'zoom',
  titleColor: 'var(--primary-color)',
  messageColor: 'var(--secondary-color)',
  fontFamily: 'Gilroy',
  okButtonBackground: '#30B94D',
  cancelButtonBackground: '#E90516',
});
Notify.init({
  borderRadius: '12px',
  clickToClose: true,
  zindex: 9000,
  fontFamily: 'Gilroy',
  fontSize: '16px',
  cssAnimationStyle: 'from-right',
  fontAwesomeIconSize: '28px',
  success: {
    background: '#30B94D',
    textColor: 'var(--primary-color)',
  },
  failure: {
    background: '#E90516',
    textColor: 'var(--primary-color)',
  },
  info: {
    textColor: 'var(--primary-color)',
  },
});

export const notiflixMessage = (
  status: StatusMessageProps,
  message: string,
) => {
  switch (status) {
    case 'ok':
      return Notify.success(message);
    case 'info':
      return Notify.info(message);
    case 'error':
      return Notify.failure(message);
    default:
      break;
  }
};
export const notiflixConfirm = (event: ConfirmEvent) => {
  return new Promise<void>((resolve, reject) => {
    switch (event) {
      case 'logout':
        return Confirm.show(
          confirm.logout[0],
          confirm.logout[1],
          'Yes',
          'No',
          () => {
            Notify.success('See you. Bye');
            resolve();
          },
          () => {
            reject();
          },
        );
      case 'delete':
        return Confirm.show(
          confirm.delete[0],
          confirm.delete[1],
          'Yes',
          'No',
          () => {
            resolve();
          },
          () => {
            reject();
          },
        );
      default:
        break;
    }
  });
};
