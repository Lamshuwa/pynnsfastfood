import React, { useState, useEffect } from 'react'
import './home.css'
import image from '../image/logo.jpg'
//import { items } from './items'
import { itemsprice } from './itmesprice'
import Footer from './footer'
import AddModal from './addModal'
import ListModal from './listModal'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import CustomToast from './CustomToast'
import StartModal from './startModal'

export default function Home() {
    const [food, setFood] = useState([])
    const [filter, setFilter] = useState('AL')
    const [search, setSearch] = useState('')
  

    const filteredItems = itemsprice.filter((item) => {
        return filter === 'AL' || item.name.toLowerCase().includes(filter.toLowerCase());
    });
    console.log(food)
    // useEffect(() => {
    //     if (food.length >0) {
    //         toast.success(<CustomToast message="Item Added to List Click on the plate to place order" />);
    //     }
    // }, [food])
    console.log(food.length)

    useEffect(() => {
        setFilter('AL')
    }, [search])


    const [isShaking, setIsShaking] = useState(false);

    const toggleShaking = () => {
        setIsShaking(true);


        setTimeout(() => {
            setIsShaking(false);
        }, 2000);
    };


        // Function to trigger the vibration
        const vibrate = () => {
          if ('vibrate' in navigator) {
            // Use the Vibration API if available
            navigator.vibrate([50, 50]); // Vibrate for 200ms, pause for 100ms, vibrate for 200ms
          } else {
            // Fallback for browsers that don't support the Vibration API
            console.warn("Vibration is not supported in this browser.");
          }
        };
    
    return (
        <div className="menuBody">
            <StartModal></StartModal>
            <ToastContainer></ToastContainer>
            <div className="logo">
                <img src={image} alt="" onClick={vibrate}/>
            </div>
            <div className="hr">
                <div className="menu">Order Your Food Online</div>
                <div className="search">
                    {/* <span className="searchIcon">
                        <img src={src} alt="" />
                    </span> */}
                    <input type="search" placeholder="Search.." value={search} onChange={e => setSearch(e.target.value)} />
                </div>
                <div className="filter">
                    <span className="filterText">filter</span>
                    <select name="filter" id="" value={filter} onChange={e => setFilter(e.target.value)}>
                        <option value="">All items</option>
                        <option value="chow">Chow</option>
                        <option value="rice">Fried Rice</option>
                        <option value="momo">Momo</option>
                        <option value="soup">Soup</option>
                    </select>

                </div>
                {/* <div className="viewBtn">
                <button>View List</button>
                </div> */}
                <br />

                <ListModal food={food} setFood={setFood} isShaking={isShaking} vibrate={vibrate}></ListModal>

                <div className="item">
                    <div>
                        <table>
                            <tr style={{ fontSize: '25px', borderBottom: '1px solid white' }}>
                                <th id="thItem">Menu</th>
                                <th>Price</th>
                            </tr>

                            {/* {
                items.map(l => (
                    <tr>
                        <td><AddModal name={l} food={food} setFood={setFood}></AddModal> </td>
                        <td>0.00</td>
                    </tr>
                ))
            } */}
                            {/* {
                                
                                items.filter((i) => {
                                    const searchText = search.replace(/\s/g, '').toLowerCase();
                                    return searchText.toLowerCase() === '' ? i : i.toLowerCase().includes(searchText.toLowerCase())
                                    && (filter === 'chow' ||i.toLowerCase().includes(filter.toLowerCase()))
                                }).map((l, index) => (
                                    <tr>
                                        <td><AddModal name={l} food={food} setFood={setFood}></AddModal> </td>
                                        <td>0.00</td>
                                    </tr>
                                ))
                            }  */}


                            {filteredItems
                                .filter((itemsprice) =>
                                    search.trim() === '' ||
                                    itemsprice.name.toLowerCase().includes(search.toLowerCase().trim())
                                )
                                .map((l, index) => (
                                    <tr key={index} >
                                        <td>
                                            <AddModal name={l.name} price={l.price} food={food} setFood={setFood} id={index + 1}
                                                toggleShaking={toggleShaking} vibrate={vibrate}
                                            ></AddModal>{' '}
                                        </td>
                                        <td>{l.price}</td>
                                    </tr>
                                ))}
                        </table>

                    </div>
                </div>


            </div>
            <Footer></Footer>
        </div>
    )
}
