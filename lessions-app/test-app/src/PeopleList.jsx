import OneMan from "./OneMan";


function PeopleList({ data }) {

    return (
        <ul>
            {data.map((item, i) => {
                return <OneMan {...item} key={i} />
            })}
        </ul>
    )
}

export default PeopleList;