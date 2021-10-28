import React from 'react';

const QuantityInput = ({
  quantity,
  addQuantity,
  subtractQuantity,
  small,
}: {
  quantity: number;
  addQuantity: () => void;
  subtractQuantity: () => void;
  small?: boolean;
}) => {
  return (
    <div
      className={`rounded-lg w-full grid grid-cols-3 bg-gray-100  ${
        small ? 'text-normal h-12' : 'text-3xl h-16'
      }`}
    >
      <button
        className={` text-lg text-gray-500 hover:text-black font-light ${
          quantity === 1 ? 'opacity-0' : ''
        }`}
        onClick={subtractQuantity}
        disabled={quantity === 1}
      >
        -
      </button>
      <input
        type="text"
        className="w-full text-center bg-gray-100 focus:outline-none hover:cursor-default"
        value={quantity}
        readOnly
      />
      <button className="text-lg text-gray-500 hover:text-black  font-light" onClick={addQuantity}>
        +
      </button>
    </div>
  );
};
export default QuantityInput;
