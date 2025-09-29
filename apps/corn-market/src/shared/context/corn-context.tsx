import {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
  Dispatch,
} from 'react';
import { buyCorn } from '../../services/corn-services';

type CornContextType = {
  cornsPurchased: number;
  purchaseCorn: Dispatch<null>;
};

const cornContext = createContext<CornContextType>({
  cornsPurchased: 0,
  purchaseCorn: () => {
    throw new Error('buyCorn must be used within a CardContextProvider');
  },
});

export function CornContextProvider({ children }: PropsWithChildren) {
  const [cornsPurchased, setCornsPurchased] = useState<number>(0);

  const purchaseCorn = async () => {
    let response;
    try {
      response = await buyCorn();
      if (response) {
        setCornsPurchased((prev) => prev + 1);
      }
    } catch (error) {
      console.error('Error while buying a corn', error);
    }
  };
  return (
    <cornContext.Provider value={{ cornsPurchased, purchaseCorn }}>
      {children}
    </cornContext.Provider>
  );
}

export function useCornContext() {
  return useContext(cornContext);
}
