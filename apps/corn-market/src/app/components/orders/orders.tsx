import { useCornContext } from "../../../shared/context/corn-context";

export function Orders() {
  const { cornsPurchased } = useCornContext();

  return (
    <div className="flex flex-col items-center justify-center 
      w-[350px] h-[200px] 
      border-2 border-yellow-400 rounded-2xl 
      shadow-lg bg-yellow-50">
      
      <p className="text-yellow-700 font-bold text-lg mb-2">
      Orders Completed
      </p>
      <p className="text-5xl font-extrabold text-green-700 drop-shadow-sm">
        {cornsPurchased}
      </p>
    </div>
  );
}

export default Orders;