'use client';

import { useDAppConnector } from './client-providers';

export function WalletButton() {
  const { dAppConnector, userAccountId } = useDAppConnector();

  const handleLogin = () => {
    if (dAppConnector) {
      void dAppConnector.openModal();
    }
  };

  return (
    <button
      className="truncate bg-zinc-600 py-1 px-4 rounded-md cursor-pointer"
      onClick={handleLogin}
      disabled={!dAppConnector}
    >
      {userAccountId ? userAccountId : 'Log in'}
    </button>
  );
}
