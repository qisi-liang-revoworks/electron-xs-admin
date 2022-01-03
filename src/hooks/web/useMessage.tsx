import { ElMessageBox, ElMessageBoxOptions } from 'element-plus';
import { useI18n } from '@/hooks/useI18n';

const { t } = useI18n();

function createElMessageBox(message: string, title: string, options: ElMessageBoxOptions) {
  console.log(title);
  ElMessageBox.confirm(message, title, options)
    .then(() => {})
    .catch(() => {});
}

function createErrorModal(message: string) {
  createElMessageBox(message, t('sys.errorTip'), {
    confirmButtonText: t('sys.okText'),
    cancelButtonText: t('sys.closeText'),
    type: 'error',
  });
}

export function useMessage() {
  return {
    createErrorModal,
  };
}
