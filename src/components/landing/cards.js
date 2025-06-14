import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './cards.css';

const cardData = [
    {
        id: 'Expertise_mmw',
        title: 'Years Of Expertise',
        value: 10,
        unit: '+',
    },
    {
        id: 'Australian_Owned_mmw',
        title: 'Australian Owned',
        value: 100,
        unit: '%',
    },
    {
        id: '5_star_rated_mmw',
        title: 'Web Design Agency',
        value: 5,
        unit: '-Star rated',
    },
    {
        id: 'Satisfied-Clients',
        title: 'Satisfied Clients',
        value: 1000,
        unit: '+',
    },
];

function Cards() {
    return (
        <section className="cards-section" aria-label="Company Achievements">
            <div className="cards-container">
                {cardData.map((card) => (
                    <Card key={card.id} {...card} />
                ))}
            </div>
        </section>
    );
}

function Card({ title, value, unit }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <div className="card" ref={ref}>
            <h3 className="card-title">{title}</h3>
            <div className="card-value">
                {inView && (
                    <CountUp
                        start={0}
                        end={value}
                        duration={2.5}
                        separator=","
                        formattingFn={(val) => (val === 1000 ? '1,000' : val)}
                    />
                )}
                <span className="card-unit">{unit}</span>
            </div>
        </div>
    );
}

export default Cards;