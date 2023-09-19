import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar } from "recharts";
import { XAxis, YAxis } from 'recharts';
import { Tooltip } from "recharts";
import { Audio, Grid } from  'react-loader-spinner'

const Phones = () => {
    // For loading data we need a state to hold data 
    const [phones, setPhones] = useState([]);

    //declare a state to show loading spinner default is true when data is loading
    const [loading, setLoading] = useState(true);

    //Loading data in asynchronous way, first time with empty dependency
    useEffect(() =>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))

        // We will do the same thing using axios they automatically convert data into json
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            // Mapping the phoneData to create our own required data
            const phonesWithFakeData = phoneData.map(phone => {
                const obj = {
                    name: phone.phone_name,
                    // Getting price by split the slug 
                    price: parseInt(phone.slug.split('-')[1])
                }
                //For multiline we have explicitly write return
                return obj;
            }) 
            console.log(phonesWithFakeData);
            setPhones(phonesWithFakeData);
            //now we will setLoading to false as now loading is over
            setLoading(false);
        })
    },[]);
    return (
        <div>
            {/* To make conditional we will make it dynamic */}
            {loading && <div>
                <Audio
                height="50"
                width="50"
                color="blue"
                ariaLabel="audio-loading"
                wrapperStyle={{}}
                wrapperClass="wrapper-class"
                visible={true}
                />
                <Grid
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />
            </div>
            }
            <h2 className="text-5xl">Phones: {phones.length}</h2>
            {/* Creating barchart with phone name and price data  */}
            <BarChart width={900} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;