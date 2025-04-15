import Button from 'react-bootstrap/esm/Button';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';

export default function UserInfo({ data, repos, onReset }) {

    const handleResetData = () => {

        onReset(null,[]);
    }

    return (
        <>
            <div className='resetStyle'>
            <h2>{data.login}</h2>
            <p>{data.login} has {repos.length} repositories</p>
            <Button size='sm' onClick={handleResetData}>Search for another username</Button>
            </div>
            <ListGroup>
                {
                    repos.map((repo) => (
                        <ListGroupItem key={repo.id} className='liColor'>{repo.name}</ListGroupItem>
                    ))
                }
            </ListGroup>
        </>
    );
}
