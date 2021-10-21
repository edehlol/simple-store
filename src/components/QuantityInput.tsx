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
    <div className="flex items-center bg-gray-100 w-40">
      <button
        className={`w-16 ${quantity === 1 ? 'opacity-0' : ''}`}
        onClick={subtractQuantity}
        disabled={quantity === 1}
      >
        -
      </button>
      <input
        type="text"
        className=" py-4 text-center w-8 bg-gray-100 focus:outline-none"
        value={quantity}
        readOnly
      />
      <button className="w-16" onClick={addQuantity}>
        +
      </button>
    </div>
  );
};
export default QuantityInput;
