import { Container } from "react-bootstrap"

const category = [
    {
        "value": "All"
    },
    {
        "value": "Frontend"
    },
    {
        "value": "Backend"
    }
];

export const MainPortfolio = () => {
    return (
        <>
            <section id="portfolio">
                <Container className="d-flex justify-content-center align-items-center flex-column mt-2">
                    <div className="d-flex justify-content-center flex-column align-items-center">
                        <h1>
                            Welcome to my portfolio!
                        </h1>
                        <p>Discover my latest works and experience in design and development. <br /> I believe that every project has its own unique story. Happy exploring!</p>
                    </div>
                    <div className="category w-50 d-flex justify-content-center">
                        {category.map((item, index) => (
                            <button key={index} className="me-3">{item.value}</button>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    )
}
