import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { githubApi } from '../sources/githubApiRequest';

export default function SearchUsername({ onSearch }) {
    const [username, setUsername] = useState('');

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSearch = async () => {
        if (username.trim() === '') {
            alert("Please enter a username");
            return;
        }

        try {
            const { data, repos } = await getData(username);
            if (!data || !repos) {
                alert('No data found for this username.');
                return;
            }
            onSearch(data, repos);  // Pass the fetched data and repos to parent component
        } catch (error) {
            alert('Error fetching data: ' + error.message);
            console.error(error);
        }
    };

    // Fetch user data and repos
    async function getData(username) {
        try {
            const userResponse = await fetch(`${githubApi}/${username}`);
            const userData = await userResponse.json();
            if (!userData) {
                throw new Error('User not found.');
            }

            const reposResponse = await fetch(`${githubApi}/${username}/repos`);
            const reposData = await reposResponse.json();

            return { data: userData, repos: reposData };
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;  // Re-throw the error so it can be handled in the caller
        }
    }

    return (
        <div className="inputContainer">
            <div className="formContainer">
                <InputGroup>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="searchTitle">Username Finder</Form.Label>
                        <Form.Control
                            className="inputSearch"
                            type="text"
                            placeholder="Eg. facebook"
                            value={username}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Button variant="success" className="searchButton" onClick={handleSearch}>
                        Search
                    </Button>
                </InputGroup>
            </div>
        </div>
    );
}
