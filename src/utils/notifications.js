import { I18n } from 'react-redux-i18n';
import { NotificationManager } from 'react-notifications';

export const createNotification = (type) => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success(I18n.t('user.success'), I18n.t('user.success_title'));
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error(I18n.t('user.error'), I18n.t('user.error_title'));
          break;
        default :
            NotificationManager.info('Info message');
      }
};