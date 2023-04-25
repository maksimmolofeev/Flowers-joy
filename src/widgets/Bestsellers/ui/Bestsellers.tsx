import cls from './Bestsellers.module.scss';

interface BestsellersProps {
}

export const Bestsellers: React.FC<BestsellersProps> = (props) => {

    return (
        <div className={cls.Bestsellers}>
            <h2>Бестселлеры</h2>
            <div>
                
            </div>
        </div>
    );
}