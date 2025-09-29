import { CornContextProvider } from '../../shared/context/corn-context';
import Orders from './orders/orders';
import Store from './store/store';

export function PageContainer() {
  return (
    <div className="wrapper flex justify-center min-h-screen">
      <CornContextProvider>
        <div className="flex flex-col items-center gap-10">
          <Store />
          <Orders/>
        </div>
      </CornContextProvider>
    </div>
  );
}

export default PageContainer;
