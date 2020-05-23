export const addItemToCart = (cartItems, cartItemToAdd) => {
    // 找有沒有加入過這樣物品
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    // 如果清單已經有這樣物品
    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }

    // 如果清單沒有加入過這樣東西
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(cartItem => {
        return cartItem.id === cartItemToRemove.id ? 
        {...cartItem, quantity: cartItem.quantity - 1} : cartItem
    })
}

// cartItems: Array(4)
// 0: {id: 3, name: "barbell incline bench", imageUrl: "/static/media/barbell_incline_bench.0f9d3f09.jpg", price: 35}

// 1: {id: 2, name: "dumbbell bench press", imageUrl: "/static/media/dumbbell_bench_press.abae2c94.jpg", price: 18}

// 2: {id: 4, name: "incline push-ups", imageUrl: "/static/media/incline_push-ups.08b4752b.jpg", price: 25}

// 3: {id: 4, name: "incline pus