import React from 'react';

const QuantityInput = ({
  quantity,
  addQuantity,
  subtractQuantity,
}: {
  quantity: number;
  addQuantity: any;
  subtractQuantity: () => void;
}) => {
  return (
    <div className="w-full grid grid-cols-3 bg-gray-100 h-16 text-3xl">
      <button
        className={` text-lg font-light ${quantity === 1 ? 'opacity-0' : ''}`}
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
      <button className="text-lg font-light" onClick={addQuantity}>
        +
      </button>
    </div>
  );
};
export default QuantityInput;
