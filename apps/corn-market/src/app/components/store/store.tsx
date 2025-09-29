import { useState } from 'react';
import cornLayout from '../../../assets/corn.png';
import { useCornContext } from '../../../shared/context/corn-context';

export function Store() {
  const [cornsRequested, setCornsRequested] = useState(0);
  const { purchaseCorn } = useCornContext();

  const handleBuyCorn = () => {
    setCornsRequested((prev) => prev + 1);
    purchaseCorn();
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6 w-[600px]">
      {/* Imagen / card layout */}
      <div className="relative top-[80px] left-[-120px] w-[280px] h-[220px] rounded-xl overflow-hidden">
        <img src={cornLayout} alt="Corn Layout" className="w-full h-full" />
      </div>

      {/* Info */}
      <div className="flex flex-col items-center gap-3 w-full bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6 shadow-md">
        <p className="text-yellow-800 font-semibold text-lg">
          Order the Corns you want:
        </p>
        <p className="text-4xl font-bold text-green-700 drop-shadow-sm">
          Quantity: {cornsRequested}
        </p>

        <button
          className="bg-yellow-400 hover:bg-yellow-300 
          text-yellow-900 font-bold 
          px-8 py-3 
          rounded-full 
          shadow-lg hover:shadow-xl 
          transition-all duration-200 
          active:scale-95"
          onClick={handleBuyCorn}
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default Store;
