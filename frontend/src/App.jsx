import { Sidebar } from './components/Sidebar';
import { Feed } from './components/Feed';

export function App() {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 h-full p-4 bg-gray-100">
        <Sidebar className="sticky top-0" />
      </div>
      <div className="w-3/4 h-full overflow-y-scroll p-4">
        <Feed />
      </div>
    </div>
  );
}
