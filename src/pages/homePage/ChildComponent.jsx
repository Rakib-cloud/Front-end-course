import React from 'react';

const ChildComponent = ({productInfo,user}) => {

    return (
        <div className="bg-gray-50 shadow rounded-md p-4">
            <h1>This is child component</h1>
            <div className="bg-gray-200 w-[200px] p-4 rounded-md shadow-md">
                <p>Product name:{productInfo.name}</p>
                <p>Product price:{productInfo.price}</p>
                <p>Product id:{productInfo.id}</p>
            </div>
            <div className="bg-teal-200 w-[200px] p-4 rounded-md shadow-md">
                <p>User Name:{user.name}</p>
                <p>User Age:{user.age}</p>
                <p>User Mobile:{user.mobile}</p>
            </div>
        </div>
    );
};

export default ChildComponent;