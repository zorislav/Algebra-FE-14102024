import { useState } from 'react';
import SearchUsername from './SearchUsername';
import UserInfo from './UserInfo';

export default function ConditionalRender() {
    const [data, setData] = useState(null); 
    const [repos, setRepos] = useState([]);  

    const handleSearch = (userData, userRepos) => {
        setData(userData);
        setRepos(userRepos);
    };

    const handleReset = (userData, userRepos) => {
        setData(prevData => {
            console.log('Previous data:', prevData);
            return null;
        });
        setRepos(prevRepos => {
            console.log('Previous repos:', prevRepos);
            return [];
        });
    };

    return data ? (
        <UserInfo data={data} repos={repos} onReset={handleReset} />
    ) : (
        <SearchUsername onSearch={handleSearch} />
    );
}