import { FC, useState } from 'react';

const ListPage: FC = () => {
    const [items, setItems] = useState(['Hello', 'World']) as [string[]];
    const [searchText, setSearchText] = useState('') as [string];

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value.toLowerCase());
    };

    const filteredItems = items.filter((item:string) => item.toLowerCase().includes(searchText));
    
    return (
        <>
            <input type="text" name="search" id="search" placeholder="Search" onInput={handleSearch}/>

            <ul>
                {filteredItems.map((item:string, index:number) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
};

export default ListPage;