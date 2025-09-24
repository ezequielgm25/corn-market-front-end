import cornLayout from '../../../assets/corn.png';

export function Store() {
  return (
    <>
      <div className="relative top-[30px] flex">
        {/* card layout*/}
        <div className="relative w-[300px] h-[200]">
          <img
            src={cornLayout}
            alt="CardLayout"
            className="w-full h-[200] rounded-xl"
          />
        </div>
      </div>
      <div className="StoreWrapper flex flex-col p-5 w-[500px] h-[300]">
        <p>Order the Corns you want:</p>
        <p>Quantity:</p>
        <button className='bg-yellow-400 hover:bg-yellow-300 
        text-yellow-900 font-semibold 
        px-6 py-3 
        rounded-full 
        shadow-lg hover:shadow-xl 
        transition-all duration-200 
        active:scale-95'>Buy</button>
      </div>
    </>
  );
}

export default Store;
