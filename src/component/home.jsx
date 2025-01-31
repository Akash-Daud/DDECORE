import Header from './header.jsx';
import Chair from './Chairs.jsx';
import Tables from './Tables.jsx';
import Sofa from './Sofa.jsx';
import Lamp from './Lamps.jsx';
import Kitchen from './Kitchen.jsx';
import { useState } from 'react';
import Elevator from './Elevator.jsx';
const Home = () => {
    const [chair, setchair] = useState(false);
    const [table, settable] = useState(false);
    const [lamp, setlamp] = useState(false);
    const [sofa, setsofa] = useState(false);
    const [kitchen, setkitchen] = useState(false);
    const [elevator, setElevator] = useState(false);
    const [All, setAll] = useState(true);

    const showAll = () => {
        setAll(true);
        setchair(false);
        settable(false);
        setsofa(false);
        setlamp(false);
        setkitchen(false);
    };

    const showchair = () => {
        setAll(false);
        setchair(true);
        settable(false);
        setsofa(false);
        setlamp(false);
        setkitchen(false);
        setElevator(false);


    };
    const showlamp = () => {
        setAll(false);
        setchair(false);
        settable(false);
        setsofa(false);
        setlamp(true);
        setkitchen(false);
        setElevator(false);


    };
    const showsofa = () => {
        setAll(false);
        setchair(false);
        settable(false);
        setsofa(true);
        setlamp(false);
        setkitchen(false);
        setElevator(false);


    };

    const showtable = () => {
        setAll(false);
        setchair(false);
        settable(true);
        setsofa(false);
        setlamp(false);
        setkitchen(false);
        setElevator(false);


    };
    const showkitchen = () => {
        setAll(false);
        setchair(false);
        settable(false);
        setsofa(false);
        setlamp(false);
        setkitchen(true);
        setElevator(false);


    };
    const showelevator = () => {
        // setAll(false);
       
      
        setsofa(false);
        // setlamp(false);
      //  settable(false);
   //   setchair(false);
        // setkitchen(false);
        // setElevator(true);


    };

    return (
        <>
            <Header />
            <div className='tags-container'>
                <div className='tags'>
                    
                    <button onClick={showsofa}>Sofas</button>
                    
                   

                    {/* <button onClick={showlamp}>Lamps</button>
                     <button onClick={showtable}>Tables</button>
                      <button onClick={showAll}>All</button> 
                     <button onClick={showchair}>Chairs</button>
                    <button onClick={showkitchen}>Kitchens</button>
                    <button onClick={showelevator}>Elevators</button> */}

                </div>
            </div>

            <div className="Furniture">
                <div className="ornament-head">
                    <div>
                        <h1>{ sofa ? 'Sofas' : table ? 'Tables'  : chair ? 'chair' : lamp ? 'Lamps' : kitchen ? 
                        'Kitchens' : elevator?'Elevator': 'All'}</h1>
                    </div>
                </div>
               <div className='allItem'>
               {All &&
                    <>
                        <Sofa />
                       
                     
                        {/* <Lamp />
                         <Chair />
                        <Kitchen />
                           <Tables />
                        <Elevator /> */}
                    </>}
                {chair && <Chair />}
                {table && <Tables />}

           

                {sofa && <Sofa />}

                {/* {kitchen && <Kitchen />
                     {lamp && <Lamp />}}
                {elevator && <Elevator />} */}

               </div>
            </div>
        </>
    );
};

export default Home;
