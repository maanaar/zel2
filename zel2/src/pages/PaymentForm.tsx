import React from 'react';
import zel from '../../src/assets/logo.png';
import bg from '../../src/assets/bg.jpeg';
const PaymentForm = () => {
  return (
 <div
      className="min-h-screen flex  items-center justify-center"
      style={{
        backgroundColor: "#1C1C3F",
        backgroundImage: `
          linear-gradient(to bottom right, #70296B 67%, #F90DD2 100%),
          url(${bg})`,
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >      
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl flex flex-col gap-8">
        {/* Billing Address */}
      <div className='flex flex-row space-x-8'>
        <div className="w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold text-[#89375F]">Checkout</h2>
          <h3 className="text-lg font-medium text-gray-700">Billing address</h3>
          
          <input type="text" placeholder="Card" className="w-full p-2 border rounded-md" />
          <input type="text" placeholder="1234 1234 1234 1234" className="w-full p-2 border rounded-md" />
          
          <div className="flex gap-4">
            <input type="text" placeholder="MM / YY" className="w-1/2 p-2 border rounded-md" />
            <input type="text" placeholder="CVC" className="w-1/2 p-2 border rounded-md" />
          </div>

          <div className="flex gap-4">
            <select className="w-1/2 p-2 border rounded-md">
              <option>United States</option>
              <option>Canada</option>
            </select>
            <input type="text" placeholder="90210" className="w-1/2 p-2 border rounded-md" />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label>Save this card for late</label>
          </div>
        </div>

        {/* Order Details */}
        <div className="w-1/2 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-[#89375F]">Order</h2>
            <img src={zel} alt="zel" className="h-16 w-32" />
          </div>
          
          <h3 className="text-lg font-medium text-gray-700">Order Details</h3>
          <div className="p-4 border rounded-md space-y-2 bg-gray-50">
            <p>Item 1 : $$</p>
            <p>Item 2 : $$</p>
            <p>Item 3 : $$</p>
          </div>

          <div className="space-y-2">
            <p>Original Price: $$</p>
            <p>Total: $$$</p>
          </div>

          <p className="text-sm text-gray-500">
            By completing your purchase, you agree to these <a href="#" className="underline text-blue-600">Terms of Use.</a>
          </p>
            
        </div>
        
      
      </div>
        <button className="w-1/3 mx-auto mt-8 px-10 py-3 bg-[#030C37] text-white rounded-full ">
            Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;