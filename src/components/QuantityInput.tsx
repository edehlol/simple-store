import React from 'react';

const QuantityInput = ({
  quantity,
  addQuantity,
  subtractQuantity,
  small,
}: {
  quantity: number;
  addQuantity: any;
  subtractQuantity: () => void;
  small?: boolean;
}) => {
  return (
    <div
      className={`rounded-sm w-full grid grid-cols-3 bg-gray-100  ${
        small ? 'text-normal h-10' : 'text-3xl h-16'
      }`}
    >
      <button
        className={` text-lg text-gray-300 hover:text-black font-light ${
          quantity === 1 ? 'opacity-0' : ''
        }`}
        onClick={subtractQuantity}
        disabled={quantity === 1}
      >
        -
      </button>
      <input
        type="text"
        className="w-full text-center bg-gray-100 focus:outline-none"
        value={quantity}
        readOnly
      />
      <button
        className="text-lg text-gray-300 hover:text-black text-lg font-light"
        onClick={addQuantity}
      >
        +
      </button>
    </div>
  );
};
export default QuantityInput;
