import UserPage from "./user/UserPage.jsx";
import ChildComponent from "./homePage/ChildComponent.jsx";


function HomePage() {
    const product={
        name:"shirt",
        price:100,
        id:2
    }
    const user={
        name:"Rakib",
        age:27,
        mobile:"01768726911"
    }
    return (
        <div className="">
            {/*<p>Product name:{product.name}</p>*/}
            {/*<p>Product price:{product.price}</p>*/}
            {/*<p>Product id:{product.id}</p>*/}

            {/*<ChildComponent productInfo={product} user={user}/>*/}


            {/*<UserPage/>*/}
        </div>
    )
}

export default HomePage