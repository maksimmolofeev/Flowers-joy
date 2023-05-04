import { Container } from 'shared/ui/Container/Container';
import cls from './Companies.module.scss';
import { Text, TextSize } from 'shared/ui/Text/Text';

interface CompaniesProps {
    isTitle?: boolean
}

export const Companies: React.FC<CompaniesProps> = (props) => {
    const {
        isTitle
    } = props

    // eslint-disable-next-line max-len
    const URL = 'https://1.downloader.disk.yandex.ru/preview/4f55637346d599814db8abd992351beab13df171d5a8553d50776f7c6e5d6a74/inf/JgUCMq8jiXgZEf2uBgES3KmYkbDiQU3wyMrFdcinMqe3r8eWzjgI3sSWqQjdLPwSIhy7I-8jwA2CJ44DmqSRHQ%3D%3D?uid=1438650916&filename=IMG_20221214_140907.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1438650916&tknv=v2&size=1894x913'

    return (
        <section className={cls.Companies}>
            <Container flexDirectionRow={false}>
                {isTitle && <h2 className={cls.title}>Компаниям</h2>}
                <div className={cls.content}>
                    <div className={cls.img_block}>
                        <img className={cls.img} src={URL} alt="" />
                    </div>
                    <div className={cls.text}>
                        <Text
                            text='Мы поможем оформить вам любое пространство: квартиру, дом, офис,
                                салон красоты, ресторан или любую другую зону.'
                        />
                        <Text
                            text='В первую очередь мы заботимся о свежести цветови эстетике создаваемых
                                букетов  и композиций'
                        />
                        <Text
                            text='Наша задача быть надежными партнерами и дарить эмоции радости нашим клиентам'/>
                    </div>
                </div>
            </Container>
        </section>
    );
}