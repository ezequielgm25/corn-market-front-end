import {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
// import { addCard, getCards } from '../../services/card-services';
import { Corn } from '../../types/general-types';

type CornContextType = {
  card: Corn;
  cardsList: Corn[];
  setCard: Dispatch<SetStateAction<Corn>>;
  saveCard: Dispatch<Corn>;
};

const cornContext = createContext<CornContextType>({
  card: {
    cardNumber: '',
    expirationDate: '',
    ownerName: '',
    cvv: '',
  },
  cardsList: [],
  setCard: () => {
    throw new Error('setCard must be used within a CardContextProvider');
  },
  saveCard: () => {
    throw new Error('setCard must be used within a CardContextProvider');
  },
});

export function CornContextProvider({ children }: PropsWithChildren) {
  const [card, setCard] = useState<Corn>({
    cardNumber: '123456789123458',
    expirationDate: '12/30',
    ownerName: 'Ezequiel Garcia SII TEST',
    cvv: '123',
  });

  const [cardsList, setCardsList] = useState<Corn[]>([]);

  const saveCard = (values: Corn) => {
    // addCard(values).then(() => fetchCards());
  };
  const fetchCards = async () => {
    try {
      const corns = []; ///await getCards();
      setCardsList((corns || []).reverse());
    } catch (error) {
      console.error('Error al obtener tarjetas:', error);
    }
  };
  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <cornContext.Provider value={{ card, cardsList, setCard, saveCard }}>
      {children}
    </cornContext.Provider>
  );
}

export function useCornContext() {
  return useContext(cornContext);
}
