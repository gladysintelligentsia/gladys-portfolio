import { useEffect, useState, useContext } from 'react';
import GameCard from '../components/GameCard';
import UserContext from '../UserContext';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Added missing Link import

export default function Games() {
    const { user } = useContext(UserContext); 
    const [games, setGames] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:4000/games/all', {
            headers: {
                Authorization: `Bearer ${ localStorage.getItem('token') }`
            }
        })
        .then(res => res.json())
        .then(data => {
            // Fixed mapping property check from data.tasks to data.games
            if (data.games && Array.isArray(data.games)) {
                setGames(data.games);
            } else {
                setGames([]);
            }
        })
        .catch(err => {
            console.error("Error fetching games:", err);
            setGames([]);
        });
    };

    useEffect(() => {
        if (user && localStorage.getItem('token')) {
            fetchData();
        }
    }, [user]);

    return (
        <Container>
            {user && localStorage.getItem('token') ? (
                games.length > 0 ? (
                    <>  
                        <h1 className='text-center mt-5'>Games Library</h1>
                        <Row className="mt-4"> 
                            {games.map(game => { 
                                return (
                                    <Col md={3} key={game._id} className="mb-4">
                                        {/* Updated prop matching strategy to pass 'game' properly */}
                                        <GameCard game={game} />
                                    </Col>
                                );
                            })}
                        </Row>
                    </>
                ) : (
                    <div className="text-center mt-5">
                        <h1>No Games Found</h1>
                    </div>
                )
            ) : (
                <div className="text-center mt-5">
                    <h1>You are not logged in</h1>
                    <Link className="btn btn-primary mt-3" to={"/login"}>Login to View</Link>
                </div>
            )}
        </Container>
    );
}