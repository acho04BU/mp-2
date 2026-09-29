import styled from "styled-components";
import {type Picture} from "../types/Picture.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;

const SingleCharDiv=styled.div<{status: string}>`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: ${(props)=>(props.is_boosted ? 'darkorange' : 'black')};
    color: ${(props) => (props.is_boosted ? 'green' : 'grey')};
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;

export default function Cats(props: {data:Picture[]}){

    return (
        <AllCharsDiv>
            {
                props.data.map((pic: Picture) =>
                    <SingleCharDiv key={pic.id}>
                        <h1>{pic.title}</h1>
                        <p>{pic.is_boosted ? `boosted image`: `non-boosted image`}</p>
                        <img src={pic.thumbnail[0]} alt={pic.thumbnail[3]} />
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    )
}