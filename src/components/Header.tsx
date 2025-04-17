import { Link } from '@tanstack/react-router';

import TanchatHeader from '../integrations/tanchat/header-user';
import HeaderUser from '@/integrations/clerk/header-user';
import Cart from './Cart';

export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-white text-black justify-between">
      <nav className="flex flex-row">
        <div className="px-2 font-bold">
          <Link to="/" suppressHydrationWarning>Home</Link>
        </div>

        <div className="px-2 font-bold">
          <Link suppressHydrationWarning to="/demo/start/server-funcs">Start - Server Functions</Link>
        </div>

        <div className="px-2 font-bold">
          <Link suppressHydrationWarning to="/demo/start/api-request">Start - API Request</Link>
        </div>

        <div className="px-2 font-bold">
          <Link suppressHydrationWarning to="/demo/store">Store</Link>
        </div>

        <div className="px-2 font-bold">
          <Link suppressHydrationWarning to="/demo/tanstack-query">TanStack Query</Link>
        </div>

        {/* <div className="px-2 font-bold">
          <Link suppressHydrationWarning to="/example/chat">Chat</Link>
        </div> */}

        <div className="px-2 font-bold">
          <Link suppressHydrationWarning to="/example/guitars">Guitar Demo</Link>
        </div>
      </nav>

      <div className="flex gap-4">
        <Cart />
        <HeaderUser />
        <TanchatHeader />
      </div>
    </header>
  );
}
