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
  backgroundColor: 'var(--bg-modal)',
  backOverlayColor: 'rgba(0,0,0,0.7)',
  borderRadius: '12px',
  cssAnimationStyle: 'zoom',
  titleColor: 'var(--color-text-primary)',
  fontFamily: 'Manrope',
  okButtonBackground: 'var(--bg-btn-positive)',
  cancelButtonBackground: 'var(--bg-btn-negative)',
});
Notify.init({
  borderRadius: '12px',
  clickToClose: true,
  zindex: 9000,
  fontFamily: 'Roboto',
  fontSize: '16px',
  cssAnimationStyle: 'from-right',
  fontAwesomeIconSize: '28px',
  success: {
    background: '#3CBF61',
    textColor: '#EFEDE8',
  },
  failure: {
    background: '#E9101D',
    textColor: '#EFEDE8',
  },
  info: {
    textColor: '#EFEDE8',
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
