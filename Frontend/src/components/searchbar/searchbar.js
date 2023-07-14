import React from 'react';
import img2 from "../../images/linkedin.png";
import { useState, useEffect } from "react";

export default function SearchBar() {
    const [getData, getSetData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const fetchData = async () => {
        try {
            await fetch("http://localhost:8000/lids")
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const { application } = data;
                    getSetData(application);

                    setLoading(false);
                });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleFilter = (event) => {
        setSearchTerm(event.target.value);
        const searchWord = event.target.value;
        const newFilter = getData.filter((value) => {
            if (isNaN(searchTerm))
                return value.branch.includes(searchWord.toUpperCase());
            else
                return value.year.includes(searchWord);
        });
        setFilteredData(newFilter);
    };

    const tableRows = filteredData.map(createRow);
    const tableRows1 = getData.map(createRow);

    function SeniorComponent(props) {
        return (
            <tr className="connect-rows">
                <td className="connect-td">{props.name}</td>
                <td className="connect-td">{props.branch}</td>
                <td className="connect-td">{props.year}</td>
                <td className="connect-td">{<div className="connect-link">
                    <a href={props.url} target="_blank">
                        <img src={img2} alt="logo" />
                    </a>
                </div>}</td>
            </tr>
        );
    }

    function createRow(info) {
        return (
            <SeniorComponent
                key={info.id}
                name={info.name}
                branch={info.branch}
                year={info.year}
                url={info.linkedInId}
            />
        );
    }

    function Details() {
        return <div className="connect-details">
            <table className="connect-stripped">
                <thead>
                    <tr className="connect-head">
                        <th className="connect-th">Name</th>
                        <th className="connect-th">Branch</th>
                        <th className="connect-th">Year</th>
                        <th className="connect-th">LinkedIn Handle</th>
                    </tr>
                </thead>
                <tbody>{tableRows1}</tbody>
            </table>
        </div>
    }

    return (
        <div className="connect-search">
            <input
                type="text"
                placeholder="Search Using Branch Or Year..."
                onChange={handleFilter}
            />
            {console.log(filteredData)}
            <div className='dataResult'>
                {searchTerm !== '' ?
                    <table className="connect-stripped">
                        <tbody>{tableRows}</tbody>
                    </table>
                    :
                    <div className="connect-details">
                        <table className="connect-stripped">
                            <thead>
                                <tr className="connect-head">
                                    <th className="connect-th">Name</th>
                                    <th className="connect-th">Branch</th>
                                    <th className="connect-th">Year</th>
                                    <th className="connect-th">LinkedIn Handle</th>
                                </tr>
                            </thead>
                            <tbody>{tableRows1}</tbody>
                        </table>

                    </div>
                }
            </div>

        </div>
    )
}
