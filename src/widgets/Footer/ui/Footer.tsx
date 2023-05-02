import cls from './Footer.module.scss';

interface FooterProps {
}

export const Footer: React.FC<FooterProps> = (props) => {

    return (
        <footer className={cls.footer}>
            <div className={cls.content}>
                <p className={cls.text}>© {new Date().getFullYear()} FlowersJoy</p>
            </div>
        </footer>
    );
}