import {useState} from 'react';

export default function Toggle(){

    const [show, setShow] = useState(false);
    return(<main>
        <button className="bg-blue-200"
        onClick={()=>setShow(!show)}
        >Toggle me</button>
{show && <p>Button is visible, ABC</p>}

    </main>);
}