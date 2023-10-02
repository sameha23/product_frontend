import React, { useEffect , useState} from 'react'

export const Cart = ({cartTrace, setCarttrace}) => {
    const [cartList, setCartList] = useState([])

    const handleCartDel = (id) => {

        const newCart = cartList?.filter(item => item?.id != id);
        setCartList(newCart)
        localStorage.setItem("cartData", JSON.stringify(newCart))
        setCarttrace(cartTrace + 1)
    }

    useEffect(() => {
        const list = JSON.parse(localStorage.getItem("cartData"))
        setCartList(list)
    },[])

    const decreaseItem = (id) => {
        const newItm = cartList?.map(itm => {
            if(itm.id == id)
            {
                if(itm?.qty > 1)
                {
                    return {...itm, qty : itm?.qty - 1}
                }else{
                    return itm
                }
            }else{
                return itm
            }
        })
        setCartList(newItm)

    }
    const increaseItem = (id) =>{
        const newItm = cartList?.map(itm => {
            if(itm.id == id)
            {
                
             return {...itm, qty : itm?.qty + 1}
                
            }else{
                return itm
            }
        })
        setCartList(newItm)
    }

  return (
    <div className='container'>
        <h3>Cart List</h3>

        <div class="table-responsive">
            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Product image</th>
                <th scope="col">Product title</th>
                <th scope="col">Price</th>
                <th scope="col">Qty</th>
                <th scope="col">Total</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {cartList?.map((item, index) => (
                    <tr key={item?.id}>
                        <th scope="row">{index + 1}</th>
                        <th> <img className='img' src={item?.image} style={{ width: 50, height: 50 }} alt="" /> </th>
                        <td>{item?.title}</td>
                        <td>${item?.price}</td>
                        <td>
                            <div className='d-flex justify-content-center' style={{ width: 100 }}>
                                <span onClick={() => decreaseItem(item?.id)} className='btn btn-sm btn-danger'>-</span>
                                <span style={{ width: 50, height: 40, background: '#F1F1F1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item?.qty}</span>
                                <span onClick={() => increaseItem(item?.id)} className='btn btn-sm btn-primary'>+</span>
                            </div>
                        </td>
                        <td>${item?.price * item?.qty}</td>
                        <td>
                            <button className='btn btn-sm btn-danger' onClick={() => handleCartDel(item?.id)}> X </button>
                        </td>
                    </tr>
                ))}
                
                <tr>
                    <td colSpan={5} style={{ textAlign: 'right' }} ><b>Subtotal</b></td>
                    <td colSpan={2}><b>$</b>{
                         cartList?.reduce((sum, i) => {
                            return sum + (i.price * i.qty)
                          }, 0)
                    }</td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
  )
}
