import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {

    afterAll(() => {
        setupServer(rest.get('https://jsonplaceholder.typicode.com/todos', (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json(
                    [
                        {
                            "userId": 1,
                            "id": 1,
                            "title": "delectus aut autem",
                            "completed": false
                        },
                        {
                            "userId": 1,
                            "id": 2,
                            "title": "quis ut nam facilis et officia qui",
                            "completed": false
                        }
                    ]
                )
            )
        }))
    });

    it('Should get the title', async () => {
        render(<App />);
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(await screen.findByText('delectus aut autem')).toBeInTheDocument();
    })
})