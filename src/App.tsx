import {useState, useEffect} from 'react';
import {type Picture} from "./types/Picture.ts";
import styled from 'styled-components';
import Cats from "./components/Cats.tsx"


const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px green solid;
`;

export default function App() { //App() is a component, since it returns jsx/tsx

  const[data, setData] = useState<Picture[]>([]); //useState is a hook (preprogrammed helper function)
  //if first value is named x, the second must be setX

  // make http call using fetch, await, and handling exceptions

  //handling exception is done through useEffect

  useEffect(()=> { //async tells the page to do the tasks after first, then come back to the async function
    async function fetchData(){
      //fetch data in a raw JSON data format, which must be converted to JSON
      const rawData = await fetch("https://api.artic.edu/api/v1/artworks/search?q=cats");

      //turn raw JSON Data to readable object

      const {data}: {data:Picture[]} = await rawData.json()
      //everything that has been pulled is being put into data through setData
      setData(data);
    }
    fetchData()
        .then(()=> console.log("success"))
        .catch((e) => console.error("The following error occurred: " +e));
  }, [data.length]); //check if the length of the data from the API changed


  return (
    <ParentDiv>
      <Cats data={data}/>
    </ParentDiv>
  )
}
