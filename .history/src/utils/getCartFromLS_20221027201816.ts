export const getCartFromLS = () => {
    const json = localStorage.getItem('cart')
   return json ? JSON.parse(json) : [],
}