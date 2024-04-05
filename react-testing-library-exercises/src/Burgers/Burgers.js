import { useState, useEffect } from 'react';
import { getBurgers } from './getBurgers';

export const Burgers = () => {
    const [burgers, setBurgers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getBurgers()
            .then(data => setBurgers(data))
            .catch(err => setError(err))
    }, []);

    if (error) {
        return <div>There was an error!</div>
    }

    return <table>
        <tbody>
            {burgers.map((burger) => {
                return <tr key={burger.id}>
                    <td>{burger.name}</td>
                </tr>
            })}
        </tbody>
    </table>
}
