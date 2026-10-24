export function isGoogleUser(user) {
  return Boolean(user && !user.isAnonymous && user.providerData?.some((p) => p.providerId === 'google.com'));
}
export function authErrorMessage(error) {
  return ({
    'auth/popup-closed-by-user': 'A entrada foi cancelada. Toque no botão para tentar novamente.',
    'auth/cancelled-popup-request': 'Conclua a entrada na janela do Google que já está aberta.',
    'auth/popup-blocked': 'Permita a janela de login Google e tente novamente. Se estiver no Moodle ou em outro aplicativo, abra esta página no navegador.',
    'auth/unauthorized-domain': 'Este endereço ainda não está autorizado para o login. Avise o professor e use o endereço oficial do Fisiologia em Fuga.',
    'auth/network-request-failed': 'Não foi possível conectar ao Google. Confira sua conexão e tente novamente.',
    'auth/operation-not-allowed': 'O login Google está indisponível. Avise o professor.',
    'auth/user-disabled': 'Esta conta está desativada para esta atividade. Entre em contato com o professor.',
  })[error?.code] || 'Não foi possível concluir a entrada. Tente novamente em seu navegador.';
}
