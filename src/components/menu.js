import React,{useState} from 'react'
import AddModal from './addModal'
import { items } from './items'


export default function Menu() {
    const list = items
    const [food, setFood] = useState({})

    return (
        <div>
            {
                list.map(l => (
                    <>
                        <AddModal name={l} food={food} setFood={setFood} />
                        <br />
                    </>
                ))
            }
        </div>
    )
}
