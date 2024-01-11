

const App = () => {
    const messages = ['Hello World', 'Olá Mundo', 'Bom dia'];
    
        return (
            <>
                {messages.map((message) => (
                    <h1>{message}</h1>
                ))}
            </>
        );
}

export default App;
